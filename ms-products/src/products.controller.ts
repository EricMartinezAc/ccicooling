import { Request, Response } from 'express';
import { loginProductInDb, findProductInDb } from './product.service';


export const loginProduct = async (req: Request, res: Response) => {
  try {
    const {owner, clav_prodct} = req.body
    console.log(`into loginProduct ${owner}, ${clav_prodct}`)
    const loginProduct = await loginProductInDb(owner, clav_prodct);
    console.log(`output loginProduct ${loginProduct}`)
    res.status(201).json(loginProduct);
  } catch (error) {
    res.status(500).send('Error find product');
  }
};

export const findProduct = async (req: Request, res: Response) => {
  try {
    const {id} = req.body
    console.log(`into findProduct ${id}`)
    const findProduct = await findProductInDb(id);
    console.log(`output findProduct ${findProduct}`)
    res.status(201).json(findProduct);
  } catch (error) {
    res.status(404).send('Error find product');
  }
};
