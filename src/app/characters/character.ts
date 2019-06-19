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
    hero = <any>'Hero',
    villain = <any>'Villain'
}

export enum Status {
    active = <any>'Active',
    inactive = <any>'Inactive'
}
