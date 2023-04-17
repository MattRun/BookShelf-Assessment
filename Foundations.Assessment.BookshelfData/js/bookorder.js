class Book {
    //"book" can be changed to "order" its just the variable I choose.
    constructor(title, author, language, subject, comments) {
        this.title = title;
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.comments = comments;
        // this.imgSrc= imgSrc;
    //take out img src if you dont want images.
    }
    render(){
        // console.log("title", this.title);
        // console.log("author",this.author);
        // console.log("language",this.language);
        // console.log("subject" ,this.subject);
        // let renderedBook = `${this.author} - ${this.language} - ${this.subject} - ${this.title}`
        // const name = document.getElementById ("name");
        // const comment = document.getElementById ("comment");
        // const addCommentButton = document.getElementById ("addCommentButton");


        const bookWrapper = document.createElement('div');
        //bookWrapper.id= this.title+this.author;
        
        const h1 = document.createElement('h1');
        h1.textContent = `${this.title}`;

        const h2 = document.createElement('h2');
        h2.textContent = `Author: ${this.author}`;
        
        const h3 = document.createElement('h3');
        h3.textContent = `Language: ${this.language}`;
        
        const h4 = document.createElement('h4');
        h4.textContent = `Subject: ${this.subject}`;

        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.placeholder = "Name";

        const commentInput = document.createElement('input');
        commentInput.type = "text";
        commentInput.placeholder = "Comment(280ch Limit)";
        commentInput.maxLength = 280

        const submitButton = document.createElement('input');
        submitButton.type = "submit";
        submitButton.onclick = addComment;

        function addComment(){
            let comment = libraryInstance.addComment(h1.textContent, nameInput.value, commentInput.value);
            if (comment != null){
                const nameLabel = document.createElement('h3');
                nameLabel.textContent = `Name: ${comment.name}`;

                const commentLabel = document.createElement('h3');
                commentLabel.textContent = `Comment: ${comment.comment}`;

                bookWrapper.appendChild(nameLabel)
                bookWrapper.appendChild(commentLabel)
            }
        }

        // function render (commentObj, idx){
        //     // const bookWrapper = document
        //     const comment = document.createElement("h5");
        //     comment.textContent=commentObj.comment;

        //     const name = document.createElement("h5");
        //     name.textContent=commentObj.name;
        // }

        // function displayComments(comment) {
        //     // commentsContainer.innerHTML = "";
          
        //     let commentElement = document.createElement("div");
        //     commentElement.className = "comment";
          
        //     let nameElement = document.createElement("div");
        //     nameElement.className = "name";
        //     nameElement.innerHTML = comment.name;
        //     commentElement.appendChild(nameElement);
          
        //     let commentTextElement = document.createElement("div");
        //     commentTextElement.className = "comment-text";
        //     commentTextElement.innerHTML = comment.comment;
        //     commentElement.appendChild(commentTextElement);
          
        //     let dateElement = document.createElement("div");
        //     dateElement.className = "date";
        //     dateElement.innerHTML = comment.date.toLocaleString();
        //     ///////////maybe here to change each book instance
        //     commentElement.appendChild(dateElement);
          
            // commentsContainer.appendChild(commentElement);
        //   }


        // const img = document.createElement('img');
        // img.src= this.imgSrc
        // img.style.width = "20%"
        // img.style.height = "20%"

        bookWrapper.append(h1, h2, h3, h4, nameInput, commentInput, submitButton,);
        
        
        return bookWrapper
        
    }
    
}

class Comment {
    constructor(name, comment, date) {
        this.name = name;
        this.comment = comment;
        this.date = date;

        const commentWrapper = document.createElement('div')

    }

    
}
const properties = []
const streetAddress = document.getElementById ("streetAddress");
const propertyType = document.getElementById ("propertyType");
const city = document.getElementById ("city");
const state = document.getElementById ("state");
const propertyListSection = document.getElementById ("addedBooks");
const userInputButton = document.getElementById ("userInputButton");



userInputButton.addEventListener("click", ()=>{
    const newProperty= {
        streetAddress: streetAddress.value,
        propertyType: propertyType.value,
        city: city.value,
        state: state.value,
    };
    
    properties.push(newProperty);
    
    const renderedProperties = properties.map((property,idx)=>{
        const renderedProperty=render(property, idx);
        return renderedProperty
    })

    propertyListSection.replaceChildren(...renderedProperties)
})


function render (propertyObj, idx){
    const propertyWrapper = document.createElement("div");
    // propertyWrapper.style.border= "2px solid"
    // propertyWrapper.style.margin= "8%"

    const propertyAddress = document.createElement("h1");
    propertyAddress.textContent= propertyObj.streetAddress;
    propertyWrapper.style.fontFamily= "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    // propertyWrapper.style.backgroundColor="black"
    propertyWrapper.style.fontSize="16px"

    const propertyType = document.createElement("h2");
    propertyType.textContent= `Author: ` + propertyObj.propertyType;
    propertyWrapper.style.fontStyle= "italic";

    const propertyCity = document.createElement("h3");
    propertyCity.textContent= `Language: ` + propertyObj.city;
    propertyWrapper.style.fontStyle= "normal";
   
    const propertyState = document.createElement("h4");
    propertyState.textContent= `Subjects: ` + propertyObj.state;
    propertyWrapper.style.fontStyle= "normal";

    const propertyDeleteButton = document.createElement("button");
    propertyDeleteButton.textContent= "Remove Book"
    propertyDeleteButton.style.backgroundColor= "red"
    // propertyDeleteButton.style.borderRadius= "40%"
    // propertyDeleteButton.style.padding= "2%"

    propertyDeleteButton.addEventListener("click", function(){
        properties.splice(idx, 1);
        const renderedProperties = properties.map((property,idx)=>{
            const renderedProperty= render(property,idx)
            return renderedProperty
        })
        propertyListSection.replaceChildren(...renderedProperties)

    })

    propertyWrapper.append(propertyAddress, propertyType, propertyCity, propertyState, propertyDeleteButton);

    return propertyWrapper;
}


// const addComment = document.getElementById("addComment")
// const name = document.getElementById("name")
// const comment = document.getElementById("comment")
// const date = document.getElementById("date")

// addComment.addEventListener("click", ()=>{
//     const newComment = {
//         name: name.value,
//         comment: comment.value,
//         date: date.value,
//     };

// })

// const book1 = new Book('Harry Potter', 'J.K. Rowling', 'English', 'Fantasy')

// document.body.append(book1.render())


// filterVisibleBooks(criteria) {
//     this.visibleBooks
// }