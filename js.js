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
  const inputTitle = document.getElementById("title").value.trim();
  const inputAuthor = document.getElementById("author").value.trim();
  const inputPages = parseInt(document.getElementById("pages").value.trim());
  const inputRead = document.getElementById("read").value.trim();

  // check if input values are valid
  if (
    inputTitle === "" ||
    inputAuthor === "" ||
    isNaN(inputPages) ||
    (inputRead !== "Yes" && inputRead !== "No")
  ) {
    alert("Please enter valid input values.");
    return null; // return null if input values are invalid
  }

  return new Book(inputTitle, inputAuthor, inputPages, inputRead);
}
// adds the book to the myLibrary array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}
//  popUp
addBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});
// submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let newBook = getBook();
  if (newBook !== null) {
    addBookToLibrary(newBook);
    createsCard();
    closePopUp();
  }
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

  bookCard.classList.add("book");
  readS.classList.add("read");
  removeS.classList.add("remove");
  titleS.classList.add("inp");
  authorS.classList.add("inp");
  pagesS.classList.add("inp");

  readS.innerText = "Read";
  removeS.innerText = "Remove";
  //  loops over the myLibrary array and displays the correct values for each input
  for (i = 0; i < myLibrary.length; i++) {
    //  populates the information
    titleS.innerText = myLibrary[i].title;
    authorS.innerText = myLibrary[i].author;
    pagesS.innerText = myLibrary[i].pages;
    // generates the bookCard inside the main
    // container and the rest inside the book card with a data-value
    container.appendChild(bookCard).setAttribute("data", `${i}`);
    bookCard.appendChild(titleS).setAttribute("data", `${i}`);
    bookCard.appendChild(authorS).setAttribute("data", `${i}`);
    bookCard.appendChild(pagesS).setAttribute("data", `${i}`);
    bookCard.appendChild(readS).setAttribute("data", `${i}`);
    bookCard.appendChild(removeS).setAttribute("data", `${i}`);
    // generates the book card with a data attribute

    if (myLibrary[i].read == "Yes") {
      readS.classList.add("isRead");
    } else if (myLibrary[i].read == "No") {
      readS.classList.add("isNotRead");
    }
  }
}

container.addEventListener("click", (event) => {
  // Read button
  if (event.target.matches(".read")) {
    // gets the dataValue of the button clicked and changes the array.read
    //  value to a different one depending on the case
    buttonValue = event.target.attributes.data.value;
    if (myLibrary[buttonValue].read == "Yes") {
      myLibrary[buttonValue].read = "No";
      event.target.classList.add("isNotRead");
      event.target.classList.remove("isRead");
    } else if (myLibrary[buttonValue].read == "No") {
      myLibrary[buttonValue].read = "Yes";
      event.target.classList.add("isRead");
      event.target.classList.remove("isNotRead");
    }
  }
  // Remove button
  if (event.target.matches(".remove")) {
    let dataNumb = event.target.attributes.data.value;
    // converts the cards nodeList into a array for it to be deleted
    // once the user clicks the remove button
    cards = document.querySelectorAll(`[data='${dataNumb}']`);
    Array.from(cards).forEach((card) => {
      card.parentNode.removeChild(card);
    });
    myLibrary.splice(dataNumb, 1);
  }
});
