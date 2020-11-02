import {LcdChar} from './char.abstract';

export class Five extends LcdChar {
    
    value: string = '5';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return ' _ ';
            case 1: return '|_ ';
            case 2: return ' _|';
            default: return '   ';
        }
    }
}
