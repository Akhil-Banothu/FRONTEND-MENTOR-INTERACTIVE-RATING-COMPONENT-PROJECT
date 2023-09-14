let button1 = document.getElementById('button1');
let mainContainer1 = document.getElementById('mainContainer1');
let mainContainer2 = document.getElementById('mainContainer2');

function displayContent(number, element) {
   let content = document.getElementById('displayContent');
   content.innerHTML = `You selected ${number} out of 5`;

   let allElements = document.querySelectorAll('waste');
   for(let i=0; i<allElements.length; i++) {
      allElements[i].classList.remove('special');
   }
   element.classList.add('special')
   
}

function showSecondContainer(){
   mainContainer1.classList.add('hide');
   mainContainer2.classList.remove('hide');

}
button1.addEventListener('click', showSecondContainer);

