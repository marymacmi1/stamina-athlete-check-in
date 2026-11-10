import { describe,it,expect } from 'vitest';
import { makeScenario } from './data';
import { baseline,insightsFor } from './insights';
import { upsert } from './storage';
describe('personalised insights',()=>{
 it('flags lower energy and sleep',()=>expect(insightsFor(makeScenario('recovery')).some(i=>i.id==='sleep-energy')).toBe(true));
 it('flags increased soreness',()=>expect(insightsFor(makeScenario('recovery')).some(i=>i.id==='soreness')).toBe(true));
 it('recognises a positive day without recommending extra training',()=>expect(insightsFor(makeScenario('strong')).find(i=>i.id==='positive')?.suggestion).toMatch(/existing training plan/));
 it('acknowledges optional menstrual symptoms without prescribing by phase',()=>expect(insightsFor(makeScenario('cycle')).find(i=>i.id==='cycle')?.suggestion).toMatch(/rather than assuming/));
 it('calculates recent personal baseline',()=>expect(baseline(makeScenario('recovery').checkIns,'energy')).toBe(3.9));
 it('replaces check-ins on the same date',()=>{const data=makeScenario('recovery');const count=data.checkIns.length;expect(upsert(data,{...data.checkIns.at(-1)!,energy:5}).checkIns).toHaveLength(count);});
 it('does not invent a pattern without sufficient history',()=>{const data=makeScenario('recovery');data.checkIns=data.checkIns.slice(-1);expect(insightsFor(data).some(i=>i.id==='sleep-energy')).toBe(false);});
});
