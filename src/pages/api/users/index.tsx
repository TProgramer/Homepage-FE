import { NextApiRequest, NextApiResponse } from "next";

const user_pool = [
  {
    id: "1",
    profile: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "권영재",
    age: 21,
  },
  {
    id: "2",
    profile: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "권예지",
    age: 23,
  },
  {
    id: "3",
    profile: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    name: "김기열",
    age: 26,
  },
  {
    id: "4",
    profile: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    name: "김준영",
    age: 19,
  },
  {
    id: "5",
    profile: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    name: "박인재",
    age: 20,
  },
  {
    id: "6",
    profile: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    name: "서청운",
    age: 26,
  },
  {
    id: "7",
    profile: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    name: "유세헌",
    age: 25,
  },
  {
    id: "8",
    profile: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    name: "최민준",
    age: 24,
  },
  {
    id: "9",
    profile: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    name: "최예찬",
    age: 23,
  },
];

export function getUser(id: string) {
  return user_pool.find((user) => user.id === id);
}

export function getRandomUser(size: number) {
  const random_user = [];
  for (let i = 0; i < size; i++) {
    random_user.push(user_pool[Math.floor(Math.random() * user_pool.length)]);
  }
  return random_user;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const { id } = req.query;

    const user = getUser(id as string);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(405).end();
  }
}
