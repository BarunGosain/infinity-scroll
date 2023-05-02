const imageContainer = document.getElementById("image-container");
const accessKey = 'OQIDGQvQfI3k7qyBi3yEqLgQmwjVoxXPz-GGr_yNfbw';
let count = 5;
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;
let photosArr = []

function setAttributes(elem, attributes){
    for(const key in attributes){
        elem.setAttribute(key, attributes[key]);
    }
}

function displayPhotos(){
    photosArr.forEach(photo => {
        const anchorTag = document.createElement('a');
        const imgTag = document.createElement('img');
        setAttributes(anchorTag, {
            href: photo.links.html,
            target: '_blank'
        });

        setAttributes(imgTag, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        anchorTag.appendChild(imgTag);    
        imageContainer.appendChild(anchorTag);
    });


}

async function getPhotos(){
    try{
        let response = await fetch(apiUrl);
        photosArr = await response.json();
        displayPhotos();
    }
    catch(err){
        console.log("Error: ", err);
    }
}

getPhotos();