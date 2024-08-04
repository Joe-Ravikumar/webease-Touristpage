export function extracTime(dateString: string) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Months are 0-indexed, so add 1
  return `${month}/${day} ${hours}:${minutes}`;
}

function padZero(num: number) {
  return num.toString().padStart(2, "0");
}
