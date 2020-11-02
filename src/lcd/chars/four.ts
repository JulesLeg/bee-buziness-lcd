import {LcdChar} from './char.abstract';

export class Four extends LcdChar {
    
    value: string = '4';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return '   ';
            case 1: return '|_|';
            case 2: return '  |';
            default: return '   ';
        }
    }
}
