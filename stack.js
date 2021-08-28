/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if(this.isEmpty()){
      this.first = new Node(val);
      this.last = this.first;
      this.size++;
    } else {
      this.first.next = new Node(val);
      this.first.next.previous = this.first;
      this.first = this.first.next
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()){
      throw new Error('Stack is empty')
    } else if(this.size == 1){
      let temp = this.last.val;
      this.last = null;
      this.first = null;
      this.size--;
      return temp;
    } else {
      let temp = this.first.val;
      this.first = this.first.previous
      this.first.next = null;
      this.size--;
      return temp;
    }
    
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size <= 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
