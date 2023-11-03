import { DateTime, FixedOffsetZone } from "luxon";

export function convertTime(time, timezone) {
  // Assuming your OpenWeather timestamp is in UTC
  const openWeatherTimestamp = parseInt(time);

  // Define the destination time zone offset in seconds
  const destinationTimeZoneOffsetSeconds = parseInt(timezone);

  // Create a Luxon FixedOffsetZone using the destination time zone offset
  const destinationTimeZone = FixedOffsetZone.instance(
    destinationTimeZoneOffsetSeconds / 60
  );

  // Create a Luxon DateTime object from the timestamp in UTC
  const timestamp = DateTime.fromSeconds(openWeatherTimestamp);

  // Convert the timestamp to the destination time zone
  const destinationTime = timestamp.setZone(destinationTimeZone);

  // Format the date and time in the local and destination time zones
  const localTime = timestamp.toLocaleString(DateTime.DATETIME_HUGE);
  const destinationTimeFormatted = destinationTime.toLocaleString(
    DateTime.DATETIME_FULL
  );
  const localDay = timestamp.toFormat("ccc");
  const localHour = timestamp.toFormat("t a");
  const localHourSimple = timestamp.toFormat("T");
  const localFullDate = timestamp.toFormat("ccc DD");
  const DestinationDay = destinationTime.toFormat("ccc");
  const DestinationHour = destinationTime.toFormat("t a");
  const DestinationHourSimple = destinationTime.toFormat("T");
  const DestinationFullDate = destinationTime.toFormat("ccc DD");

  if (timezone) {
    return {
      day: DestinationDay,
      hour: DestinationHour,
      hourSimple: DestinationHourSimple,
      fullDate: DestinationFullDate,
      time: destinationTimeFormatted,
    };
  }

  return {
    day: localDay,
    hour: localHour,
    hourSimple: localHourSimple,
    fullDate: localFullDate,
    time: localTime,
  };
}

export default convertTime;
