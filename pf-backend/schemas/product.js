const { z } = require("zod");

const newProdSchema = z.object({
    prodName: z.string().min(10).max(50),
    prodValue: z.number(),
    avaliation: z.number(),
    imageLink: z.string().min(14),
    category: z.string(),
    subCategory: z.string().optional()
})

const updateProdSchema = newProdSchema.pick({
  prodName: true,
  prodValue: true,
  description: true,
  imageLink: true,
  category: true,
  subCategory: true
}).partial()


module.exports = {newProdSchema, updateProdSchema};