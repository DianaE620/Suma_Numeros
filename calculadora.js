$(document).ready(function(){

  var items_drag = 0;

  function Card(number){
    this.number = number
  }

  function Table(){
    
  }

  Table.prototype.addNumbers = function(array_cards){
    for(x=0; x < array_cards.length; x++){
      $("#cardPile").append("<div class='num'>"+array_cards[x].number+"</div>")
    }
  }

  function Board(){

  }

  Board.prototype.makeSum = function(){

    var array_numbers = [];
    var suma = 0;

    $('#cardSlots div').each(function(){
      numero = $(this).text();
      array_numbers.push(new Card(numero));
    });

    for(i=0 ; i < array_numbers.length; i++){
      suma += Number(array_numbers[i].number)
    }

    return suma

  }



  var array_cards = []

  for(i=0 ; i <= 9 ; i++){
    array_cards.push(new Card(i));
  }

    tablero = new Table();

    tablero.addNumbers(array_cards);


  $("#cardPile > div").draggable({
   helper: "clone"
  });

  $("#cardSlots").droppable({
    accept: ".num",
    drop: function(event, ui){
      var item = ui.draggable.clone();
      $(this).append(item);
      items_drag++
      
      resultado = new Board();
      resultado = resultado.makeSum();

      $("#total_sum").text(resultado);


      if(items_drag == 10){
        //$("#cardSlots").droppable({ disabled: true });
        $("#cardSlots").droppable('disable');
      }
    }
  });



  /*
  $("#cardSlots").droppable({
    drop: function(event, ui){
      $(this).clone().appendTo( "#cardSlots" );
    }
  });
  */
  
  /*
  $("#cardPile div").click(function(){

    $(this).draggable().clone().appendTo( "#cardSlots" );
    var numero = $(this).attr("number");
    console.log(numero);

  })
  */

});