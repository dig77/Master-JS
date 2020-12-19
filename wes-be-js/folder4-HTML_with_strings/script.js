const item = document.querySelector('.items')
const imgSrc = `http://picsum.photos/500/?test`
const descrip = `is this random`
const newDiv = `
    <div class="wrapper">
        <h2>This image subTitle</h2>
        <img src="${imgSrc}> alt="${descrip}">    
    </div>
`

const newHeader = `
    <p>Add some randome text to this ....</p>
`

item.innerHTML = newDiv

const myImage = document.querySelector('.wrapper img')

console.log(myImage)

myImage.classList.add('.img-round')

const myFragment = document.createRange().createContextualFragment(newHeader)

console.log(myFragment)

document.body.appendChild(myFragment)

