const mailList = ["gino@gmail.com", "dino@gmail.com", "paolo@gmail.com", "riso@gmail.com", "gianni@gmail.com", "lino@gmail.com"];

const inputMail = prompt("Inserisci la tua email");

for (let i = 0; i < mailList.length; i++) {
    if (inputMail === mailList[i]) {
        alert("accesso consentito")
    } 

    if (inputMail !== mailList[i]) {
        alert("email non valida")
    }
}