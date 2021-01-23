class LinkedList {
    constructor() {
      //head is the first node in a list
      this.head = null;
    }
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
    sendBackM(mv){
        let count = 0;
        let curr = this.head;
  
        while (count < mv && curr.next !== null) {
          curr = curr.next;
          count += 1;
        }
        
        const answer = new _Node(this.head.value);
        if (curr.next === null) {
          answer.next = curr.next;
          curr.next = answer;
          this.head = this.head.next;
          curr.value.next = answer.value.id;
          answer.value.next = null;
        } else {
          answer.next = curr.next;
          curr.next = answer;
          this.head = this.head.next;
          curr.value.next = answer.value.id;
          answer.value.next = answer.next.value.id;
        }
        return answer;
    }
    insertBefore(value, search) {
      let temp = this.head;
      while (temp.next.value !== search) {
        temp = temp.next;
      }
      temp.next = new _Node(value, temp.next);
    }
  
    insertAfter(value, search) {
      let temp = this.head;
      while (temp.value !== search) {
        temp = temp.next;
      }
      temp.next = new _Node(value, temp.next);
    }
  
    insertAt(value, position) {
      let temp = this.head;
      let count = 0;
  
      while (temp.value !== null && count < position - 1) {
        temp = temp.next;
        count++;
      }
      temp.next = new _Node(value, temp.next);
    }
  
    find(item) {
      let currNode = this.head;
      if (!this.head) {
        return null;
      }
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
        return currNode;
      }
    }
    remove(item) {
      if (!this.head) {
        return null;
      }
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      let currNode = this.head;
      let previousNode = this.head;
  
      while (currNode !== null && currNode.value !== item) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      previousNode.next = currNode.next;
    }
  }
  
  class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  function makeArray(ll) {
    let curr = ll.head;
    let result = [];
  
    while (curr.next !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    result.push(curr.value);
    return result;
  }
  
  module.exports = { LinkedList, makeArray };