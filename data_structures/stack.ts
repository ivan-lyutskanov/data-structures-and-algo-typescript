// Stack

interface IStorage {
    [index: number]: any;
}

class Stack {
    private count: number;
    private storage: IStorage;

    constructor() {
        this.count = 0;
        this.storage = {} as IStorage;
    }

    push(value: any): void {
        this.storage[this.count] = value;
        this.count++
    }

    pop(): any {
        if (this.count === 0) return null;

        this.count--;
        const lastItem: any = this.storage[this.count];
        delete this.storage[this.count]
        return lastItem;
    }

    peek(): any {
        return this.storage[this.count - 1] || null;
    }
  
    size(): number {
      return Object.keys(this.storage).length;
    }
}
  
const stack = new Stack();

stack.push('item 1');
console.log(stack.peek());
stack.push('item 2');
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());