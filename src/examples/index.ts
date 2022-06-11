import { Time } from '../index';

const oldDate = new Date(2022, 4, 21);
const fewMinsOld = new Date(2022, 5, 11, 12);
const futureDate = new Date(2022, 8, 1);

console.log(Time.getDurationFromCurrent(oldDate));
console.log(Time.getDurationFromCurrent(fewMinsOld));
console.log(Time.getDurationFromCurrent(futureDate));
console.log(Time.formatDuration(Time.getDurationFromCurrent(fewMinsOld)));
