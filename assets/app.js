$('#psychicContent').hide();
$('#crystalContent').hide();
$('#triviaContent').hide();
$('#gifContent').hide();
$('#trainContent').hide();
$('#brewContent').hide();


$('#psychic').on('click', function(){
    $('#psychicContent').show();
    $('#crystalContent').hide();
    $('#triviaContent').hide();
    $('#gifContent').hide();
    $('#trainContent').hide();
    $('#brewContent').hide();
})

$('#crystal').on('click', function(){
    $('#psychicContent').hide();
    $('#crystalContent').show();
    $('#triviaContent').hide();
    $('#gifContent').hide();
    $('#trainContent').hide();
    $('#brewContent').hide();
})

$('#trivia').on('click', function(){
    $('#psychicContent').hide();
    $('#crystalContent').hide();
    $('#triviaContent').show();
    $('#gifContent').hide();
    $('#trainContent').hide();
    $('#brewContent').hide();
})

$('#gif').on('click', function(){
    $('#psychicContent').hide();
    $('#crystalContent').hide();
    $('#triviaContent').hide();
    $('#gifContent').show();
    $('#trainContent').hide();
    $('#brewContent').hide();
})

$('#train').on('click', function(){
    $('#psychicContent').hide();
    $('#crystalContent').hide();
    $('#triviaContent').hide();
    $('#gifContent').hide();
    $('#trainContent').show();
    $('#brewContent').hide();
})

$('#brew').on('click', function(){
    $('#psychicContent').hide();
    $('#crystalContent').hide();
    $('#triviaContent').hide();
    $('#gifContent').hide();
    $('#trainContent').hide();
    $('#brewContent').show();
})

var config = {
    apiKey: "AIzaSyAn4sj_mwo1UpEcemFjV24AV-XuvDmJnDc",
    authDomain: "portfolio-dfc95.firebaseapp.com",
    databaseURL: "https://portfolio-dfc95.firebaseio.com",
    projectId: "portfolio-dfc95",
    storageBucket: "portfolio-dfc95.appspot.com",
    messagingSenderId: "991486723416"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('.btn').on('click', function(event) {
      console.log('Clicked');
      event.preventDefault();
    var name = $('#inputName').val().trim();
    var email = $('#inputEmail1').val().trim();
    var message = $('#inputMessage').val().trim();
    var number = 0
    database.ref().push({
        name: name,
        email: email,
        message: message
    });
    $('#inputName').val('');
    $('#inputEmail1').val('');
    $('#inputMessage').val('');
  })