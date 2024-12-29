import { Request, Response } from 'express';
import { getMS250Message } from './services';

export const getMS250Data = async (req: Request, res: Response) => {
  try {
    const message = await getMS250Message();
    res.json({ message });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
