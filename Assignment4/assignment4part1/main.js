

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

// Add click event listener to the randomize button
randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = '';
  story.style.visibility = 'visible';
}


// Event listener and incomplete function definition
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText; // Create a new story each time the button is pressed
  const xItem = randomValueFromArray(insertX); // Random item from insertX
  const yItem = randomValueFromArray(insertY); // Random item from insertY
  const zItem = randomValueFromArray(insertZ); // Random item from insertZ

  // Replace placeholders in the story
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name); // Replace 'Bob' with the custom name
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429); // Convert pounds to stones
    const temperature =  Math.round((94 - 32) * 5 / 9); // Convert Fahrenheit to Celsius

    newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade');
    newStory = newStory.replace('300 pounds', weight + ' stone');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
