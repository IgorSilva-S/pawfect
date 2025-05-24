const { z } = require('zod')

const newTransactionSchema = z.object({
    userId: z.number(),
    prodId: z.number(),
    qnt: z.number()
})

module.exports = {newTransactionSchema}