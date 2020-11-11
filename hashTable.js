// A sample implementation of hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
  }

  get(key) {
    return this.data[this._hash(key)][1];
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapess', 10000);
myHashTable.set('apples', 10);
myHashTable.set('appless', 10);
myHashTable.set('apples', 10);
// myHashTable.set('grapes', 111);
myHashTable.get('grapess');
