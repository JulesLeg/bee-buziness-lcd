import {LcdChar} from './char.abstract';

export class Zero extends LcdChar {
    
    value: string = '0';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return ' _ ';
            case 1: return '| |';
            case 2: return '|_|';
            default: return '   ';
        }
    }
}