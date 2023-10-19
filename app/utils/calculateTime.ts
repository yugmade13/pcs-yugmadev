function calculateTime(date: Date, startTime: string) {
  let hour: number | string = date.getHours();
  let minute: number | string = date.getMinutes();

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  const checkOut = `${hour}:${minute}`

  const start: any = startTime.split(':');
  const end: any = checkOut.split(':');

  const startDate = new Date(0, 0, 0, start[0], start[1], 0);
  const endDate = new Date(0, 0, 0, end[0], end[1], 0);

  let diff = endDate.getTime() - startDate.getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);

  diff -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diff / 1000 / 60);

  const workingHours = (hours < 9 ? '0' : '') + hours + ':' + (minutes < 9 ? '0' : '') + minutes

  return {
    checkOut: checkOut,
    workingHours: workingHours
  }
}

export default calculateTime;