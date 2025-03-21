const { z } = require("zod");

const newProdSchema = z.object({
    prodName: z.string().min(10).max(50),
    prodValue: z.number(),
    description: z.string().min(10).max(255).optional()
})

module.exports = newProdSchema;