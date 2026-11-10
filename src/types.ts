export type Rating = 1 | 2 | 3 | 4 | 5;
export type CheckIn = { id: string; date: string; energy: Rating; soreness: Rating; sleepQuality: Rating; stress: Rating; motivation: Rating; tags: string[]; note: string };
export type Metric = { date: string; sleepHours: number; trainingLoad: number };
export type Workout = { date: string; sport: 'Run' | 'Bike' | 'Swim'; title: string; duration: number; intensity: 'Easy' | 'Moderate' | 'Hard' };
export type AthleteData = { checkIns: CheckIn[]; metrics: Metric[]; workouts: Workout[] };
export type Scenario = 'recovery' | 'strong' | 'cycle';
export type Insight = { id: string; tone: 'caution' | 'positive' | 'neutral'; title: string; detail: string; evidence: string[]; suggestion: string };
