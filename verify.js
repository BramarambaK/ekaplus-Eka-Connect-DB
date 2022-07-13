const fs = require('fs');
const rootFolder = ['ekaconnect', 'Database', 'Scripts', 'Mongo'];
const appName = process.argv[2];
const listFiles = (path) =>
  fs.readdirSync(path).reduce((acc, curr) => {
    if (fs.lstatSync(path + '/' + curr).isFile()) {
      acc.push(path + '/' + curr);
    } else {
      acc.push(...listFiles(path + '/' + curr));
    }
    return acc;
  }, []);
const parseFiles = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));
const files = listFiles('./' + rootFolder.join('/') + '/' + appName);
files.forEach((i) => {
  try {
    parseFiles(i);
  } catch (err) {
    console.error('Error with ' + i, err);
  }
});
