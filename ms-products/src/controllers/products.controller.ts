import { Request, Response } from 'express';
import { getProducts, getProductById, createProductInDb, updateProductInDb, deleteProductFromDb } from '../services/product.service';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await createProductInDb(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send('Error creating product');
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await updateProductInDb(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).send('Error updating product');
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await deleteProductFromDb(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
};
