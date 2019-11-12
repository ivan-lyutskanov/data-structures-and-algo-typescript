//Queue

class Queue {
    private collection: any[];

    constructor(){
        this.collection = [];
    }

    print(): void {
        console.log(this.collection);
    }

    enqueue(item: any): void {
        this.collection.push(item);
    }

    dequeue(): any {
        return this.collection.shift();
    }

    front(): any {
        return this.collection[0];
    }

    size(): number {
        return this.collection.length;
    }

    isEmpty(): boolean {
        return this.collection.length === 0;
    }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('item 1');
queue.enqueue('item 2');
queue.enqueue('item 3');
console.log(queue.size());
console.log(queue.front());
queue.dequeue();
queue.print();