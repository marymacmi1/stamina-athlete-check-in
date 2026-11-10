import type { AthleteData, CheckIn } from './types';
import { makeScenario } from './data';
const KEY='stamina-check-in-v2';
export function load():AthleteData {try {const value=localStorage.getItem(KEY);if(value){const parsed:unknown=JSON.parse(value);if(parsed&&typeof parsed==='object'&&'checkIns' in parsed&&Array.isArray(parsed.checkIns)&&'metrics' in parsed&&Array.isArray(parsed.metrics)&&'workouts' in parsed&&Array.isArray(parsed.workouts))return parsed as AthleteData;}}catch{ /* malformed data: use demo */ }return makeScenario('recovery');}
export function save(data:AthleteData):boolean {try{localStorage.setItem(KEY,JSON.stringify(data));return true;}catch{return false;}}
export function upsert(data:AthleteData,entry:CheckIn):AthleteData{return {...data,checkIns:[...data.checkIns.filter(c=>c.date!==entry.date),entry].sort((a,b)=>a.date.localeCompare(b.date))};}
export function clear(){localStorage.removeItem(KEY);}
