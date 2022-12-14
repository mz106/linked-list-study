class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    push(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    
    pop() {
      if (this.length === 0) return undefined;
      const temp = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
      }
      this.length--;
      return temp;
    }
    
    shift() {
      if (this.length === 0) return undefined;
      const temp = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = temp.next;
        this.head.prev = null;
        temp.next = null;
      }
      this.length--;
      return temp;
    }
    
    unshift(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    printList() {
        
        if(this.head){
          let current = this.head;
          while (current.next) {
            console.log(current);
            current = current.next;
          }
          console.log(current.val);
        } else {
          console.log("empty list")
        }
      }
  }

  export const addVidToDll = (userArr) => {
    let DLL = new DoublyLinkedList();
    userArr.forEach((video, index) => {
        // console.log(user)
        // const stringyUser = JSON.stringify(user, null, 2);
        DLL.push({
            id: video._id,
            title: video.title,
            description: video.description,
            url: video.url,
            options: video.options,
            question: video.question,
            answer: video.answer,
        });
        
        
    });
    return DLL
};