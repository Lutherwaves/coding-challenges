/**
 * * Graph - a set of values related in a pair-wise fashion
 * * Each value is a node
 * * Nodes are connected via edges
 */

/**
 * * Graph characteristics
 * * Directed & Undirected - one-way street vs a highway between two cities
 * * Weighted & Unweighted - information can be stored in the edges
 * * Cyclic and Acyclic -
 */

// Edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjancecy List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjancent Matrix
const AdjacentMatrixhWithArrays = [
  [0, 0, 1, 0], // Node 1 is connected to 2
  [0, 0, 1, 1], // Node 2 is connected to 2 and 3
  [1, 1, 0, 1], // Node 3 is connected to 0, 1 and 3
  [0, 1, 1, 0], // Node 4 is connected to 1 and 2
];

// Adjacent Matrix using objects
const AdjacentMatrixhWithObjects = {
  0: [0, 0, 1, 0], // Node 1 is connected to 2
  1: [0, 0, 1, 1], // Node 2 is connected to 2 and 3
  2: [1, 1, 0, 1], // Node 3 is connected to 0, 1 and 3
  3: [0, 1, 1, 0], // Node 4 is connected to 1 and 2
};
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    // Increment number of nodes by one
    this.numberOfNodes += 1;
    // Instantiate empty list for node to be created
    this.adjacentList[node] = [];
  }
  addEdge(node1, node2) {
    //undirected graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    for (let i = 0; i < this.numberOfNodes; i++) {
      console.log(`${i} --> ${this.adjacentList[i].join(' ')}`);
    }
  }
}

var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

/**
 * -------- SUMMARY --------
 * Relationships are very nicely depicted
 * Scaling is really hard
 */
