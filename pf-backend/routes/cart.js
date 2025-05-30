const express = require("express");
const router = express.Router();
const { cartSchema } = require("../schemas/cart")
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/add', async (req, res) => {
    const { userId, prodId } = cartSchema.parse(req.body)

    try {
        const prodCart = await prisma.cart.create({
            data: {
                userId,
                prodId
            }
        })

        return res.status(201).json({ message: 'Added' })
    } catch (err) {
        return res.status(400).json({ error: err })
    }
})

router.get('/list/:id', async (req, res) => {
    const { id } = req.params
    let cartProduct
    let product
    let user
    try {
        cartProduct = await prisma.cart.findUnique({ where: { id: Number(id) }})
    } catch {
        return res.status(404).json({ message: 'Not Found Cart'})
    }
    try {
        product = await prisma.product.findUnique({ where: { id: cartProduct.prodId }})
    } catch {
        return res.status(404).json({ message: 'Not Found Product'})
    }
    try {
        user = await prisma.user.findUnique({ where: { id: cartProduct.userId }})
    } catch {
        return res.status(404).json({ message: 'Not Found User'})
    }

    const productInCart = {
        id: id,
        product: product.prodName,
        value: product.prodValue,
        userCart: user.name,
        addedIn: cartProduct.addedIn
    }

    return res.status(200).json({ cart: productInCart })
})

module.exports = router