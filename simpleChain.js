class Block {
   constructor(data) {
      /// Blockdatamodel

      this.height = 0;
      this.data = data;
      this.time = 0;
      this.previousblockhash = '';
      this.hash = '';
   }
}

///
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
      this.chain = [];
   }

   addBlock(newBlock) {
      this.chain.push(newBlock);
   }
}