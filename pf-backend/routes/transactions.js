const express = require("express");
const router = express.Router();
const { newTransactionSchema } = require('../schemas/transaction')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/new", async (req, res) => {
  try {
    const { userId, prodId, qnt } = newTransactionSchema.parse(req.body)
    let product
    let user

    try {
      product = await prisma.product.findUnique({ where: { id: prodId } })
    } catch (err) {
      return res.status(404).json({ message: 'Product not Found' })
    }

    try {
      user = await prisma.user.findUnique({ where: { id: userId } })
    } catch (err) {
      return res.status(404).json({ message: 'User not found' })
    }

    let geralValue = parseFloat(product.prodValue)
    geralValue = geralValue * qnt

    let newTransaction

    try {
      newTransaction = await prisma.transactions.create({
        data: {
          userId,
          prodId,
          qnt,
          geralValue
        }
      })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }

    res.status(200).json({ message: 'Transaction maked! Thank U for your purchase!', transaction: newTransaction })
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.delete("/del/:id", async (req, res) => {
  const { id } = req.params
  let transaction

  try {
    transaction = await prisma.transactions.findUnique({ where: { id: Number(id) } })
  } catch (err) {
    return res.status(404).json({ error: 'Id not found!', message: err.message })
  }

  if (transaction) {

    await prisma.transactions.delete({ where: { id: Number(id) } })

    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Transaction deleted.',
    });

  } else {
    return res.status(404).json({ message: 'Transaction not found!' })
  }

})

router.get("/list/all", async (req, res) => {
  try {
    const transactions = await prisma.transactions.findMany()
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Transactions listed.',
      data: { transactions },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.get("/list/:id", async (req, res) => {
  try {
    const { id } = req.params
    let transaction
    try {
      transaction = await prisma.transactions.findUnique({ where: { id: Number(id) } })
    } catch (err) {
      return res.status(404).json({ message: "Transaction Not Found", cError: err.message })
    }

    if (transaction) {
      return res.status(200).json({
        success: true,
        status: 200,
        message: 'Transaction listed.',
        data: { transaction },
      });
    } else {
      return res.status(404).json({ message: "Transaction Not Found" })
    }
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.get("/fullTransaction/:id", async (req, res) => {
  try {
      const { id } = req.params
  let transaction

  try {
    transaction = await prisma.transactions.findUnique({ where: { id: Number(id) }})
  } catch (err) {
    return res.status(404).json({message: `Cannot found transaction with id nº ${id}`})
  }

  const userId = transaction.userId
  const prodId = transaction.prodId
  let user, product

  try {
    user = await prisma.user.findUnique({ where: { id: userId } })
  } catch {
    return res.status(404).json({ message: `Cannot found user with id nº ${userId}` })
  }

  try {
    product = await prisma.product.findUnique({ where: { id: prodId } })
  } catch {
    return res.status(404).json({ message: `Cannot found product with id nº ${prodId}` })
  }

  let fullTransaction = {
    transactionId: id,
    transactionDate: transaction.transDate,
    name: user.name,
    username: user.username,
    userEmail: user.email,
    userAddress: user.address,
    product: product.prodName,
    productCategory: product.category,
    productAvaliation: product.avaliation,
    singleValue: product.prodValue,
    quantity: transaction.qnt,
    transactionValue: transaction.geralValue
  }

  res.status(200).json({ CompleteTransaction: fullTransaction})
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get("/endP", (req, res) => {
  try {
    return res.status(200).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Transactions", Status: "Working" })
  } catch (err) {
    return res.status(400).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "Transactions", Status: "Not working", Error: err.message })
  }
})

module.exports = router