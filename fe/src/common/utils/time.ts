export enum TimeMetric {
  SECONDS = "seconds",
  MINUTES = "minutes",
  HOURS = "hours",
  DAYS = "days",
}

export const timeMultiplier: { [key in TimeMetric]: number } = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
};

export const timeMetrics = [
  {
    metric: TimeMetric.DAYS,
    value: timeMultiplier[TimeMetric.DAYS],
  },
  {
    metric: TimeMetric.HOURS,
    value: timeMultiplier[TimeMetric.HOURS],
  },
  {
    metric: TimeMetric.MINUTES,
    value: timeMultiplier[TimeMetric.MINUTES],
  },
  {
    metric: TimeMetric.SECONDS,
    value: timeMultiplier[TimeMetric.SECONDS],
  },
];

export const timeToSeconds = (value: string, metric: TimeMetric) => {
  return parseInt(value, 10) * timeMultiplier[metric];
};

export const secondsToTimeInMetric = (value: number, metric: TimeMetric) => {
  return value / timeMultiplier[metric];
};

export const toTimeMetric = (value: number) => {
  return (
    timeMetrics.find((timeMetric) => value % timeMetric.value === 0)?.metric ||
    TimeMetric.SECONDS
  );
};

export const nanoToMs = (nanoseconds: number) => {
  return nanoseconds / 1000 / 1000;
};

export const roundMs = (nanoseconds: number) => {
  const milliseconds = nanoToMs(nanoseconds) + 500;

  return milliseconds - (milliseconds % 1000) + 1000;
};

export const getReadableTime = (nanoseconds: number) => {
  const milliseconds = nanoseconds / 1000 / 1000;
  const seconds = milliseconds / 1000;

  if (seconds < 30) {
    return `${parseFloat(milliseconds.toFixed(2))}ms`;
  }

  return `${parseFloat(seconds.toFixed(2))}s`;
};
