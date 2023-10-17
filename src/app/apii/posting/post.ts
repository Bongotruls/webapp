import { NextApiRequest, NextApiResponse } from 'next';

export default async function postStringHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;

    if (typeof data === 'string') {
     

      res.status(201).json({ success: true, message: 'String data added to the API' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid data format' });
    }
  } 
}

