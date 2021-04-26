var insertName = prompt('inserisci nome');
var nome = insertName;

var insertSur = prompt('inserisci cognome');
var cognome = insertSur;

var insertcolor = prompt('inserisci colore');
var colore = insertcolor;

document.getElementById("yourpass").innerHTML = ( nome + cognome + colore + 21 );

document.getElementById("nom").innerHTML = (nome);
document.getElementById("cogn").innerHTML = (cognome);
document.getElementById("color").innerHTML = (colore);