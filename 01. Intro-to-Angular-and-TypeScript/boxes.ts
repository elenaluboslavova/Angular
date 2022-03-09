class Box<T>{
    private elements: Array<T>;

    constructor(){
        this.elements = [];
    }

    public add(element: T): void{
        this.elements.push(element);
    }

    public remove(){
        this.elements.shift();
    }

    get count(): number{
        return this.elements.length;
    }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);