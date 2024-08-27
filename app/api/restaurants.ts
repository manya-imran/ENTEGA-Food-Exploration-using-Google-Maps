import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lng } = req.query;

  // Mock data, replace with actual API call
  const restaurants = [
    { name: 'Restaurant 1', address: '123 Main St' },
    { name: 'Restaurant 2', address: '456 Oak St' },
    { name: 'Restaurant 3', address: '789 Pine St' },
  ];

  res.status(200).json({ restaurants });
}
