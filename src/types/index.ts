export interface Project {
    id: string;
    image: string;
    alt: string;
}

export interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

export interface Card {
    id: string;
    number: string;
    icon: string;
    title: string;
    description: string;
    isSpecial?: boolean;
}

export interface Showcase {
    id: string;
    image: string;
    title: string;
    alignment: 'left' | 'right';
}

export interface Brand {
    id: string;
    image: string;
    name: string;
}