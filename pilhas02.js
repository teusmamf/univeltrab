function Stack(){
    let items = [];

    this.push = function(e){
        items.push(e)
    }

    this.pop = function(){
        return items.length > 0 ? items.pop() : "A pilha está vazia";
    }

    this.peek = function(){
        return items.length > 0 ? items[items.length - 1] : "A pilha está vazia";
    }

    this.isEmpty = function(){
        return items.length === 0
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
      console.log(items.join(" -> "));
        
    }

    
}


const stack = new Stack();

    stack.push("A");
    stack.push("B");
    stack.push("C");

    

    console.log("Elemento no topo:", stack.peek());
    console.log("Elemento no removido:", stack.pop());
    stack.pri
    
 
    
    