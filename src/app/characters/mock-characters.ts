import { Character, Profession, Status } from './character';

export const CHARACTERS: Character[] = [
    {
        id: 1,
        name: 'Bruce Wayne',
        profession: Profession.hero,
        strengths: ['Weapons', 'Interrogation'],
        weaknesses: ['Psychological'],
        status: Status.active,
        img: 'assets/images/characters/bruce-wayne.jpg'
    },
    {
        id: 2,
        name: 'Clark Kent',
        profession: Profession.hero,
        strengths: ['Superhuman Strength', 'Flight', 'X-Ray Vision'],
        weaknesses: ['Kryptonite', 'Red Sun Radiation'],
        status: Status.active,
        img: 'assets/images/characters/clark-kent.jpg'
    },
    {
        id: 9,
        name: 'Peter Parker',
        profession: Profession.hero,
        strengths: ['Spider Web'],
        weaknesses: ['Mortal Human'],
        status: Status.active,
        img: 'assets/images/characters/peter-parker.jpg'
    },
    {
        id: 10,
        name: 'Steve Rogers',
        profession: Profession.hero,
        strengths: ['Vibranium-Steel Alloy Shield', 'Martial Arts'],
        weaknesses: ['Mortal Human'],
        status: Status.inactive,
        img: 'assets/images/characters/steve-rogers.jpg'
    }, {
        id: 11,
        name: 'Kyle Rayner',
        profession: Profession.hero,
        strengths: ['Power Ring'],
        weaknesses: ['Yellow Impurities'],
        status: Status.inactive,
        img: 'assets/images/characters/kyle-rayner.jpg'
    },
    {
        id: 3,
        name: 'John Jackson Parr',
        profession: Profession.hero,
        strengths: ['Shapeshifting', 'Levitation', 'Teleportation'],
        weaknesses: ['Unknown'],
        status: Status.active,
        img: 'assets/images/characters/john-jackson-parr.jpg'
    },
    {
        id: 4,
        name: 'Cruella De Vil',
        profession: Profession.villain,
        strengths: ['Persuasive', 'Rich'],
        weaknesses: ['Greed', 'Quick Temper'],
        status: Status.active,
        img: 'assets/images/characters/cruella-de-vil.jpg'
    },
    {
        id: 5,
        name: 'Harleen Quinzel',
        profession: Profession.villain,
        strengths: ['Toxic Immunity', 'Gymnastics'],
        weaknesses: ['Mental Illness'],
        status: Status.active,
        img: 'assets/images/characters/harleen-quinzel.jpg'
    },
    {
        id: 6,
        name: 'Jonathan Crane',
        profession: Profession.villain,
        strengths: ['Fear Gas'],
        weaknesses: ['Phobia of Birds'],
        status: Status.active,
        img: 'assets/images/characters/jonathan-crane.jpg'
    },
    {
        id: 7,
        name: 'Maleficent',
        profession: Profession.villain,
        strengths: ['Weather Manipulation', 'Transformation', 'Curses'],
        weaknesses: ['Mortality'],
        status: Status.inactive,
        img: 'assets/images/characters/maleficent.jpg'
    },
    {
        id: 8,
        name: 'Ursula',
        profession: Profession.villain,
        strengths: ['Magic Potions', 'Metamorphosis'],
        weaknesses: ['Mortal'],
        status: Status.inactive,
        img: 'assets/images/characters/ursula.jpg'
    }
];
