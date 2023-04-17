class Library {
  constructor() {
    this.books = [];
  }
  seed(booksData) {
    for (const book of booksData) {
      const newBook = new Book(
        book.title,
        book.author,
        book.language,
        book.subject,
        (book.comments = [])
      );
      this.addBook(newBook);
    }
  }
  addBook(individualBook) {
    this.books.push(individualBook);
    //this "sees(book)" method is being pushed by this push method
  }
  render() {
    const libraryWrapper = document.createElement("div");

    for (const book of this.books) {
      libraryWrapper.append(book.render());
    }
    document.body.append(libraryWrapper);
  }

  addComment(bookTitle, name, comment){
    if (name.length == 0 || comment.length == 0) {
      return;
    }

    let newComment = new Comment(name, comment, new Date());

    for (let i = 0; i < 1; i++) {
      if (this.books[i].title == bookTitle) {
        this.books[i].comments.push(newComment);
      }
    }

    return newComment
  }

  displayComments(comment) {
    let commentsContainer = document.getElementById("comments");
  
    commentsContainer.innerHTML = "";
  
    let commentElement = document.createElement("div");
    commentElement.className = "comment";
  
    let nameElement = document.createElement("div");
    nameElement.className = "name";
    nameElement.innerHTML = comment.name;
    commentElement.appendChild(nameElement);
  
    let commentTextElement = document.createElement("div");
    commentTextElement.className = "comment-text";
    commentTextElement.innerHTML = comment.comment;
    commentElement.appendChild(commentTextElement);
  
    let dateElement = document.createElement("div");
    dateElement.className = "date";
    dateElement.innerHTML = comment.date.toLocaleString();
    ///////////maybe here to change each book instance
    commentElement.appendChild(dateElement);
  
    commentsContainer.appendChild(commentElement);
  }
}

// let booksData = []

// let commentsArray = [];

function addComment() {
  console.log("HELLOO");
  let title = document.getElementById("h1").value;
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;

  let newComment = new Comment(name, comment, new Date());
  for (let i = 0; i < booksData.length; i++) {
    if (booksData[i].title == title) {
      if (booksData[i].comments == null) {
        booksData[i].comments = [];
      }
      booksData[i].comments.push(newComment);
    }
  }
  render();

  // let newComment = name + ": " + comment;

  // commentsArray.push(newComment);

  displayComments();

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// function commentLengthMax(commentLength){
//   if(commentLength>280)return false;
// }
