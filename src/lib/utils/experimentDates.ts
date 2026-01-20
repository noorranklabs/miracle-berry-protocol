import { format, addDays } from 'date-fns';

// experiment runs for 21 days starting from this date
export const EXPERIMENT_START_DATE = new Date('2026-01-20');

// get a date X days into the experiment
export function getExperimentDay(dayOffset: number): string {
  return format(addDays(EXPERIMENT_START_DATE, dayOffset), 'yyyy-MM-dd');
}

// check if we're still in the 21-day window
export function isExperimentActive(): boolean {
  const now = new Date();
  const daysSinceStart = Math.floor(
    (now.getTime() - EXPERIMENT_START_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );
  return daysSinceStart >= 0 && daysSinceStart <= 21;
}

// get the current day number of the experiment (0-21)
export function getCurrentExperimentDay(): number {
  const now = new Date();
  const daysSinceStart = Math.floor(
    (now.getTime() - EXPERIMENT_START_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );
  return Math.max(0, Math.min(21, daysSinceStart));
}

// timeline with key milestones
export const EXPERIMENT_TIMELINE = [
  { day: 0, milestone: 'Domain registered', target: 'Launch day', status: 'complete' },
  { day: 1, milestone: 'Google Search Console setup', target: 'Day 1-2', status: 'pending' },
  { day: 2, milestone: "Medium article published", target: 'Day 2', status: 'pending' },
  { day: 3, milestone: 'First page indexed', target: 'Day 3-5', status: 'pending' },
  { day: 4, milestone: 'Dev.to article published', target: "Day 3-4", status: 'pending' },
  { day: 7, milestone: 'Entity recognition test', target: 'Day 7-10', status: 'pending' },
  { day: 10, milestone: 'Perplexity citation attempt', target: 'Day 10-14', status: 'pending' },
  { day: 14, milestone: 'Full citation achieved', target: 'Day 14-21', status: 'pending' },
  { day: 21, milestone: 'Experiment complete', target: 'Day 21', status: 'pending' },
];
