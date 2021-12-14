const fs = require('fs');

//Dosya okuma readfile

/* fs.readFile('password.txt','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU');
})
 */
//Dosya yazmak writefile

/* fs.writeFile('example.json','{"name":"Arin","age":6}','utf8',(err)=>{
    if(err) console.log(err);
    console.log('JSON DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU')
}); */

//veri eklemek 
/* fs.appendFile('example.txt','\n Kodluyoruzz 22222','utf8',(err)=>{
    if(err) console.log(err);
    console.log('yeni veri eklendi ')
}); */


//veri silmek

/* fs.unlink('example.json',(err)=>{
    if(err) console.log(err);
    console.log('DOSYA SİLİNDİ');
}) */

//KLASORLER OLUŞTURMAK 
/* 
fs.mkdir('upload/img',{ recursive: true },(err)=>{
    if(err) console.log(err);
    console.log('klasorler oluşturuldu');
}) */

//klasorleri silmek
/* 
fs.rmdir('upload',{ recursive: true },(err)=>{
    if(err) console.log(err);
    console.log('klasorler silindi');
}) */

