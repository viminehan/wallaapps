let str = 0;
let per = 0;
let end = 0;
let cha = 0;
let int = 0;
let agi = 0;
let lck = 0;

let ath = 0;
let bar = 0;
let big = 0;
let eng = 0;
let exp = 0;
let loc = 0;
let med = 0;
let mel = 0;
let pil = 0;
let rep = 0;
let sci = 0;
let sma = 0;
let sne = 0;
let spe = 0;
let sur = 0;
let thr = 0;
let una = 0;

// ***** SPECIAL *****

//Update Slider Display
document.getElementById("str").oninput = function () {
    document.getElementById("strOut").value = document.getElementById("str").value;
    updatepoints();
}

document.getElementById("per").oninput = function () {
    document.getElementById("perOut").value = document.getElementById("per").value;
    updatepoints();
}

document.getElementById("end").oninput = function () {
    document.getElementById("endOut").value = document.getElementById("end").value;
    updatepoints();
}

document.getElementById("cha").oninput = function () {
    document.getElementById("chaOut").value = document.getElementById("cha").value;
    updatepoints();
}

document.getElementById("int").oninput = function () {
    document.getElementById("intOut").value = document.getElementById("int").value;
    updatepoints();
}

document.getElementById("agi").oninput = function () {
    document.getElementById("agiOut").value = document.getElementById("agi").value;
    updatepoints();
}

document.getElementById("lck").oninput = function () {
    document.getElementById("lckOut").value = document.getElementById("lck").value;
    updatepoints();
}

//Total Remaining Points
function updatepoints() {
    updateSkills();
str = document.getElementById("str").value;
per = document.getElementById("per").value;
end = document.getElementById("end").value;
cha = document.getElementById("cha").value;
int = document.getElementById("int").value;
agi = document.getElementById("agi").value;
lck = document.getElementById("lck").value;

document.getElementById("atrmax").innerHTML = 41 - str - per - end - cha - int - agi - lck;

//Points Warning
if (document.getElementById("atrmax").innerHTML < 0) { 
    document.getElementById("atrWarn").innerHTML = "ERROR: OVER MAXIMUM POINTS"
} else if (document.getElementById("atrmax").innerHTML > 0) { 
    document.getElementById("atrWarn").innerHTML = "You Have Unspent Points!"
} else { 
    document.getElementById("atrWarn").innerHTML = "All Points Spent."
}

}

// ************* Skils ****************

//Tag Skills
const tagboxes = document.getElementsByClassName("tagbox");
let tickedCount = 0;
let maxTags = 3;

for (let i = 0; i < tagboxes.length; i++) {
  tagboxes[i].addEventListener("input", function() {
    if (this.checked) {
      tickedCount++;
    } else {
      tickedCount--;
    }
    console.log(tickedCount);
    updateSkills();
  });
}

//Skill Ranges
document.getElementById("athr").oninput = function () {
    document.getElementById("athrOut").value = document.getElementById("athr").value;
    updateSkills();
}

document.getElementById("barr").oninput = function () {
    document.getElementById("barrOut").value = document.getElementById("barr").value;
    updateSkills();
}

document.getElementById("bigr").oninput = function () {
    document.getElementById("bigrOut").value = document.getElementById("bigr").value;
    updateSkills(); 
}
    
document.getElementById("engr").oninput = function () {
    document.getElementById("engrOut").value = document.getElementById("engr").value;
    updateSkills();
}

document.getElementById("expr").oninput = function () {
    document.getElementById("exprOut").value = document.getElementById("expr").value;
    updateSkills();
}

document.getElementById("locr").oninput = function () {
    document.getElementById("locrOut").value = document.getElementById("locr").value;
    updateSkills();
}

document.getElementById("medr").oninput = function () {
    document.getElementById("medrOut").value = document.getElementById("medr").value;
    updateSkills();
}

document.getElementById("melr").oninput = function () {
    document.getElementById("melrOut").value = document.getElementById("melr").value;
    updateSkills(); 
}
    
document.getElementById("pilr").oninput = function () {
    document.getElementById("pilrOut").value = document.getElementById("pilr").value;
    updateSkills();
}

document.getElementById("repr").oninput = function () {
    document.getElementById("reprOut").value = document.getElementById("repr").value;
    updateSkills();
}

document.getElementById("scir").oninput = function () {
    document.getElementById("scirOut").value = document.getElementById("scir").value;
    updateSkills();
}

document.getElementById("smar").oninput = function () {
    document.getElementById("smarOut").value = document.getElementById("smar").value;
    updateSkills();
}

document.getElementById("sner").oninput = function () {
    document.getElementById("snerOut").value = document.getElementById("sner").value;
    updateSkills();
}

document.getElementById("sper").oninput = function () {
    document.getElementById("sperOut").value = document.getElementById("sper").value;
    updateSkills();
}

document.getElementById("surr").oninput = function () {
    document.getElementById("surrOut").value = document.getElementById("surr").value;
    updateSkills();
}

document.getElementById("thrr").oninput = function () {
    document.getElementById("thrrOut").value = document.getElementById("thrr").value;
    updateSkills();
}

document.getElementById("unar").oninput = function () {
    document.getElementById("unarOut").value = document.getElementById("unar").value;
    updateSkills();
}


//Update Skills
function updateSkills () {
ath = document.getElementById("athr").value;
bar = document.getElementById("barr").value;
big = document.getElementById("bigr").value;
eng = document.getElementById("engr").value;
exp = document.getElementById("expr").value;
loc = document.getElementById("locr").value;
med = document.getElementById("medr").value;
mel = document.getElementById("melr").value;
pil = document.getElementById("pilr").value;
rep = document.getElementById("repr").value;
sci = document.getElementById("scir").value;
sma = document.getElementById("smar").value;
sne = document.getElementById("sner").value;
spe = document.getElementById("sper").value;
sur = document.getElementById("surr").value;
thr = document.getElementById("thrr").value;
una = document.getElementById("unar").value;

document.getElementById("skillMax").innerHTML = int - ath - bar - big - eng - exp - loc - med - mel - pil - rep - sci - sma - sne - spe - sur - thr - una;
document.getElementById("maxTag").innerHTML = maxTags - tickedCount;

if (maxTags < 0) {
document.getElementById("maxTag").innerHTML = "Error: Exceeded Maximum Tag Skills";
}


};