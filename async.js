const books = [
    {name:'Kitap 1', author:'Yazar 1'},
    {name:'Kitap 2', author:'Yazar 2'},
    {name:'Kitap 3', author:'Yazar 3'}
];

const listBooks =()=>{
    books.map(book=>{
        console.log(book.name);
    })
};

const addBook = (newBook)=>{
    const promise1 = new Promise((resolve, reject)=>{
        books.push(newBook);
        //resolve(books);
        reject('BİR HATA OLUŞTU');
    })
    
    return promise1;
};

/* 
addBook({name:'Kitap 10', author: 'Yazar 10'})
    .then(()=>{
        console.log('YENİ LİSTE');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    }) */


    async function showBooks (){
        try{
            await addBook({name:'Kitap 12', author: 'Yazar 12'});
            listBooks();

        }catch(error){
            console.log(error);
        }

    }

    showBooks();