const { z } = require('zod')

const cartSchema = z.object({
    prodId: z.number(),
    userId: z.number()
})

module.exports = { cartSchema }