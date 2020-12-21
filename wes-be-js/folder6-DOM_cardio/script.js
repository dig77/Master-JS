// Make a div
const starterDiv = document.createElement('div');
// add a class of wrapper to it
starterDiv.classList.add('wrapper')
// put it into the body
document.body.append(starterDiv)
// make an unordered list
const myList = `
    <ul></ul>
`
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
starterDiv.innerHTML = myList
const targetUl = document.querySelector('.wrapper ul')
const li3 = document.createElement('li')
targetUl.append(li3)
li3.textContent = 'three'
const li2 = document.createElement('li')
li2.textContent = 'two'
li3.insertAdjacentElement('beforebegin', li2)
const li1 = document.createElement('li')
targetUl.insertAdjacentElement('afterbegin', li1)
li1.textContent = 'one'
// create an image
const myImage = document.createElement('img')
// set the source to an image
myImage.src = `https://picsum.photos/400`
// set the width to 250
myImage.width = 250
// add a class of cute
myImage.classList.add('cute')
// add an alt of Cute Puppy
myImage.alt = 'cute puppy'
// Append that image to the wrapper
starterDiv.append(myImage)
// with HTML string, make a div, with two paragraphs inside of it
const stringDiv = `
    <div>
        <p></p>
        <p></p>
    </div>
`
// put this div before the unordered list from above
starterDiv.insertAdjacentHTML('afterbegin', stringDiv)
// add a class to the second paragraph called warning
const newTargetDiv = starterDiv.children[0]
const targetParagraph = newTargetDiv.children[1]
targetParagraph.classList.add('warning')
// remove the first paragraph
newTargetDiv.children[0].remove()
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const name = ''
const age = ''
const height = ''
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const ageInDogYears = age * 7
    const result = ` 
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They area ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!!!!</p>
    <button>Destroy ME!!!</button
    </div>
    `
    return result
}
// make a new div with a class of cards
const cardsWrap = document.createElement('div')
cardsWrap.classList.add('cards')
// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('james', '50', '185')
const card2 = generatePlayerCard('Les', '89', '170')
const card3 = generatePlayerCard('nike', '35', '190')
const card4 = generatePlayerCard('chasey', '43', '180')
// append those cards to the div
starterDiv.insertAdjacentElement('beforebegin', cardsWrap)
cardsWrap.insertAdjacentHTML('afterbegin', card1)
cardsWrap.insertAdjacentHTML('beforeend', card4)
const targetcard1 = document.querySelector('.playerCard')
targetcard1.insertAdjacentHTML('afterend', card2)
const targetCard4 = cardsWrap.children[2]
targetCard4.insertAdjacentHTML('beforebegin', card3)
cardsWrap.style.marginBottom = '75px'
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
const isButton = document.querySelectorAll('button')
isButton[0].addEventListener('click', function removeCard() {
    isButton[0].parentElement.remove()
})
isButton[1].addEventListener('click', function removeCard() {
    isButton[1].parentElement.remove()
})
isButton[2].addEventListener('click', function removeCard() {
    isButton[2].parentElement.remove()
})
isButton[3].addEventListener('click', function removeCard() {
    isButton[3].parentElement.remove()
})
// loop over them and attach a listener
for (let i = 0; i < 4; i++) {
    console.log(isButton[i])
}