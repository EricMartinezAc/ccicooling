import { Request, Response } from 'express';
import { fetchClimateData } from '../services/cpannel.service';

export const getDataServiceCpannel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { latitude, longitude } = req.body; 

    if (!latitude || !longitude) {
      res.status(400).json({ error: 'Latitud y longitud son requeridas.' });
      return;
    }

    const climateData = await fetchClimateData(latitude, longitude);
    res.json({
      data: climateData,
    });
  } catch (error:any) {
    res.status(500).json({ error: `Error obteniendo datos del clima: ${error.message}` });
  }
};
