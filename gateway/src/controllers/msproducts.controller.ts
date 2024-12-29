import { Request, Response } from 'express';
import { fetchFromMS250 } from '../services/cpannel.service';

export const getDataServiceMS250 = async (req: Request, res: Response) => {
  try {
    const serviceMS250 = await fetchFromMS250();
    res.json({
      ms250: serviceMS250
    });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
