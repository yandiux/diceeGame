let randomNumber1 = Math.random() *6;
randomNumber1 =Math.floor(randomNumber1) +1
console.log()

let randomNumber2 = Math.random() *6;
randomNumber2 =Math.floor(randomNumber2) +1
console.log()


document.querySelector(".img1").setAttribute('src', `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute('src', `./images/dice${randomNumber2}.png`);


