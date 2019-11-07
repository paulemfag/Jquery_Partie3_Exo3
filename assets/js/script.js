$(function() {
  var minNumber = 1; // le minimum
  var maxNumber = 100; // le maximum
  var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
  alert(randomnumber)
    $('button').click(function(){
      var Nom = $('#result').val()
      if (Nom < randomnumber){
        $('#sp').html('Plus');
      }
      else if (Nom > randomnumber){
        $('#sp').html('Moins');
      }
      else if (Nom == randomnumber){
        $('#sp').html('Egal');
      }
  })
})
