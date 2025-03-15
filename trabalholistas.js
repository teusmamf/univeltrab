// Classe para um nó da lista
class Node {
    constructor(value) { // Construtor que recebe um valor para o nó
        this.value = value; // Armazena o valor do nó
        this.next = null; // Ponteiro para o próximo nó, inicialmente nulo
        this.prev = null; // Ponteiro para o nó anterior, necessário apenas para lista duplamente ligada
    }
}

// Lista simplesmente ligada
class SinglyLinkedList {
    constructor() { // Construtor inicializa a lista vazia
        this.head = null; // Primeiro nó da lista, inicialmente nulo
    }

    // Método para adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value); // Cria um novo nó
        if (!this.head) { // Se a lista estiver vazia
            this.head = newNode; // Define o novo nó como a cabeça da lista
            return;
        }
        let current = this.head; // Começa a partir da cabeça da lista
        while (current.next) { // Percorre até o último nó
            current = current.next;
        }
        current.next = newNode; // Adiciona o novo nó ao final da lista
    }

    // Método para exibir os valores da lista
    print() {
        let current = this.head; // Começa a partir da cabeça da lista
        while (current) { // Percorre todos os nós
            console.log(current.value); // Exibe o valor do nó atual
            current = current.next; // Avança para o próximo nó
        }
    }
}

// Lista duplamente ligada
class DoublyLinkedList {
    constructor() { // Construtor inicializa a lista vazia
        this.head = null; // Primeiro nó da lista, inicialmente nulo
        this.tail = null; // Último nó da lista, inicialmente nulo
    }

    // Método para adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value); // Cria um novo nó
        if (!this.head) { // Se a lista estiver vazia
            this.head = this.tail = newNode; // Define o novo nó como cabeça e cauda da lista
            return;
        }
        this.tail.next = newNode; // Conecta o último nó ao novo nó
        newNode.prev = this.tail; // Conecta o novo nó ao anterior
        this.tail = newNode; // Atualiza a cauda da lista
    }

    // Método para exibir os valores da lista
    print() {
        let current = this.head; // Começa a partir da cabeça da lista
        while (current) { // Percorre todos os nós
            console.log(current.value); // Exibe o valor do nó atual
            current = current.next; // Avança para o próximo nó
        }
    }
}

// Lista circular
class CircularLinkedList {
    constructor() { // Construtor inicializa a lista vazia
        this.head = null; // Primeiro nó da lista, inicialmente nulo
    }

    // Método para adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value); // Cria um novo nó
        if (!this.head) { // Se a lista estiver vazia
            this.head = newNode; // Define o novo nó como a cabeça da lista
            this.head.next = this.head; // Conecta o nó a ele mesmo para formar um ciclo
            return;
        }
        let current = this.head; // Começa a partir da cabeça da lista
        while (current.next !== this.head) { // Percorre até o último nó (aquele que aponta para a cabeça)
            current = current.next;
        }
        current.next = newNode; // Conecta o último nó ao novo nó
        newNode.next = this.head; // Conecta o novo nó à cabeça para manter a circularidade
    }

    // Método para exibir os valores da lista (evitando loop infinito)
    print() {
        if (!this.head) return; // Se a lista estiver vazia, não faz nada
        let current = this.head; // Começa a partir da cabeça da lista
        do {
            console.log(current.value); // Exibe o valor do nó atual
            current = current.next; // Avança para o próximo nó
        } while (current !== this.head); // Para quando voltar à cabeça da lista
    }
}

// Testando as listas
const singlyList = new SinglyLinkedList(); // Cria uma lista simplesmente ligada
singlyList.append(1); // Adiciona o valor 1
singlyList.append(2); // Adiciona o valor 2
singlyList.append(3); // Adiciona o valor 3
console.log("Lista Simplesmente Ligada:");
singlyList.print(); // Exibe a lista simplesmente ligada

const doublyList = new DoublyLinkedList(); // Cria uma lista duplamente ligada
doublyList.append(4); // Adiciona o valor 4
doublyList.append(5); // Adiciona o valor 5
doublyList.append(6); // Adiciona o valor 6
console.log("\nLista Duplamente Ligada:");
doublyList.print(); // Exibe a lista duplamente ligada

const circularList = new CircularLinkedList(); // Cria uma lista circular
circularList.append(7); // Adiciona o valor 7
circularList.append(8); // Adiciona o valor 8
circularList.append(9); // Adiciona o valor 9
console.log("\nLista Circular:");
circularList.print(); // Exibe a lista circular
