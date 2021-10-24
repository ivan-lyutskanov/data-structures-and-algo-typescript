class ListNode {
    public data: string;
    public nextNode: ListNode | null;
    
    constructor(data: string){
      this.data = data;
      this.nextNode = null;
    }
}
  
// Singly linked list (Minimal implementation)
class LinkedList {
    private head: ListNode | null;

    constructor() {
        this.head = null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    // Returns the size of the list
    // Takes O(n) time (linear)
    size(): number {
        let current = this.head;
        let count = 0;
        
        while(current) {
        count++
        current = current.nextNode;
        }
        
        return count;
    }

    // Add new node containing data and the head of the list
    // Take constant time O(1) not linear O(n) as is on Array
    add(data: string): void {
        //Create new node
        const newNode = new ListNode(data);
        //Link the new node to previous (current head)
        newNode.nextNode = this.head;
        //Prepend the new node to the list (becomes new head)
        this.head = newNode;
    }

    // Search by key and returns an array of matching nodes 
    // Takes O(n) time (linear)
    findAll(searchTerm: string): ListNode[] {
        const result = [];
        let current = this.head;

        while (current) {
            if (current.data.includes(searchTerm)) result.push(current);
            current = current.nextNode;
        }

        return result;
    }

    // Search by key and returns the first match (last added in the list)
    // Takes O(n) time (linear)
    findLast(searchTerm: string): ListNode | boolean {
        let current = this.head;

        while (current) {
            if (current.data.includes(searchTerm)) return current;
            current = current.nextNode;
        }

        return false;
    }

    // Insert new node containing data at index position
    // Insertion take O(1) but finding the node at insertion point takes O(n) so overall takes linear time
    insert(data: string, index: number): void {
        if (index > this.size()) throw new Error('Insert index is out of list range');

        if (index === 0) this.add(data);

        if (index > 0) {
            const newNode = new ListNode(data);
            let position = index;

            let current = this.head;

            while (position > 1) {
                current = current ? current.nextNode : null;
                position--
            }

            if (current) {
                const prevNode = current;
                const nextNode = current.nextNode;
    
                prevNode.nextNode = newNode;
                newNode.nextNode = nextNode;
            }
        }
    }

    //Remove node containing data that matches the key and returns the removed item (or null if not found)
    //Takes O(n) time
    remove(key: string) {
        let current = this.head;
        let previous = null;
        let found = false;

        while(current && !found) {
            if (current.data === key && current == this.head) {
                found = true;
                this.head = current.nextNode;
            } else if (current.data === key && previous) {
                found = true;
                previous.nextNode = current.nextNode;
            } else {
                previous = current;
                current = current.nextNode;
            }
        }

        //Return deleted node
        return current;
    }
}

const l = new LinkedList();

l.add('some data');

l.add('some more data')

l.add('and even more data')

const search1 = l.findAll('some');

const search2 = l.findLast('data');

console.log(search1);
console.log(search2);

console.log(l.size());

const removed = l.remove('some more data');

console.log(removed);

console.log(l.size());

l.insert('a lot of data', 2);

console.log(l.size());

const search3 = l.findAll('data');

console.log(search3);