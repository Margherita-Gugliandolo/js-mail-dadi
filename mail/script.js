//mail far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.

var mailUtente = prompt("scrivi la tua mail");

var mail = ["maria.bianchi@gmail.com", "mario.rossi@gmail.com", "m.bianchi@yahoo.it", "m.rossi@yahoo.it", "marior@hotmail.it", "mariab@hotmail.it"];
var mailFound = false;

mail.push("ciaomamma@guardacomemidiverto.boh");

for (var i = 0; i < mail.length; i++){
  if(mailUtente == mail[i]) {
    mailFound = true;
  }
}

if (mailFound == true) {
  document.getElementById('utente').innerHTML = "Benvenuto";
} else{
  document.getElementById('utente').innerHTML = "La mail non è valida";
}
