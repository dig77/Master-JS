// selecting elements in DOM
/*
const paragraph = document.querySelector('p')
const paragraphs = document.querySelectorAll('p')
const items = document.querySelectorAll('.items')

const image = document.querySelectorAll('img')

console.log(paragraph)

paragraphs[3].classList.add('last')

console.log(paragraphs)

console.log(image)

console.log(items)
*/

// working with css classes
/*
const p = document.querySelector('p')

console.log(p)

p.insertAdjacentHTML('beforebegin', '<h1></h1>')

const h1 = document.querySelector('h1')

h1.innerText = "I'm the main header for this page"

const h2 = document.querySelector('h2')

h2.insertAdjacentText( 'beforeend' , ' with added new text')

const paragraphs = document.querySelectorAll('p')

paragraphs[3].insertAdjacentText('beforeend', ' i can change this text')

paragraphs[3].insertAdjacentHTML('afterend', '<strong>A new element here manipulated by JS</strong>')

const images = document.querySelectorAll('img')

console.log(images)

const blockImg = images[1]

blockImg.classList.add('is-block')

function toggleRound() {
    console.log('esta a clicar')
    blockImg.classList.toggle('is-round');
}

console.log(blockImg)

blockImg.addEventListener('click', toggleRound)
*/

// creating HTML

const myWrapper = document.createElement('div')

myWrapper.classList.add('wrapper')

// document.body.appendChild(myWrapper)

document.body.insertAdjacentElement('afterbegin', myWrapper)

const myUl = document.createElement('ul')

myWrapper.appendChild(myUl)

const li3 = document.createElement('li')

li3.textContent = 'item 3'

myUl.appendChild(li3)

const li2 = document.createElement('li')

li2.textContent = 'item 2'

li3.insertAdjacentElement('beforebegin', li2)

myUl.insertAdjacentHTML('afterbegin', '<li>item 1</li>')

const li4 = document.createElement('li')

li4.textContent = 'item 4'

li3.insertAdjacentElement('afterend', li4)

const li5 = document.createElement('li')

myUl.insertAdjacentElement('beforeend', li5)

li5.textContent = 'item 5'

const preDiv = document.createElement('div')

preDiv.classList.add('first')

console.log(preDiv)

myWrapper.insertAdjacentElement('beforebegin', preDiv)

const h1 = document.createElement('h1')

h1.textContent = 'this is main header'

preDiv.appendChild(h1)