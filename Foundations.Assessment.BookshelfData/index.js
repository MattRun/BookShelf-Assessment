const libraryInstance = new Library();

libraryInstance.seed(bookData);

libraryInstance.render();


// document.addEventListener('DOMContentLoaded',() => {
//     document.querySelectorAll('search-input').forEach((input) => {
//        const tableRows = inputField.closest('table').querySelectorAll('bookData');
//         });
// });
// });
const addBook = () => {
    console.log('addBook');
};

const bookorderInstance = new Library();
bookData.sort((a,b)=> a.title.localeCompare(b.title))
bookorderInstance.seed(bookData);
bookorderInstance.render()


document.getElementById("sortAsc").addEventListener("click", ()=>{
    bookorderInstance.books.sort((a,b)=> a.title.localeCompare(b.title))
    bookorderInstance.render()
    console.log(bookorderInstance)
})
// document.querySelectorAll = () => {
    //     addBook(title);
    //     addBook(subject);
//     addBook(language);
//     addBook(author);
// }

// document.getElementByClassName("container").style.backgroundImage = "/images/library.jpg";


// const sortBy = document.querySelector(".sortBy");

// //only applies to title
// sortBy.addEventListener("change", ()=>{
//     const (query =sortBy.ariaValueMax);

//     let sortFn

//     if (query ==="titleaz") {
//         sortFn = (a,z)=>a.title.localeCompare(a.title);
//     }else if (query ==="titleaz") {
//          sortFn = (a,z)=>z.title.localeCompare(a.title);
//     }
// })





