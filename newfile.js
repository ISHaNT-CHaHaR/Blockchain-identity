const crypto = require('crypto');

let data = 'Blockchain Rock!';
let obj = {
   id: 1,
   body: 'With Object Works too',
   time: new Date().getTime().toString().slice(0, -3),
};

function hash(obj) {
   obj = JSON.stringify(obj);
   return crypto.createHash('sha256').update(obj).digest('hex');
}
console.log(obj);
console.log(hash(obj));
