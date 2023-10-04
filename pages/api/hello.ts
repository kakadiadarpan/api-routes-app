import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const statusCode = req.query.status ? Number(req.query.status) : 200;

  if (statusCode !== 200) {
    console[statusCode >= 500 ? 'error' : 'warn'](`Error with status code: ${statusCode}`);
    return res.status(statusCode).json({ message: `Error with status code: ${statusCode}` });
  }
  return res.status(200).json({ message: 'Hello world' });
}
