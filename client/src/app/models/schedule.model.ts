export class Schedule {
    _id: String;
    month: Date;
    days: [
        {
            _id: string;
            day: number;
            type: string;
            dayOfWeek: string;
            shifts: [
                {
                    _id: string;
                    _shift: string;
                    _user: string;
                }
            ],
        }
    ];
    constructor(public name: string, public amount: number) {}
}
