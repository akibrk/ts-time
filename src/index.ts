export type Duration = {
  millisecond: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
};

export class Time {
  public static getDurationFromCurrent(dateTime: Date): Duration {
    const current = Date.now();
    const time = new Date(dateTime).valueOf();
    const differenceInMilliseconds = Math.abs(current - time);

    return {
      millisecond: differenceInMilliseconds,
      second: Math.floor(differenceInMilliseconds / 1000),
      minute: Math.floor(differenceInMilliseconds / (1000 * 60)),
      hour: Math.floor(differenceInMilliseconds / (1000 * 60 * 60)),
      day: Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)),
    };
  }

  public static getDurationFromDate(dateTime: Date, fromDate: Date): Duration {
    const current = fromDate.valueOf();
    const time = new Date(dateTime).valueOf();
    const differenceInMilliseconds = Math.abs(current - time);

    return {
      millisecond: differenceInMilliseconds,
      second: Math.floor(differenceInMilliseconds / 1000),
      minute: Math.floor(differenceInMilliseconds / (1000 * 60)),
      hour: Math.floor(differenceInMilliseconds / (1000 * 60 * 60)),
      day: Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)),
    };
  }

  public static formatDuration(durationObject: Duration): string {
    if (durationObject.day) {
      return `${durationObject.day} day`;
    }

    if (durationObject.hour) {
      return `${durationObject.hour} hour`;
    }

    if (durationObject.minute) {
      return `${durationObject.minute} minute`;
    }

    if (durationObject.second) {
      return `${durationObject.second} second`;
    }
    return `${durationObject.millisecond} millisecond`;
  }
}
