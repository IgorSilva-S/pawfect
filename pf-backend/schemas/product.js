const { z } = require("zod");

const newProdSchema = z.object({
    prodName: z.string().min(10).max(50),
    prodValue: z.number(),
    description: z.string().min(10).max(255),
    imageLink: z.string().min(14)
})

const updateProdSchema = newProdSchema.pick({
  prodName: true,
  prodValue: true,
  description: true,
  imageLink: true
}).partial()


module.exports = {newProdSchema, updateProdSchema};