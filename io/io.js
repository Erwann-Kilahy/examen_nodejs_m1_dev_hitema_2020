const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        // To be implemented!
        let encoded = fs.readFileSync(filePath, 'utf8');
        let res = Buffer.from(encoded, 'hex').toString('utf8');

        resolve(res);


    });
}
