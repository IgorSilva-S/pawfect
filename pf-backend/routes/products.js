const express = require("express");
const router = express.Router();

const newProdSchema = require("../schemas/product");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/new', async (req, res) => {
    try {
        const {prodName, prodValue, description} = newProdSchema.parse(req.body)

        const newProduct = await prisma.product.create({
            data: {
                prodName,
                prodValue,
                description
            }
        })

        res.status(201).json({ message: "Product created! See the details", product: newProduct })
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

module.exports = router;