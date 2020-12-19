const myWrapper = document.createElement('div')

myWrapper.classList.add('wrapper')

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