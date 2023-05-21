// let cali = document.getElementById('california');
// let caliContainer = cali.getBoundingClientRect();
// console.log(caliContainer);
// console.log(cali);

// let phil = document.getElementById('philippines');
// console.log(phil);

document.querySelector("#popup-open-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});


document.querySelector(".popup .popup-close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});