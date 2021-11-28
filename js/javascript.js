let Name = prompt("Adınızı Giriniz");
let myName= document.querySelector("#myName")

myName.innerHTML = `${Name.toUpperCase()}!`


function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}


const gun = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[gun.getDay()];


setInterval(tarihSaat, 1000); 
