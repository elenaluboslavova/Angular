class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Water\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Fire\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Earth\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Air\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Water';
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
    }
    morph() {
        let current = this.elements.shift();
        this.elements.push(current);
        this.element = current;
    }
    toString() {
        return super.toString();
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
