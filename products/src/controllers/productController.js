import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getProducts(req, res) {
  const products = await prisma.product.findMany();
  res.json(products);
}

export async function createProduct(req, res) {
  const { name, price, stock } = req.body;
  const product = await prisma.product.create({ data: { name, price, stock } });
  res.status(201).json(product);
}

export async function DeleteProduct(req, res) {
  const id = req.params.id;
  await prisma.product.delete({where: {
    id: id,
  } }) 
}

export async function editProduct(req, res) {
  const id = req.params.id;
  const date = req.body;

  await prisma.product.update({where:{
    id: id,  },
  data: date
  })
}