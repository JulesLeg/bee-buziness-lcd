import {LcdChar} from './char.abstract';

export class Three extends LcdChar {
    
    value: string = '3';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return ' _ ';
            case 1: return ' _|';
            case 2: return ' _|';
            default: return '   ';
        }
    }
}