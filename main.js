const dropDownButtons = document.querySelectorAll('.expandButton')
const expandingSections = document.querySelectorAll('.expandable')

console.log(dropDownButtons);

function dropDownAnswer() {

  let targetExpandableDiv = this.dataset.targetButton;
  // console.log(targetExpandableDiv)
  
  this.classList.toggle('active')
    
  expandingSections.forEach(section => { 
  // console.log(section.dataset.targetMore)

    if (targetExpandableDiv == section.dataset.targetMore) {
      section.classList.toggle('hide-answer')
    } // else { section.classList.add('hide-answer')}
  })
//  this.nextElementSibling.classList.toggle('hide-answer');
//  console.log(this.previousElementSibling);
//  console.log(this.nextElementSibling);
}

dropDownButtons.forEach( button => {
  button.addEventListener('click', dropDownAnswer)
})