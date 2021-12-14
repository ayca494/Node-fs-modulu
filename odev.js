const fs = require('fs');

//dosya oluşturma

fs.writeFile('employees.json','{"name":"Employee 1 Name","salary":2000}','utf8',(err)=>{
    if(err) console.log(err);
    console.log('dosya oluşturuldu');
})

//dosya okuma

fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log('dosya okundu');
})


//dosya güncelleme

fs.writeFile('employees.json','{"name":"Employee 2 Name","salary":3000}','utf8',(err)=>{
    if(err) console.log(err);
    console.log('dosya guncellendi');
})

//silmek

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log('DOSYA SİLİNDİ');
})
