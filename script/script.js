const button = document.querySelector(".button-information")
const block = document.querySelector(".js-working")

button.addEventListener('click', function () {
   button.classList.toggle('active');
   block.classList.toggle('active')
})