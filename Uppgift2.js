let container = document.querySelector("#container"); //div
let input = document.querySelector("#inputValue"); //input fält
let line = document.querySelector("#line"); //ol
let message =  document.querySelector("#emptyLine")
            //KNAPPAR
let addToLineButton = document.querySelector("#addToLine");
let checkInButton = document.querySelector("#checkIn");
let fastTrackButton = document.querySelector("#fastTrack");

let theList = [];

if(theList.length === 0){ //Om listan är tom visa meddelandet i <h2>
    message.innerText= "There’s currently no people standing in line";
 };

addToLineButton.addEventListener("click", () =>  {
    if(input.value === "") { //alert om inget namn angivits vid klick
        alert("You need to write a name.") 
    }
    else{   //kod för att lägga till personer i kön
        theList.push(input.value);
        let newInLine = document.createElement("li"); 
        theList.forEach((person) => {   
        newInLine.innerText = person; //Skapa nytt <li> för varje element i array
        line.appendChild(newInLine); //Appendar <li> till <ol>
        input.value ="";
        if(theList.length !== 0){
        message.innerText = "";   // ta bort meddelandet i <h2> om någon läggs till i kön
        }
    });
    }
});
fastTrackButton.addEventListener("click", () => { 
    if(input.value === "") {
        alert("You need to write a name.")
    } else { //Kod för att lägga till någon längst fram i kön
    let firstInLine = document.createElement("li")
    firstInLine.innerText = input.value;
    line.prepend(firstInLine) //lägg person på första plats i listan
    theList.unshift(input.value) // lägg till person först i array
    input.value = "";
        if(theList.length !== 0){ 
          message.innerText = "";   
        }
    }
});
    // Kod för check in/ delete knapp
checkInButton.addEventListener("click", () => {
    theList.splice(0, 1); //tar bort första elementet i array
    line.removeChild(line.childNodes[0]); // tar bort första personen i listan
    if(theList.length === 0){   //Om listan är tom, visa det här meddelandet i <h2>
       message.innerText= "There’s currently no people standing in line";
    }
});

