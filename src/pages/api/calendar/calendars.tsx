import { NextApiRequest, NextApiResponse } from "next";

interface Calendar {
  id: string;
  name: string;
  palette: CalendarPalette;
}

interface CalendarPalette {
  color: string;
  bgColor: string;
  dragBgColor: string;
  borderColor: string;
}

interface CalendarDTO {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  dragBgColor: string;
  borderColor: string;
}

const calendarPalettePool: CalendarPalette[] = [
  {
    color: "#000000",
    bgColor: "#9e5fff",
    dragBgColor: "#9e5fff",
    borderColor: "#9e5fff",
  },
  {
    color: "#000000",
    bgColor: "#00a9ff",
    dragBgColor: "#00a9ff",
    borderColor: "#00a9ff",
  },
  {
    color: "#000000",
    bgColor: "#2a9d8f",
    dragBgColor: "#2a9d8f",
    borderColor: "#2a9d8f",
  },
  {
    color: "#000000",
    bgColor: "#e9c46a",
    dragBgColor: "#e9c46a",
    borderColor: "#e9c46a",
  },
  {
    color: "#000000",
    bgColor: "#f4a261",
    dragBgColor: "#f4a261",
    borderColor: "#f4a261",
  },
  {
    color: "#000000",
    bgColor: "#e76f51",
    dragBgColor: "#e76f51",
    borderColor: "#e76f51",
  },
];

const calendarNamePool = [
  "여름 알고리즘 클래스",
  "고급 알고리즘 클래스",
  "프로그래밍 대회 클래스",
  "프로그래밍 기초 클래스",
  "SW마에스트로 대비 클래스",
  "백준 기초 클래스",
  "IT 지식 스터디",
  "NL 동아리 사이트 제작 스터디",
  "웹 기슬 발전사와 많이 쓰이는 기술들",
  "NL 선배 특강",
  "개발자 진로, 취업 전략 알아보기",
];

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const calendar: CalendarDTO[] = [];

    for (let i = 0; i < 10; i++) {
      const random_calendar_name =
        calendarNamePool[Math.floor(Math.random() * calendarNamePool.length)];
      const random_palette =
        calendarPalettePool[
          Math.floor(Math.random() * calendarPalettePool.length)
        ];
      calendar.push({
        id: `${i}`,
        name: random_calendar_name,
        ...random_palette,
      });
    }

    response.status(200).json({ data: calendar });
  } else {
    response.status(405).end();
  }
}
