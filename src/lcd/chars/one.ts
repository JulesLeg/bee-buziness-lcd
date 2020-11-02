import {LcdChar} from './char.abstract';

export class One extends LcdChar {

    value: string = '1';

    public renderLine(n: number): string {
        switch (n) {
            case 0: return '   ';
            case 1: return '  |';
            case 2: return '  |';
            default: return '   ';
        }
    }
}