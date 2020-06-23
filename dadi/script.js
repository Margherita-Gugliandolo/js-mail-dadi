//js-dadi creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.

var tiraDadi = document.getElementById('btn');
tiraDadi.addEventListener ('click', function () {
  var dado1;
  var dado2;
  var n = 0;
  var m = 0;

for (var i = 0; i < 3; i++) {
  dado1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  dado2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

  if (dado1 > dado2){
    m++;
    if(m > n){
    console.log("vince dado 1");
    }
  } else if (dado2 > dado1){
    n++;
    if(n > m) {
      console.log ("vince dado 2");
    }
  } else {
    console.log ("parità");
}


console.log(m);
console.log(n);
})
