/* Creare due div: uno conterrà numeri dispari di colore rosso e l'altro
conterrà i numeri pari di colore verde. Ad ogni click di un bottone
chiedere all'API un numero, se è dispari metterlo nel blocco dispari
se è pari metterlo nel blocco pari. */

var url = "https://flynn.boolean.careers/exercises/api/random/int"

$(document).ready(function(){


$(".but").on("click", function(){
  $.ajax({
  url : url,
  method : "GET",
  success : function (data,stato) {
      var risultato = data.response;
      if (risultato % 2 === 0) {
        $(".pari").append(risultato + "<br>");
      } else {
        $(".dispari").append(risultato + "<br>");
      }
    },
  error : function (richiesta,stato,errori) {
  alert("E' avvenuto un errore.");
  }
  });
  });




});
