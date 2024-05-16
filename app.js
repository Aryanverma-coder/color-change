let btn=document.querySelector("button");
btn.addEventListener("click", function(){
    let hd=document.querySelector("h3");
    let randomcolor=genratecolor();
    hd.innerText=randomcolor;
    console.log("color update");
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    
});

function genratecolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;

}
