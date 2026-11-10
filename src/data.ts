import type { AthleteData, CheckIn, Rating, Scenario } from './types';
export const dateAgo = (n: number) => { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - n); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
export const today = () => dateAgo(0);
const entry = (daysAgo: number, energy: Rating, soreness: Rating, sleepQuality: Rating, stress: Rating, motivation: Rating, tags: string[] = []): CheckIn => ({id:`demo-${daysAgo}`,date:dateAgo(daysAgo),energy,soreness,sleepQuality,stress,motivation,tags,note:''});
const base = (): AthleteData => ({
 checkIns:Array.from({length:20},(_,i)=>entry(20-i,4,2,4,2,4)),
 metrics:Array.from({length:21},(_,i)=>({date:dateAgo(20-i),sleepHours:Number((7.3+Math.sin(i)*.4).toFixed(1)),trainingLoad:35+(i%5)*12})),
 workouts:[{date:dateAgo(3),sport:'Run',title:'Tempo intervals',duration:55,intensity:'Hard'},{date:dateAgo(2),sport:'Bike',title:'Endurance ride',duration:75,intensity:'Moderate'},{date:dateAgo(1),sport:'Swim',title:'Technique swim',duration:40,intensity:'Easy'},{date:today(),sport:'Run',title:'Aerobic run',duration:50,intensity:'Moderate'}]
});
export const scenarioLabels: Record<Scenario,string> = {recovery:'Poor recovery',strong:'Feeling strong',cycle:'Cycle context'};
export function makeScenario(scenario:Scenario):AthleteData {
 const data=base();
 if(scenario==='recovery'){data.checkIns.push(entry(0,2,4,2,4,2));data.metrics[20].sleepHours=5.5;}
 if(scenario==='strong'){data.checkIns.push(entry(0,5,1,5,2,5));data.metrics[20].sleepHours=8;data.workouts=data.workouts.map(w=>({...w,duration:w.duration+10}));}
 if(scenario==='cycle'){data.checkIns.push(entry(0,2,3,2,3,2,['Menstrual symptoms','Poor sleep']));data.metrics[20].sleepHours=5.9;}
 return data;
}
