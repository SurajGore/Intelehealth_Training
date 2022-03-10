const fs = require ('fs');
const file = fs.createWriteStream('./big.txt');

for(let i=0; i<= 2e6; i++) {
    file.write("This is test Data................................\n");
}
file.end();
