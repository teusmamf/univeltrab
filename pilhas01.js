class Stack{
    constructor(){
        this.items = [];
    }



    push(e){
        this.items.push(e);
    }


    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia"
        }

        return this.items.pop();

    }


    peek(){
        if(this.isEmpty()){
            return "A pilha está vazia";
        }

        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.join("->");
    }

    printStack(){
        return this.items.join("->");
    }


}


const stack =  new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
console.log("Pilha: ",stack.printStack());

console.log("Elemento removido: ",stack.pop());

console.log("Pilha após o pop: ",stack.printStack());


console.log("Topo da pilha: ",stack.peek());

console.log("Pilha vazia ?: ",stack.isEmpty());