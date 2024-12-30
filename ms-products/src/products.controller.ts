import { Request, Response } from 'express';
import { loginProductInDb, getProductById } from './product.service';


export const loginProduct = async (req: Request, res: Response) => {
  try {
    const {owner, clav_prodct} = req.body
    console.log(`into loginProduct ${owner}, ${clav_prodct}`)
    const loginProduct = await loginProductInDb(owner, clav_prodct);
    console.log(`output loginProduct ${loginProduct}`)
    res.status(201).json(loginProduct);
  } catch (error) {
    res.status(500).send('Error creating product');
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    console.log(`out getProducts ${product}`)
    res.json(product);
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
};
