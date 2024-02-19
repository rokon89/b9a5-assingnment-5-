function playMove(){

    const shown = document.getElementById("benar");
    shown.classList.add("hidden");

    const show = document.getElementById("addEliment");
    show.classList.remove("hidden");
   
}

let btn = document.getElementsByClassName("bnt");

let dowen = 24;
let count = 0;
for(let button of btn){
  button.addEventListener("click",function(event){ 

    let chack = document.getElementById("spn").innerText;
    if(chack>3){
      return alert("sorry")
    }

    count += 1;
    dowen -= 1;

    button.disabled = true;
    button.style.backgroundColor="green";
    button.classList.add("disabled:");
    
    let ponero = document.getElementById("porero1").innerText;
    let finelset = parseInt(ponero);



    let sit = event.target.innerText;
    
    let tk = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].childNodes[1].innerText;

    let Ekonommik = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[7].childNodes[1].innerText;

    let allseti = document.getElementById("selected-place-containr");
    
    //console.log(allseti);

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = sit;
    const p2 = document.createElement("p");
    p2.innerText = Ekonommik;
    const p3 = document.createElement("p");
    p3.innerText = tk;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    allseti.appendChild(li);

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

function sussessly(){
  const fot = document.getElementById("main");
  fot.classList.add("hidden");

    const fot1 = document.getElementById("sussess");
    fot1.classList.remove("hidden");
    // console.log("ergthysr")
}