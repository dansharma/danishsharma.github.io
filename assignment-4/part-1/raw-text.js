


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}



const storyText =["It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:",
   "they stared in horror for a few moments, then :insertz:. :Bob: saw the whole thing, but was not surprised :insertx: weighs 300 pounds, and it was a hot day."]

const insertx =["Willy the Goblin",
"Big Daddy",
"Father Christmas"]

const inserty =["the soup kitchen",
"Disneyland",
"the White House"]

const insertz =["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]



randomize.addEventListener('click', result);

function result() {


  var finalstory = randomValueFromArray(storyText);

finalstory = finalstory.replace(":insertx:",randomValueFromArray(insertx));
finalstory = finalstory.replace(":inserty:",randomValueFromArray(inserty));
finalstory = finalstory.replace(":insertz:",randomValueFromArray(insertz));

  if(customName.value !== '') {
    var newname = customName.value;
    finalstory = finalstory.replace(':Bob:', newname);

  }

  if(document.getElementById("uk").checked) {
    const conversion=0.5555;
    var  cel = Math.round(conversion*(94-32));
    const weightConversion=0.4536
    var weight = Math.round(300*weightConversion)
    finalstory = finalstory.replace("94 farenheit",cel+"Degree celcius");  
    finalstory = finalstory.replace("300 pounds", weight+" Kilogram"); 


  }

  story.textContent = finalstory;
  story.style.visibility = 'visible';
}
