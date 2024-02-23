function DateFormatter(date) {
  // Using Intl.DateTimeFormat
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

function DateFormatterZone(date) {
  // split the date into date and time
  const [dateString, timeString] = date.split("T");
  const [time, zone] = timeString.split(".");

  return DateFormatter(new Date(`${dateString}T${time}`));
}

export { DateFormatter, DateFormatterZone };
