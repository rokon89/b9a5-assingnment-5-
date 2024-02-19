function playMove(){

    const shown = document.getElementById("benar");
    shown.classList.add("hidden");

    const show = document.getElementById("addEliment");
    show.classList.remove("hidden");
   
}

let btn = document.getElementsByClassName("bnt");

let dowen = 24;
let count = 0;
for(const button of btn){
  button.addEventListener("click",function(){ 

    let chack = document.getElementById("spn").innerText;
    if(chack>3){
      return alert("invalid")
    }
    count += 1;
    dowen -= 1;

    button.disabled = true;
    button.style.backgroundColor="green";
    button.classList.add("disabled:");
    
      let ponero = document.getElementById("porero1").innerText;
      let finelset = parseInt(ponero);

// function call
    set("spn",count);
    set("costed",dowen);

    numnu("setpone",finelset);
    numnu("grand",finelset);
  })
}


// set function
function set(id,pash){
    let sum = document.getElementById(id);
    sum.innerText = pash;

}


function numnu(id,vale){
  let num = document.getElementById(id).innerText;
  let convart = parseInt(num);
  document.getElementById(id).innerText = convart + parseInt(vale);
      
}