type DateFormat = "MMMM d, yyyy"; // Define more formats here based on requirement

const options: { [key in DateFormat]: Intl.DateTimeFormatOptions } = {
  "MMMM d, yyyy": { month: "long", day: "numeric", year: "numeric" },
};

export function formatDateTime({
  dateTime,
  format,
}: {
  dateTime: string | Date;
  format: DateFormat;
}) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleString("en-US", options[format]);
  return formattedDate;
}
