import { Request, Response } from 'express';
import { fetchFromService1, fetchFromService2 } from '../services/ms250.service';

export const getGatewayData = async (req: Request, res: Response) => {
  try {
    const service1Data = await fetchFromService1();
    res.json({
      ms250: service1Data
    });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
