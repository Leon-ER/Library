const readBtn = document.querySelector("read");
const addBtn = document.querySelector("#addBook");
const removeBtn = document.querySelector(".remove");
const popUp = document.getElementById("popUp");
const submit = document.querySelector("#submit");
const container = document.querySelector(".books");

//library of all the books
let myLibrary = [];

//object constructor

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}
// Gets all the values from the imputs and puts them inside the Book object
function getBook() {
  const inputTitle = document.getElementById("title").value;
  const inputAuthor = document.getElementById("author").value;
  const inputPages = document.getElementById("pages").value;
  const inputRead = document.getElementById("read").value;
  return new Book(inputTitle, inputAuthor, inputPages, inputRead);
}
// adds the book to the myLibrary array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  console.table(myLibrary);
}
//  popUp
addBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let newBook = getBook();
  addBookToLibrary(newBook);
  createsCard();
  closePopUp();
});



function closePopUp() {
  popUp.style.display = "none";
}

// Creates the book cards for each book
function createsCard() {
  const bookCard = document.createElement("div");
  const titleS = document.createElement("p");
  const authorS = document.createElement("p");
  const pagesS = document.createElement("p");
  const readS = document.createElement("button");
  const removeS = document.createElement("button");
  // generates the bookCard inside the main 
  // container and the rest inside the book card with a data-value
  container.appendChild(bookCard).setAttribute('data-value',`${myLibrary.length}`);
  bookCard.appendChild(titleS).setAttribute('data-value',`${myLibrary.length}`);
  bookCard.appendChild(authorS).setAttribute('data-value',`${myLibrary.length}`);
  bookCard.appendChild(pagesS).setAttribute('data-value',`${myLibrary.length}`);
  bookCard.appendChild(readS).setAttribute('data-value',`${myLibrary.length}`);
  bookCard.appendChild(removeS).setAttribute('data-value',`${myLibrary.length}`);

  bookCard.classList.add("book");
  readS.classList.add("read");
  removeS.classList.add("remove");

  readS.innerText = "Read";
  removeS.innerText = "Remove";
  //  loops over the myLibrary array and displays the correct values for each input
  for (i = 0; i < myLibrary.length; i++) {
    //  populates the information
    titleS.innerText = myLibrary[i].title;
    authorS.innerText = myLibrary[i].author;
    pagesS.innerText = myLibrary[i].pages;
    // generates the book card with a data attribute
    if (myLibrary[i].read == "Yes") {
      readS.classList.add("isRead");
    } else {
      readS.classList.add("isNotRead");
    }
  }
}
readBtn.addEventListener("click",()=>{
  console.log('test')
})