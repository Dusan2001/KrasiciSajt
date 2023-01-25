//Nav bar responsive 
//hamburger su 3 linije, 3 diva za navbar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var adults = parseInt(document.querySelector('#adults').value);
  var children = parseInt(document.querySelector('#children').value);
  var checkin = new Date(document.querySelector('#checkin').value);
  var checkout = new Date(document.querySelector('#checkout').value);
  var pricePerDayAdults = 10;
  var pricePerDayChildren = 5;

  if(checkin < new Date()){
      alert("Datume rezervacije ne moze biti u proslosti!");
      return;
  }
  if(checkout < new Date()){
      alert("Datume rezervacije ne moze biti u proslosti!");
      return;
  }
  var days = (checkout - checkin) / (1000 * 60 * 60 * 24);
  var totalPrice = (adults * pricePerDayAdults * days) + (children * pricePerDayChildren * days);

  var message = 'Broj Odraslih: ' + adults + '\nBroj Dece: ' + children + '\nDatum Dolaska: ' + checkin.toDateString() + '\nDatum Odlaska: ' + checkout.toDateString() + '\nUkupna Cena: $' + totalPrice;

  alert(message);
});


