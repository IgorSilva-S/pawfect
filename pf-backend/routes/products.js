const express = require("express");
const router = express.Router();

const newProdSchema = require("../schemas/product");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/new', async (req, res) => {
    try {
        const {prodName, prodValue, description, imageLink} = newProdSchema.parse(req.body)

        const newProduct = await prisma.product.create({
            data: {
                prodName,
                prodValue,
                description,
                imageLink
            }
        })

        res.status(201).json({ message: "Product created! See the details", product: newProduct })
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.put("/editProd/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { prodName, prodValue, description, imageLink } = req.body;

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
                description,
                imageLink
            }
        });

        res.status(200).json({ status: 200, message: `Product with id ${id} updated`, data: editProduct });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});


module.exports = router;