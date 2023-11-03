import { DateTime } from "luxon";
import convertTime from "./convertTime";

const formatTime = (input, timeZone) => {
  const timeInMS = DateTime.fromSQL(input);
  return convertTime(timeInMS.ts / 1000, timeZone);
};

export function groupForcastByDay(forcast, destinationTimeZone) {
  let currentDay = formatTime(forcast?.list[0].dt_txt, destinationTimeZone);

  let groupedData = [];
  let array = [];
  forcast?.list.map((data, index) => {
    const formatedDate = formatTime(data.dt_txt, destinationTimeZone);
    if (formatedDate.day === currentDay.day) {
      array.push(data);
    } else {
      groupedData.push({ date: currentDay, values: array });
      currentDay = formatedDate;
      array = [];
      array.push(data);
    }
    if (index === 39 && array.length > 0) {
      groupedData.push({ date: formatedDate, values: array });
    }
    return;
  });

  return groupedData;
}
