export const flagDetails=()=>{
    fetch("https://restcountries.com/v3.1/all").then((response)=>response.json()).then(response=>{

    console.log(response)

    for(let i=0; i<response.length; i++){
        let display=document.getElementById("display");
        let divcontent=document.createElement("div");
        let image=document.createElement("img");
        let desc=document.createElement("p")
        let sourceImage=(response[i].flags.png);

        image.width=300;
        image.height=250;

        image.src=sourceImage;
        image.style.margin="40px";

        let imageName=response[i].name.common;
        desc.innerHTML=imageName;
        console.log(imageName);

        divcontent.appendChild(image);
        divcontent.appendChild(desc);

        display.appendChild(divcontent);

        function showDetails(){
            let displayImage=document.getElementById("img");
            let displayContent=document.getElementById("description");
            displayImage.src=sourceImage;
            displayContent.innerHTML=JSON.stringify(response[i].flags.alt);
            openPop();
        }

        image.onclick=()=>{
            showDetails();
        }
    }

    })
}

document.getElementById("myform").addEventListener("submit",(event)=>{
 event.preventDefault();
 flagDetails();
})


let closeIcon=document.getElementById("closeIcon");
closeIcon.addEventListener("click",(event)=>{
    closePopup();
})

let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");


export const openPop = () => {
    popup.style.display = "block";
    popupbg.style.display = "block";
}
export const closePopup = () => {
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("popupbg");

    popup.style.display = "none";
    popupbg.style.display = "none";
}
window.addEventListener("click",(event)=>{
    if(event.target==popupbg){
        closePopup();
    }
})

