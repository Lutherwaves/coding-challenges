// --------------- BINARY SEARCH TREES ---------------
// * Perfect Binary Tree - a tree with no gaps in the tree;
// ** really efficient
// ** the number of leaf nodes doubles on each level
// ** the number of leaf nodes at the lowest level = sum(all other leaf nodes + 1)
// ** this way, half the data is at the lowest level => O(logN)
//      0
//     /\
//    0  0
//   /\ /\
//  0 0 0 0
// *  Full binary tree -  a tree where all leaf nodes either have 0 or 2 children
// ** Less efficient
//      0
//     /\
//    0  0
//   /\
//  0 0
//   /\
//  0  0

// Calculate nodes on each level 2^level
// * Level 0: 2^0 = 1 node
// * Level 1: 2^1 = 2 nodes
// * Level 2: 2^2 = 4 nodes
// * Level 3: 2^3 = 8 nodes

// ** # of all nodes = 2 ^ h - 1
// ** log nodes = height (steps that we would use in a tree)
// ** based on the height, the maximum number of decisions we are going to take is log(height)

// log 100 = 2 (10^2=100;)

// A sample implementation
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// * Binary Search Tree
// ** Rule 1: All the children to the right of the current node must be greater than the current node
// ** Rule 2: A node can only have up to 2 children
// lookup ; insert ; delete all are O(logN)
// Pros:
// Better than O(n)
// Ordered
// Flexible Size
// Cons:
// No O(1) operations

// * Balanced BST O(logN) vs Unbalanced BST O(n) (Linked  List, because elements are incrementally added)
// Why an unbalanced search tree is bad? - Because it becomes a linked list and lookup, insert and delete becomes O(n)
// => BST needs balancing using e.g. AVL and Red Black trees

// * SBT Implementation:
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// --------------- BALANCING TREES ---------------
// AVL Trees
// How they work:  https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
// Visualization: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
// Adelson-Velsky and Landis first introduced the idea behind them in 1962,
// in a paper the pair co - authored and published called, “An algorithm for the organization of information”.

// Red Black Trees
// How they work: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
// Visualization: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
/**
 * Generally speaking, the four rules of a red-black tree are always presented in the same order, as follows:
 * 1. Every single node in the tree must be either red or black.
 * 2. The root node of the tree must always be black.
 * 3. Two red nodes can never appear consecutively, one after another
 * a red node must always be preceded by a black node(it must have a black parent node),
 * and a red node must always have black children nodes.
 *  4. Every branch path — the path from a root node to an empty (null)
 * leaf node — must pass through the exact same number of black nodes.
 * A branch path from the root to an empty leaf node is also known as
 * an unsuccessful search path, since it represents the path we would
 * take if we were to search for a node that didn’t exist within the tree.

 */

/**
 * --------------- BINARY HEAP ---------------
 * Binary Heap - every node on the top level has a greater value than any node on the lower levels
 *  Good for doing comparative operations (give me all elements < of some value
 * -- Used in data storag
 * -- Max Heap - root node is the bigges
 * -- Min Heap - root node is the smallest
 * Better than O(n)
 * Priority
 * Flexible Size
 * Fast insert
 */

// ------------ TRIE ------------
/**
 * GOOD FOR SEARCHING WORDS INA DICTIONARY
 * PROVIDING AUTO-SUGGESTONS
 * IF WE KNOW THE SIZE OF THE WORD, WE KNOW HOW MANY 
 * WE AVOID STORING REUSED VALUES MULTIPLE TIMES 
 */ 
