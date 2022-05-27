const randomNumberUser = Math.floor(Math.random() * 6 + 1)
const randomNumberIa = Math.floor(Math.random() * 6 + 1)


console.log(randomNumberUser);
console.log(randomNumberIa);

if (randomNumberUser < randomNumberIa) {
    alert("Il computer vince")
} else if (randomNumberUser > randomNumberIa) {
    alert("Il giocatore vince")
} else {
    alert("Pareggio")
}