/* 
    Developer: Kenneth Zamani Yashim
    Title: Random background Generator
    Date: 15/10/2022
*/


// Add Event when the button is clicked
btn.addEventListener("click",() => {

    // Store All possible generated code in a string
    const hexStr = "0123456789abcdef";
    let hexCode = ["#"];    // Array to store Colour Code

    // Get the body background 
    const backGround = document.getElementById("body").style;

    // Get the Button & store in a variable
    const btn = document.getElementById('btn');

    // The color Code generated will be displayed to the User
    let hexDisplay = document.getElementById("hexDisplay");

    // Loop through the Hex String (HexStr) 
    // Push the values through each loop to the hexCode array
    // use Math.random()*hexStr to generate all the 
    // characters in the hexStr
    for (let i = 0; i < 6; i++) {
        hexCode.push(hexStr[Math.floor(Math.random()*hexStr.length)])
        
    }

    // Output the generated hexCode to the browser console
    // join('') method is used to convert the array to a string 
    // and join the comma seperated characters togther
    console.log(hexCode.join(''))

    // Attach Body background to the hexCode generated
    backGround.backgroundColor = hexCode.join('');

    // Display the hexCode to the user
    hexDisplay.innerText = hexCode.join("");
})