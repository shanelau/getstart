const sjcl = require('sjcl');
// let data = 123;
// let r = sjcl.hash.sha256.hash(data);
// console.log(sjcl.codec.hex.fromBits(r));


// sjcl.hash.sha256.reset();

let read = require('fs').createReadStream('./package.json');
let hash256 = new sjcl.hash.sha256();

read.on('readable', function () {
  const chunk = read.read();
  if(chunk){
    hash256.update(chunk);
  }else {
    let value = hash256.finalize();
    console.log(sjcl.codec.hex.fromBits(value));
  }
});

