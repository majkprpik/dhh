import {Day} from '../models/days.model';
export class Schedule {
    constructor(public _id: string, public month: number, public days: Day[]) {}
}
