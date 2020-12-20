const starterDiv = document.createElement('div');

starterDiv.classList.add('wrapper')

document.body.append(starterDiv)

const myList = `
    <ul></ul>
`
starterDiv.innerHTML = myList

const targetUl = document.querySelector('.wrapper ul')

console.log(targetUl)

const li3 = document.createElement('li')

targetUl.append(li3)

li3.textContent = 'three'

const li2 = document.createElement('li')

li2.textContent = 'two'

li3.insertAdjacentElement('beforebegin', li2)

const li1 = document.createElement('li')

targetUl.insertAdjacentElement('afterbegin', li1)

li1.textContent = 'one'

const myImage = document.createElement('img')

myImage.src = `https://picsum.photos/400`

myImage.classList.add('cute')

myImage.alt = 'cute puppy'

starterDiv.append(myImage)

const stringDiv = `
    <div>
        <p></p>
        <p></p>
    </div>
`
starterDiv.insertAdjacentHTML('afterbegin',stringDiv)

const newTargetDiv = starterDiv.children[0]

const targetParagraph = newTargetDiv.children[1]

targetParagraph.classList.add('warning')

newTargetDiv.children[0].remove()


const name = ''
const age = ''
const height = ''

function generatePlayerCard(name,age,height) {

    const ageInDogYears = age * 4

    const result = ` 
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They area ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!!!!</p>
    <button>Destroy ME!!!</button
    </div>
    `
    return result
}

const cardsWrap = document.createElement('div')

cardsWrap.classList.add('cards')

const card1 = generatePlayerCard('james', '50', '185')

const card2 = generatePlayerCard('Les', '89', '170')

const card3 = generatePlayerCard('nike', '35', '190')

const card4 = generatePlayerCard('chasey', '43', '180')

starterDiv.insertAdjacentElement('beforebegin', cardsWrap)

console.log(cardsWrap)

cardsWrap.insertAdjacentHTML('afterbegin', card1)

cardsWrap.insertAdjacentHTML('beforeend', card4)

const targetcard1 = document.querySelector('.playerCard')

targetcard1.insertAdjacentHTML('afterend', card2)

const targetCard4 = cardsWrap.children[2]

targetCard4.insertAdjacentHTML('beforebegin', card3)

cardsWrap.style.marginBottom = '75px'

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

for(let i = 0; i < 4; i++) {
    console.log(isButton[i])
}









