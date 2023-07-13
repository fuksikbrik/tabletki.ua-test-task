const button = document.querySelector(".button-information")
const block = document.querySelector(".js-working")
const body = document.querySelector('#body')
const exit = document.querySelector('.exit')


const buttonMobile = document.querySelector(".button-more-information-mobile")

buttonMobile.addEventListener('click', function (){
   console.log('click')
   body.classList.add('modal');
})

exit.addEventListener('click', function (){
    body.classList.remove('modal')
})

button.addEventListener('click', function () {
   button.classList.toggle('active');
   block.classList.toggle('active')
})

let tab = function () {
   let tabNav = document.querySelectorAll('.tab-title'),
       tabContent = document.querySelectorAll('.tab-content'),
       tabName;
       
       tabNav.forEach(item => {
           item.addEventListener('click', selectTabNav)
       });

       function selectTabNav() {
           tabNav.forEach(item => {
               item.classList.remove('active');
           });
           this.classList.add('active');
           tabName = this.getAttribute('data-tab-name');
           selectTabContent(tabName);
       }

       function selectTabContent(tabName) {
           tabContent.forEach(item => {
               item.classList.contains(tabName) ? item.classList.add('active-tab') : item.classList.remove('active-tab');
           })
       }
}

tab();