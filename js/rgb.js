// RGB Values background Colour Changer

var rgb = [];

btn.addEventListener("click",() => {

    const backGround = document.getElementById("body").style;
    const btn = document.getElementById('btn');
    let hexDisplay = document.getElementById("hexDisplay");
    
    
    for (let i = 0; i <= 2; i++) {
        rgb.push(Math.floor(Math.random()*255))
    }
    for (let i = 0; i < 1; i++) {
        rgb.push(Math.random()*1)
        
    }
    console.log(rgb.join(', '))

    backGround.backgroundColor = "rgb("+rgb+")";
    hexDisplay.innerText = `rgb (${rgb.join(", ")})`;
    rgb = [];
})
