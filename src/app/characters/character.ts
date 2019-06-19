export class Character {
    id: number;
    name: string;
    profession: Profession;
    strengths: string[];
    weaknesses: string[];
    status: Status;
    img: string;
}

export enum Profession {
    hero = 'Hero',
    villain = 'Villain'
}

export enum Status {
    active = 'Active',
    inactive = 'Inactive'
}
