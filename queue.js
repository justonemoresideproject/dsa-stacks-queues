/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if(this.isEmpty()){
      this.first = new Node(val);
      this.last = this.first;
      this.size++;
    } else {
      console.log(`First: ${this.first}, Last: ${this.last}`)
      this.last.next = new Node(val);
      this.last = this.last.next;
      this.size++;
      console.log(`First: ${this.first}, Last: ${this.last}`)
    }
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.isEmpty()){
      throw new Error('Queue is empty')
    } else {
      let temp = this.first.val;
      this.first.next = this.first;
      this.first.next = null;
      this.size--;
      return temp
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.isEmpty()){
      return null;
    } else {
      return this.first
    }

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size == 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
