import { imgFiles, imgCaptions } from "./data.js";

window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Error in ${event.filename} at line ${event.lineno}:${event.colno} message => ${event.message}`);
    return true
})


const createRankingApp = function () {
    const photBucket = document.querySelector('.photo-bucket')
    imgFiles.forEach((img, index) => {
        // console.log(img);
        // console.log(index);
        const image = document.createElement('img')
        image.src = img
        image.alt = imgCaptions[index]
        photBucket.appendChild(image)
    })

    const imagesBucket = document.querySelectorAll('.photo-bucket img')
    // console.log(images);
    

    imagesBucket.forEach(img => {
        img.addEventListener('click', sortedList)
    });


    let counter = 0
    function sortedList() {
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

        const listsContainer = document.querySelector('.ranked-list')
        
        listsContainer.appendChild(container)


        photBucket.removeChild(this)


    }


    



}















window.addEventListener('load', createRankingApp)
