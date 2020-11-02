import {LcdChar} from './char.abstract';

export class Nine extends LcdChar {
    
    value: string = '9';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return ' _ ';
            case 1: return '|_|';
            case 2: return ' _|';
            default: return '   ';
        }
    }
}
