import { NextApiRequest, NextApiResponse } from "next";

interface Schedule {
  calendarId: string;
  category: string;
  isVisible: boolean;
  title: string;
  id: string;
  body: string;
  start: Date;
  end: Date;
}

const scheduleTitlePool = [
  "문제 해결 회의",
  "이해 조정 회의",
  "정보 전달 회의",
  "계획 입안 회의",
  "운영 회의",
  "현장 회의",
  "오전 회의",
  "서서 회의",
  "감성 회의",
  "정기 일정",
];

const scheduleBodyPool = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Donec vel ligula non quam bibendum fermentum a quis sapien.",
  "Proin ut sem sed magna ullamcorper pulvinar non in enim.",
  "Cras venenatis urna nec porta condimentum.",
  "Praesent viverra nulla vel ullamcorper elementum.",
  "Maecenas accumsan lectus eu dolor rhoncus, vitae iaculis enim vestibulum.",
  "Mauris a quam commodo, consequat ligula id, euismod ex.",
  "Duis rutrum nisi at nunc mattis, et interdum quam tincidunt.",
  "Nunc posuere enim quis tristique efficitur.",
  "Nullam aliquet sapien eget turpis pretium scelerisque.",
  "Aliquam in sem varius, sagittis tellus pulvinar, feugiat quam.",
  "Sed eleifend justo sit amet tempus sollicitudin.",
  "Nullam in risus in magna ornare hendrerit et feugiat orci.",
  "Morbi consequat orci id metus fermentum tempor.",
  "Donec porttitor urna in ante facilisis vehicula.",
  "Nam vestibulum justo tincidunt urna aliquet interdum.",
  "Phasellus auctor nulla non tincidunt commodo.",
  "Etiam ultrices odio sit amet nibh viverra ullamcorper.",
  "Aliquam vitae tortor tempus, laoreet urna a, semper nisi.",
  "Etiam pellentesque leo ullamcorper consectetur condimentum.",
  "Aenean varius sem vitae rhoncus porttitor.",
  "Ut ut dui vitae urna tempus ultricies eget et nibh.",
  "Etiam a arcu rhoncus, commodo ex vel, iaculis elit.",
  "Integer ac elit eu eros vestibulum molestie sit amet non arcu.",
  "Phasellus a nisi porttitor, iaculis lorem eget, fermentum velit.",
  "Suspendisse vitae mi placerat lectus rutrum egestas bibendum ut lectus.",
  "Pellentesque nec ipsum eget purus aliquet mattis fermentum nec urna.",
  "Nulla in est cursus, tempus lectus eu, finibus dolor.",
  "Nulla sed quam id massa fermentum semper id vel libero.",
  "Nunc pellentesque tellus non nisi placerat, a suscipit sem aliquet.",
  "Maecenas euismod massa viverra varius gravida.",
  "Quisque bibendum leo quis mattis volutpat.",
  "Sed id elit a erat faucibus interdum.",
];

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const schedule: Schedule[] = [];
    const now = new Date();
    const monthBefore = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const monthAfter = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    for (let i = 0; i < 100; i++) {
      const randomTitle =
        scheduleTitlePool[Math.floor(Math.random() * scheduleTitlePool.length)];
      const randomBody =
        scheduleBodyPool[Math.floor(Math.random() * scheduleBodyPool.length)];
      const randomDate = new Date(
        monthBefore.getTime() +
          Math.random() * (monthAfter.getTime() - monthBefore.getTime())
      );
      const afterOneHour = new Date(randomDate.getTime() + 60 * 60 * 1000);

      schedule.push({
        calendarId: Math.floor(i / 10).toString(),
        category: "time",
        isVisible: true,
        title: randomTitle,
        id: `${i}`,
        body: randomBody,
        start: randomDate,
        end: afterOneHour,
      });
    }
    response.status(200).json({ data: schedule });
  } else {
    response.status(405).end();
  }
}
