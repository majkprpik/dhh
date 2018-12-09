import { Shift } from '../models/shift.model'
export class Day {            
    constructor(public _id: string, public day: number,public type: string, public dayOfWeek:string, public shifts:Shift[]){}
}