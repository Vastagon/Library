let myLibrary = [];
let createNewBook = document.querySelector('#createNewBook');
let form = document.querySelector('#bookInput');
let i = 0;
let bookNameId = document.querySelector('#name')
let authorId = document.querySelector('#author')
let numberOfPagesId = document.querySelector('#numberOfPages')
let hasReadId = document.querySelector('#hasRead')
let submitId = document.querySelector('#submit')
let bookContainer = document.querySelector('#bookContainer')
let isChecked = false;
let removeButton;
let hasReadButton;
hasReadId.checked = false;
let mySaved = [];
let n = 0;
let amount;
let finished = false;


// if(localStorage.getItem(amount) == null || localStorage.getItem(amount) == 0){
//   amount = 1;
// }else{
//   amount = localStorage.getItem(amount);
// }
// while(i < amount && !finished){
//   mySaved.push(localStorage.getItem(i))
//   i++;
// }
// i = 0;
 
  localToOnlineStorage();



  function localToOnlineStorage(){
    console.log("Length: " + mySaved.length)
    let a = 0;
    while(a < mySaved.length){
      let newBook = new book(bookNameId.value, authorId.value, numberOfPagesId.value, hasReadId.value)
      myLibrary.push(newBook)//Adds a new book object to to myLibrary    
      addBookToLibrary();    
      a++;  
    }

  }

hasReadId.addEventListener('click', function(){
  if(isChecked){
    isChecked = false;
  }else{
    isChecked = true;
  }
})

function book(title, author, pageNumber, hasRead){
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.hasRead = hasRead;
}
createNewBook.addEventListener('click', function(){
  form.style.display= "block"
  finished = true;
  changeOpacity();
});
function changeOpacity(){
  let opacity = document.getElementsByClassName('opacityChange');
  let i = 0;
  if(opacity[0].style.opacity == .5){
    while(i < opacity.length){
      opacity[i].style.opacity = "1";
      i++;
    }  
  }else{
    while(i < opacity.length){
      opacity[i].style.opacity = ".5";
      i++;
    }      
  }
}

submitId.addEventListener('click',function(){//Submit Button
  let newBook = new book(bookNameId.value, authorId.value, numberOfPagesId.value, hasReadId.value)
  myLibrary.push(newBook)//Adds a new book object to to myLibrary 
  form.style.display = "none";
  hasReadId.checked = false;
  addBookToLibrary();
  isChecked = false;
  changeOpacity();
})




function addBookToLibrary() {//Adds book to the page
    let book = document.createElement('div');
    book.className = "individualBook"
    let name = document.createElement('p');
    let author = document.createElement('p');
    let numberofPages = document.createElement('p');
    let hasRead = document.createElement('p');

    hasReadButton = document.createElement('button')
    hasReadButton.className = "hasReadButton"
    hasReadButton.innerText = "Has Read"

    removeButton = document.createElement('button')
    removeButton.className = "removeButton"
    removeButton.innerText = "Remove"
    //if(!finished){
      let e = 0;
      console.log(myLibrary.length)
      //while(e < myLibrary.length){
      name.innerText ="Name: "+ myLibrary[e].title;
      author.innerText ="Author: "+ myLibrary[e].author;
      numberofPages.innerText ="Pages: "+ myLibrary[e].pageNumber;
        e++;
      //}
    // }else{
      name.innerText ="Name: "+ myLibrary[i].title;
      author.innerText ="Author: "+ myLibrary[i].author;
      numberofPages.innerText ="Pages: "+ myLibrary[i].pageNumber;
    //}
    

    function hasReadisChecked(){
      if(isChecked){
        hasRead.innerText ="Has Read";
        isCheckedChild = true;
      }else{
        hasRead.innerText ="Has Not Read";
        isCheckedChild = true;
      }      
    }
    hasReadisChecked();

    book.append(name)
    book.append(author)
    book.append(numberofPages)
    book.append(hasRead)
    book.append(removeButton)
    book.append(hasReadButton)

    bookContainer.append(book);    


    //Remove Button
    removeButton.addEventListener('click', function(){
      this.parentElement.style.display = "none";
    })

    //Read Button
    hasReadButton.addEventListener('click', function(){
      console.log(hasRead.textContent)

      if(hasRead.textContent == "Has Read"){
        hasRead.textContent = "Has Not Read"
      }else{
        hasRead.textContent = "Has Read"
      }
    })

      // localStorage.setItem(i,JSON.stringify(mySaved))
      // localStorage.setItem("amount", i);
    i++;
}


