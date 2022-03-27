

function save(){
    let input = document.querySelector(".ab").value;
    
     if (input == "") {
         alert("Please type the name of the movie before adding it.")
     } else {
        document.querySelector("form").addEventListener("submit", addNewMovie);
        const message = document.querySelector('#message')
     }
    
}
function addNewMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input')
  
    const movie = document.createElement("nulll")
  
    const movieName = document.createElement("null");
    if (movieName.textContent = inputField.value) {
        alert( inputField.value + " "   + "Has been successfully added to your list of movies")
        movieName.style.fontSize = "30px"
        movieName.style.marginLeft = "600px"
 movieName.style.padding = "5px"
        
    }
    movieName.addEventListener("click", crossOffMovie);
    movie.appendChild(movieName)
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.color = 'red';
    deleteBtn.style.margin = "10px"
    deleteBtn.style.background = "blue";

    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
  
    const list = document.querySelector("ul");
    list.appendChild(movie);
  
   
    inputField.value = ''
  }
  
  function deleteMovie(event) {
 
  
      event.target.parentNode.remove();
  }
  
  function crossOffMovie(event) {
      event.target.classList.toggle('checked')
  
  
     
  }
  
  

  

