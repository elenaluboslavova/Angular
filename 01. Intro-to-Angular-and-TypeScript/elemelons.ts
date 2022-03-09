abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Water\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Fire\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Earth\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Air\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}

class Melolemonmelon extends Watermelon {
    public element: string = 'Water';

    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    elements: Array<string> = ['Fire', 'Earth', 'Air', 'Water'];

    morph(){
        let current = this.elements.shift();
        this.elements.push(current);
        this.element = current;
    }

    toString(): string{
        return super.toString();
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());