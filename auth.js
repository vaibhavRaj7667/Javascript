const mycheckbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visa");
const upi = document.getElementById("upi");
const master = document.getElementById("master");
const card = document.getElementById("card");
const para1 = document.getElementById("p1");
const para2 = document.getElementById("p2");
const mysubmit = document.getElementById("mysubmit");

mysubmit.onclick = function() {
    if (mycheckbox.checked) { // Corrected property name
        para1.textContent = "You are subscribed";
    } else {
        para2.textContent = "You are not subscribed";
    }

    if(visa.checked){
        para2.textContent="mode is visa"
    }
    else if(master.checked){
        para2.textContent="mode is master card"
    }
};

console.log("hello")