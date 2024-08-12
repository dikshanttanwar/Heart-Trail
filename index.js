let body = document.querySelector("body")

body.addEventListener("mousemove",(e)=>{    
    let posX = e.clientX;
    let posY = e.clientY;
    let span = document.createElement("span")
    span.style.setProperty("---xPos",posY + "px")
    span.style.setProperty("---yPos",posX + "px")
    body.appendChild(span)
    let size = Math.random()*150;
    span.style.width = size+"px";
    span.style.height = size+"px";
    console.log(e.clientX)
    setTimeout(() => {
        span.remove();
    }, 2000);

})