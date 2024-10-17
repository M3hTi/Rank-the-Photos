import { imgFiles, imgCaptions } from "./data.js";

window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Error in ${event.filename} at line ${event.lineno}:${event.colno} message => ${event.message}`);
    return true
})


const createRankingApp = function () {
    const photoBucket = document.querySelector('.photo-bucket')
    const listsContainer = document.querySelector('.ranked-list')
    imgFiles.forEach((img, index) => {
        // console.log(img);
        // console.log(index);
        const image = document.createElement('img')
        image.src = img
        image.alt = imgCaptions[index]
        photoBucket.appendChild(image)
    })

    const imagesBucket = document.querySelectorAll('.photo-bucket img')
    // console.log(images);
    

    imagesBucket.forEach(img => {
        img.addEventListener('click', moveToRankedList)
    });


    let counter = 0
    function moveToRankedList() {
        const container = document.createElement('div')
        const listNumber = document.createElement('span')
        counter += 1
        listNumber.textContent = counter

        container.appendChild(listNumber)

        const listImg = document.createElement('img')
        listImg.src = this.src
        listImg.alt = this.alt

        container.appendChild(listImg)

        const listCaption = document.createElement('p')
        listCaption.textContent = this.alt

        container.appendChild(listCaption)

        container.addEventListener('click', moveBackToBucket)
        
        listsContainer.appendChild(container)


        photoBucket.removeChild(this)


    }

    
    function moveBackToBucket() {
        console.log(this);
        const img = this.querySelector('img')
        const newImg = document.createElement('img')
        newImg.src = img.src
        newImg.alt = img.alt
        newImg.addEventListener('click', moveToRankedList)
        
        photoBucket.appendChild(newImg)
        listsContainer.removeChild(this)

        updateRankings()
    }


    function updateRankings() {
        counter = 0
        const rankedItems = listsContainer.querySelectorAll('div')
        rankedItems.forEach((item, index) => {
            counter = index + 1
            item.querySelector('span').textContent = counter
        })
    }


    



}















window.addEventListener('load', createRankingApp)
