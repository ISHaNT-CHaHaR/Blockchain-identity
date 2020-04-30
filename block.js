/**
 * Import crypto-js/SHA256 library
 */
const crypto = require('crypto');

/**
 * Class with a constructor for block
 */
class Block {
   constructor(data) {
      this.id = 0;
      this.nonce = 144444;
      this.body = data;
      this.hash = '';
   }

   /**
    * Step 1. Implement `generateHash()`
    * method that return the `self` block with the hash.
    *
    * Create a Promise that resolve with `self` after you create
    * the hash of the object and assigned to the hash property `self.hash = ...`
    */
   //
   generateHash() {
      // Use this to create a temporary reference of the class object
      let self = this;
      //Implement your code here

      return new Promise(function (resolve, reject) {
         let obj = JSON.stringify(new Block()).toString();
         self.hash = crypto.createHash('sha256').update(obj).digest('hex');
         console.log(self.hash);
         if (self.hash) {
            resolve('stuff worked!');
         } else {
            reject(Error('It broke'));
         }
      });
   }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;
