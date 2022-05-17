import { NextApiRequest, NextApiResponse } from "next";
import { getRandomUser } from "./users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const { type } = req.query;
    if (type !== "baekjoon" && type !== "attendance") {
      res.status(400).end();
    }
    res.status(200).json(getRandomUser(3));
  } else {
    res.status(405).end();
  }
}
