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
    if (user.deleted) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (product.deleted) {
      return res.status(404).json({ message: 'Product not Found' })
    }

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

    await prisma.transactions.update({
      where: { id: Number(id) },
      data: {
        deleted: true
      }
    })

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
    let transactions = await prisma.transactions.findMany()
    transactions.forEach((transaction) => {
      if (transaction.deleted) {
        let index = transactions.indexOf(transaction)
        if (index > -1) {
          transactions.splice(index, 1)
        }
      }
    })
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

    if (transaction && !transaction.deleted) {
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

router.get("/list/user/:email", async (req, res) => {
      try {
        let transAll = await prisma.transactions.findMany()
        let { email } = req.params

        const user = await prisma.user.findUnique({ where: { email: email } })
        if (user && !user.deleted) {
            try {
                transAll.forEach((trans) => {
                    if (trans.userId != user.id) {
                        let index = transAll.findIndex(trans)
                        if (index > -1) {
                            transAll.splice(index, 1)
                        }
                    }
                })
            } catch (err) {
                return res.sendStatus(204)
            }
        } else {
            return res.status(404).json({ error: 'Cannot found user' })
        }

        return res.status(200).json({ message: `Get transactions from the user ${user.name}`, transaction: transAll })
    } catch (err) {
        return res.status(400).json({ message: err })
    }
})

router.get("/fullTransaction/:id", async (req, res) => {
  try {
    const { id } = req.params
    let transaction

    try {
      transaction = await prisma.transactions.findUnique({ where: { id: Number(id) } })
    } catch (err) {
      return res.status(404).json({ message: `Cannot found transaction with id nº ${id}` })
    }

    if (transaction && !transaction.deleted) {

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

      res.status(200).json({ CompleteTransaction: fullTransaction })
    } else {
      return res.status(404).json({ message: "Cannot found transaction" })
    }

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get("/list/force/all", async (req, res) => {
  try {
    let transactions = await prisma.transactions.findMany()
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Transactions listed - Forced.',
      data: { transactions },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.get("/list/force/:id", async (req, res) => {
  try {
    const { id } = req.params
    let transaction
    try {
      transaction = await prisma.transactions.findUnique({ where: { id: Number(id) } })
    } catch (err) {
      return res.status(404).json({ message: "Transaction Not Found", cError: err.message })
    }

    if (transaction) {
      if (!transaction.deleted) {
        return res.status(200).json({
          success: true,
          status: 200,
          message: 'Transaction listed - Forced.',
          data: { transaction },
        });
      } else {
        return res.status(200).json({
          success: true,
          status: 200,
          message: 'Transaction listed - Forced.',
          warning: 'This transaction is soft-deleted.',
          data: { transaction },
        });
      }
    } else {
      return res.status(404).json({ message: "Transaction Not Found" })
    }
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.get("/fullTransaction/force/:id", async (req, res) => {
  try {
    const { id } = req.params
    let transaction

    try {
      transaction = await prisma.transactions.findUnique({ where: { id: Number(id) } })
    } catch (err) {
      return res.status(404).json({ message: `Cannot found transaction with id nº ${id}` })
    }

    if (transaction) {

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
        transactionValue: transaction.geralValue,
        forced: 'Enabled - Showing other data',
        deleted: transaction.deleted
      }

      if (!transaction.deleted) {
        res.status(200).json({ CompleteTransaction: fullTransaction })
      } else {
        res.status(200).json({ warning: 'This transaction is soft-deleted.', CompleteTransaction: fullTransaction })
      }
    } else {
      return res.status(404).json({ message: "Cannot found transaction" })
    }

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