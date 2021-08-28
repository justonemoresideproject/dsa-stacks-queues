class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.previous = null;
    }
}
  
class Deque {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
      this.current = null;
    }
    
    next(){
        if(!this.first){
            throw new Error('No Websites')
        } else if(!this.current){
            this.current = this.first
        } else if(!this.current.next){
            throw new Error('No next')
        } else{
            this.current = this.current.next;
        }
    }

    previous(){
        if(!this.first){
            throw new Error('No Websites')
        } else if(!this.current){
            this.current = this.first;
        } else if(!this.current.previous){
            throw new Error('No previous')
        } else{
            this.current = this.current.previous;
        }
    }

    push(val){
        if(this.size == 0){
            this.first = new Node(val);
            this.last = this.first;
            this.size++;
            return undefined;
        } else {
            this.last.next = new Node(val);
            this.last.next.previous = this.last;
            this.last = this.last.next;
            this.size++;
            return undefined;
        }
    }

    pop(){
        if(isEmpty()){
            throw new Error('Deque is empty')
        } else if(this.size == 1) {
            let temp = this.first.val;
            this.first == null;
            this.last == null;
            this.size--;
            return temp;
        } else {
            let temp = this.last.val;
            this.last = this.last.previous;
            this.last.next = null;
            this.size--;
            return temp;
        }
    }

    unshift(val){
        if(this.isEmpty()){
            this.first = new Node(val);
            this.last = this.first;
            this.size++;
        } else {
            this.first.previous = new Node(val);
            this.first = this.first.previous;
            this.size++;
        }
    }

    shift(){
        if(this.isEmpty()){
            return new Error('Deque is empty')
        } else if(this.size == 1){
            let temp = this.first.val;
            this.first = null;
            this.last = null;
            this.size--;
            return temp;
        } else{
            let temp = this.first.val;
            this.first.next.previous = null;
            this.first = this.first.next;
            this.size--;
            return temp;
        }
    }
    
    isEmpty(){
        if(this.size == 0){
            return true;
        } else return false;
    }
}

const back = document.getElementById('backButton')
const next = document.getElementById('nextButton')
const websiteArea = document.getElementById('websiteArea')
const websiteForm = document.getElementById('websiteForm')
const input = document.getElementById('websiteInput')
const deque = new Deque;

websiteForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    if(input.value){
        deque.push(input.value);
        input.value = "";
    } else {
        alert('No input')
    }
})

next.addEventListener('click', function(evt){
    evt.preventDefault();
    try{
        deque.next();
        websiteArea.innerText = deque.current.val;
    } catch (e) {
        alert(`${e}`)
    }
})

back.addEventListener('click', function(evt){
    evt.preventDefault();
    try{
        deque.previous();
        websiteArea.innerText = deque.current.val;
    } catch (e) {
        alert(`${e}`)
    }
})