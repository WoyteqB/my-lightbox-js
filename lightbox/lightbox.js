const imageLinkList = document.querySelectorAll("figure.wp-block-gallery figure.wp-block-image a");

imageLinkList.forEach( (link, index) => {
    let imgLink = link.href;
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        lightboxImg.src = imgLink;
        lightbox.classList.remove("hidden")
        lightboxImg.setAttribute("imgNumber",index)
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
    img.setAttribute("imgNumber","")
    
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
const lightboxNext = document.querySelector("#my-lightbox-container .nav-wrap .nav-next");
const lightboxPrev = document.querySelector("#my-lightbox-container .nav-wrap .nav-prev");

lightboxClose.addEventListener("click", (event)=>{
    event.preventDefault();
    lightbox.classList.add("hidden");
    lightboxImg.src ="";
});

lightboxPrev.addEventListener("click", (event)=>{
    event.preventDefault();
    setLightboxByIndex(parseInt(lightboxImg.getAttribute("imgNumber"))-1)

});

lightboxNext.addEventListener("click", (event)=>{
    event.preventDefault();
    setLightboxByIndex(parseInt(lightboxImg.getAttribute("imgNumber"))+1)
});

let setLightboxByIndex = (index) =>{
    if(index > imageLinkList.length-1){
        index = 0;

    }else if(index < 0){
        index=imageLinkList.length-1;
    }
    lightboxImg.src = imageLinkList[index].href;
    lightboxImg.setAttribute("imgNumber", index);
};