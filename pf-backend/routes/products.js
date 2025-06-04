const express = require("express");
const router = express.Router();

const { newProdSchema } = require("../schemas/product");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/new', async (req, res) => {
    try {
        const { prodName, prodValue, avaliation, imageLink, category, subCategory } = newProdSchema.parse(req.body)

        const newProduct = await prisma.product.create({
            data: {
                prodName,
                prodValue,
                avaliation,
                imageLink,
                category,
                subCategory,
            }
        })

        res.status(201).json({ message: "Product created! See the details", product: newProduct })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.put("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { prodName, prodValue, avaliation, imageLink, category, subCategory } = req.body;

        // Ensure ID is converted to number if stored as integer
        const product = await prisma.product.findUnique({ where: { id: Number(id) } });

        if (!product) {
            return res.status(404).json({ message: 'Product not found!' });
        }

        const editProduct = await prisma.product.update({
            where: { id: Number(id) },
            data: {
                prodName,
                prodValue,
                avaliation,
                imageLink,
                category,
                subCategory
            }
        });

        res.status(200).json({ status: 200, message: `Product with id ${id} updated`, data: editProduct });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

router.delete("/del/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let prod

        try {
            prod = await prisma.product.findUnique({ where: { id: Number(id) } });
        } catch (err) {
            return res.status(400).json({ message: 'Id not found!', cError: err })
        }

        if (prod) {

            await prisma.product.update({
                where: { id: Number(id) },
                data: {
                    deleted: true
                }
            })

            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Product deleted.',
            });

        } else {
            return res.status(404).json({ message: 'Product not found!' })
        }

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
})

router.get("/list/all", async (req, res) => {
    try {
        let products = await prisma.product.findMany()
        products.forEach((product) => {
            if (product.deleted) {
                let index = products.indexOf(product)
                if (index > -1) {
                    products.splice(index, 1)
                }
            }
        })
        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Products listed.',
            data: { products },
        });
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.get("/list/:id", async (req, res) => {
    try {
        const { id } = req.params
        let product
        try {
            product = await prisma.product.findUnique({ where: { id: Number(id) } })
        } catch (err) {
            return res.status(404).json({ message: "Product Not Found", cError: err.message })
        }

        if (product && !product.deleted) {
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Product listed.',
                data: { product },
            });
        } else {
            return res.status(404).json({ message: "Product Not Found" })
        }
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.get("/endP", (req, res) => {
    try {
        return res.status(200).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Product", Status: "Working" })
    } catch (err) {
        return res.status(400).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Product", Status: "Not working", Error: err.message })
    }
})
module.exports = router;