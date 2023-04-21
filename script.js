// Navigation
const header = document.querySelector('header');
const btnMenu = document.querySelector('.btn-menu');
const lines = document.querySelector('.line');

btnMenu.addEventListener('click', handleNavigation);

function handleNavigation() {
     lines.classList.toggle('active');
     header.classList.toggle('active');
};


// Tab 
const tabTitles = document.querySelectorAll(".section-two-title");
const clickedTab = "active";

function change(el, clickedTab) {
  tabTitles.forEach(tab => {
    if(tab.classList.contains(clickedTab)) {
      tab.classList.remove(clickedTab);
    }
  });
  el.classList.add(clickedTab);
};

tabTitles.forEach(tab => {
  tab.addEventListener('click', () => {
    change(tab, clickedTab);
  })
});


const allTabs = document.querySelectorAll('.tab')
let indexTab = 0;

tabTitles.forEach(tab => {
     tab.addEventListener('click', () => {
          indexTab = tab.getAttribute('data-index');

          for(i = 0; i < allTabs.length; i++) {
               if(allTabs[i].getAttribute('data-index') == indexTab) {
                    allTabs[i].classList.add('active')
               } else {
                    allTabs[i].classList.remove('active')
               }
          }
     })
})

// Qestions
const questions = document.querySelectorAll('.question-group');
const arrows = document.querySelectorAll('.arrow-svg');
const answer = document.querySelectorAll('.answer');
let indexQuestion = 0;

questions.forEach(quest => {
     quest.addEventListener('click', () => {
          indexQuestion = quest.getAttribute('data-question');

          for(i = 0; i < answer.length; i++) {
               if(answer[i].getAttribute('data-question') == indexQuestion) {
                    answer[i].classList.toggle('active')
               } else {
                    answer[i].classList.remove('active')
               }
          }
     })
})

// Email Validation
const email = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', checkEmail);
email.addEventListener('input', checkEmail);
function checkEmail(e) {
     e.preventDefault();
     let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
     if(regExpEmail.test(email.value)) {
          emailError.classList.remove('active');
          emailError.textContent = "";
     } else {
          emailError.classList.add('active');
          emailError.textContent = "Whoops,  make sur it's an email";
     }
}