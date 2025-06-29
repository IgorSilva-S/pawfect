const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/add', async (req, res) => {
    const { userId, prodId } = req.body
    console.log(userId, prodId)
    try {
        const wishlist = await prisma.wishList.create({
            data: {
                userId,
                prodId
            }
        })

        return res.status(201).json({ message: 'Added', product: wishlist })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err })

    }
})

router.delete('/remove/:id', async (req, res) => {
    const { id } = req.params
    try {
        await prisma.wishList.delete({ where: { id: Number(id) } })

        return res.status(200).json({ message: 'Product removed from Wish List' })
    } catch (err) {
        return res.status(400).json({ message: err })
    }
})

router.get('/list/all', async (req, res) => {
    try {
        let allWL = await prisma.wishList.findMany()


        return res.status(200).json({ message: 'All Products in global wishlist found', wishList: allWL, hint: 'To see specific wishlist, use /list/{id}' })
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.get('/list/:id', async (req, res) => {
    const { id } = req.params
    try {
        let wishSpecific
        let product
        let user
        try {
            wishSpecific = await prisma.wishList.findUnique({ where: { id: Number(id) } })
        } catch {
            return res.status(404).json({ message: 'Not Found Wish' })
        }
        try {
            product = await prisma.product.findUnique({ where: { id: wishSpecific.prodId } })
        } catch {
            return res.status(404).json({ message: 'Not Found Product' })
        }
        try {
            user = await prisma.user.findUnique({ where: { id: wishSpecific.userId } })
        } catch {
            return res.status(404).json({ message: 'Not Found User' })
        }

        const prodWishList = {
            id: id,
            product: product.prodName,
            value: product.prodValue,
            wishUser: user.name,
            addedIn: wishSpecific.addedIn
        }

        return res.status(200).json({ cart: prodWishList })
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.get("/list/user/:email", async (req, res) => {
    try {
        const { email } = req.params;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || user.deleted) {
            return res.status(404).json({ error: "Cannot find user" });
        }

        const wishList = await prisma.wishList.findMany({
            where: { userId: user.id }
        });

        return res.status(200).json({
            message: `Get wishlist from the user ${user.name}`,
            wishList
        });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

router.get("/endP", (req, res) => {
    try {
        return res.status(200).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Wish List", Status: "Working" })
    } catch (err) {
        return res.status(400).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Wish List", Status: "Not working", Error: err.message })
    }
})

module.exports = router