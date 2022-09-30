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
    img.src = "images/tatry2.jpg";
    img.alt = "";
    
    divImgWrap.appendChild(img);

    let divNav = document.createElement("div");
    divNav.className = "nav-wrap";

    let linkPrev = document.createElement("a");
    linkPrev.href = "";
    linkPrev.className = "nav-prev";

    divNav.appendChild(linkPrev);

    let linkNext = document.createElement("a");
    linkNext.href = "";
    linkNext.className = "nav-next";

    divNav.appendChild(linkNext);

    divImgWrap.appendChild(divNav);

    let divWrap = document.createElement("div");
    divWrap.className = "wrap";

    divWrap.appendChild(divImgWrap);

    let closeBox = document.createElement("div");
    closeBox.className = "close-box";

    let close = document.createElement("a");
    close.href="";
    close.className="close-window";

    closeBox.appendChild(close);

    divWrap.appendChild(closeBox);

    divContainer.appendChild(divWrap);
    

    document.body.appendChild(divContainer);
}
makeLightbox();

const lightboxImg = document.querySelector("#my-lightbox-container img");
const lightbox = document.querySelector("#my-lightbox-container");
const lightboxClose = document.querySelector("#my-lightbox-container .close-window");

lightboxClose.addEventListener("click", ()=>{
    lightbox.classList.add("hidden");
    lightboxImg.src ="";
})