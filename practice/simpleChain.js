/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/

const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
   constructor(data) {
      this.height = '';
      this.timeStamp = '';
      this.data = data;
      this.previousHash = '0x';
      this.hash = '';
   }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class Blockchain {
   constructor() {
      // new chain array
      this.chain = [];
      // add first genesis block
      this.addBlock(this.createGenesisBlock());
   }

   createGenesisBlock() {
      return new Block('First block in the chain - Genesis block');
   }

   // addBlock method
   addBlock(newBlock) {
      newBlock.height = this.chain.length;
      newBlock.timeStamp = new Date().getTime().toString().slice(0, -3);
      if (this.chain.length > 0) {
         // previous block hash
         newBlock.previousHash = this.chain[this.chain.length - 1].hash;
      }
      // SHA256 requires a string of data
      newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
      // add block to chain
      this.chain.push(newBlock);
   }
}

let blockchain = new Blockchain();

blockchain.addBlock(new Block('test 1'));
blockchain.addBlock(new Block('test 2'));
blockchain.addBlock(new Block('test 3'));
blockchain.addBlock(new Block('test 4'));
console.log(blockchain.chain);
