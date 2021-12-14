global.console.log('LOG YAZILDI');

global.console.log(__dirname);
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

global.setTimeout(()=>{
    console.log('3 saniye bekle');
},3000);

console.log(window);
