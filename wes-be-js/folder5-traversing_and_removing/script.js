

const destroyImage = document.querySelector('img')

destroyImage.remove()

const changeImage = document.createElement('img')

document.body.insertAdjacentElement('afterbegin', changeImage)

const subject = 'movies'

const imgSrc = `https://loremflickr.com/500/250/${subject}/all`

changeImage.src = imgSrc

const targetDiv = document.body.children[2]

const targetParagraph = targetDiv.children[0]


// traversing element

/*
console.log(targetParagraph.children)

console.log(targetParagraph.firstElementChild)

console.log(targetParagraph.lastElementChild)

console.log(targetParagraph.previousElementSibling)

console.log(targetParagraph.nextElementSibling)

console.log(targetParagraph.parentElement)

*/

// traversing nodes

console.log(targetParagraph.childNodes)

console.log(targetParagraph.firstChild)

console.log(targetParagraph.lastChild)

console.log(targetParagraph.previousSibling)

console.log(targetParagraph.nextSibling)

console.log(targetParagraph.parentNode)



