import {LcdChar} from './char.abstract';

export class Seven extends LcdChar {
    
    value: string = '7';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return ' _ ';
            case 1: return '  |';
            case 2: return '  |';
            default: return '   ';
        }
    }
}
