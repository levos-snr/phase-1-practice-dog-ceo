document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogBreeds = document.getElementById("dog-breeds");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogImageContainer = document.getElementById("dog-image-container");
  //challenge 1
  function getAllDog() {
    fetch(imgUrl)
      .then((res) => res.json())
      .then((data) => {
        const status = document.createElement("li");
        dogImageContainer.appendChild(status);
        const newDog = data.message.map((dog) => {
          const imgElement = document.createElement("img");
          imgElement.src = dog;
          imgElement.alt = "Dog";
         dogImageContainer.appendChild(imgElement);
        });
      });
  }


  //challenge 2
  function getAllBreeds() {
    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => {
        const breeds = data.message;
        // use forEach
        Object.keys(breeds).forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          dogBreeds.appendChild(li);
          //Challenge 3
          li.addEventListener("click", function () {
            li.style.color = "red";
          });
        });
      });
  }
  

  
  function filterBreeds() {
    const select = document.getElementById("breed-dropdown");
    select.addEventListener("change", function (e) {
      const letter = e.target.value;
      const allBreeds = document.querySelectorAll("li");
      allBreeds.forEach((breed) => {
        if (breed.textContent.startsWith(letter)) {
          breed.style.display = "";
          
        } else {
          breed.style.display = "none";
        }
      });
    });
  }  
  getAllDog();
  getAllBreeds();
  filterBreeds()
});
