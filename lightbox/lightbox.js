const imageLinkList = document.querySelectorAll("figure.wp-block-gallery figure.wp-block-image a");


imageLinkList.forEach(link => {
    let imgLink = link.href;
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        lightboxImg.src = imgLink;
        lightbox.classList.remove("hidden")
    })

});

let makeLightbox = () => {
    let divContainer = document.createElement("div");
    divContainer.id = "my-lightbox-container";
    divContainer.className = "hidden";

    let divImgWrap = document.createElement("div");
    divImgWrap.className = "image-wrap";

    let img = document.createElement("img");
    img.src = "";
    img.alt = "";
    
    divImgWrap.appendChild(img);

    divContainer.appendChild(divImgWrap);
    

    document.body.appendChild(divContainer);
}
makeLightbox();

const lightboxImg = document.querySelector("#my-lightbox-container img");
const lightbox = document.querySelector("#my-lightbox-container");

lightbox.addEventListener("click", ()=>{
    lightbox.classList.add("hidden");
})