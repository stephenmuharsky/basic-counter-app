// document.getElementById("count-el").innerText=4;
//
// firstBatch = 5;
//
// let count = firstBatch;
//
// console.log("Number of passengers: %s", count);
//
// myAge = 24;
// humanDogRatio = 7;
// myDogAge = myAge * humanDogRatio;
// console.log("My dog age: %i", myDogAge)

let count = Number(document.getElementById("count-el").innerText);

function increment(){
    count += 1;
    console.log(count);
    document.getElementById("count-el").innerText = count;

}

function save(){
    document.getElementById("previous-entries").textContent+= (" %s" , count + " - ")
    document.getElementById("count-el").innerText = 0;
    count = 0;
}