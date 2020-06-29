var body = document.body;

function disableScroll() {
  var pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  var pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top:pagePosition, left:0});
}

var button = document.querySelector('.b-buttonjs');
var model = document.querySelector('.b-form-blockJs');
var overlay = document.querySelector('.js-overlay-modal');
var close = document.querySelector('.b-form-block__close');
var body = document.body

  button.onclick = function () {
    model.style.display = "block";
    overlay.style.display = "block";
    disableScroll();
  }


 
var model = document.querySelector('.b-form-blockJs');
var overlay = document.querySelector('.js-overlay-modal');
var close = document.querySelector('.b-form-block__close');
var mobilbutton = document.querySelector('.b-buttonjs-mobil');

 mobilbutton.onclick = function() {
  model.style.display = "block";
  overlay.style.display = "block";
  disableScroll();
 }

 close.onclick = function() {
  model.style.display = "none";
  overlay.style.display = "none";
  enableScroll();
 }

var mobilButton = document.querySelector('.b-buttonjs-footer');
var model = document.querySelector('.b-form-blockJs');
var overlay = document.querySelector('.js-overlay-modal');
var close = document.querySelector('.b-form-block__close');



 mobilButton.onclick = function () {
  model.style.display = "block";
  overlay.style.display = "block";
  disableScroll();
 }

 close.onclick = function() {
  model.style.display = "none";
  overlay.style.display = "none";
  enableScroll();
 }


 var aboutMe = document.querySelector('.b-aboutme-modal');
 var buttonMe = document.querySelector('.about-me__js');
 var close = document.querySelector('.b-aboutme-modal__close');

 buttonMe.onclick = function (event) {
   aboutMe.style.display = "block";
   overlay.style.display = "block";
   disableScroll();
   event.preventDefault();
 }

 close.onclick = function () {
  aboutMe.style.display = "none";
  overlay.style.display = "none";
  enableScroll();
 };

var model = document.querySelector('.b-form-blockJs');
var aboutMe = document.querySelector('.b-aboutme-modal');
var buttonPrice = document.querySelector('.link-price-js');
var priceModal = document.querySelector('.b-price');
var close = document.querySelector('.b-button-price-js');


  buttonPrice.onclick = function(event) {
    priceModal.style.display = "block";
    overlay.style.display = "block";
    disableScroll();
    event.preventDefault();
  }

  close.onclick = function () {
  priceModal.style.display = "none";
  overlay.style.display = "none";
  enableScroll();
 };

 

var button = document.querySelector('.link__js');
var modalOrder = document.querySelector('.b-form-block-order-js');
var overlay = document.querySelector('.js-overlay-modal');
var close = document.querySelector('.b-form-order__close');

  button.onclick = function () {
    modalOrder.style.display = "block";
    overlay.style.display = "block";
    disableScroll();
  }

  close.onclick = function() {
  modalOrder.style.display = "none";
  overlay.style.display = "none";
  enableScroll();
 }

  overlay.onclick = function () {
    model.style.display = "none";
    aboutMe.style.display = "none";
    priceModal.style.display = "none";
    overlay.style.display = "none";
    modalOrder.style.display = "none";
    enableScroll();
  }

 var buttonMobile = document.querySelector('.b-burger-boxjs');
 var menuMobil = document.querySelector('.b-nav--mobil');
 var closeMenu = document.querySelector('.b-close-burger');
 var linkServices = document.querySelector('.services-js');
 var linkPortfolio = document.querySelector('.portfolio-js');
 var linkCost = document.querySelector('.cost-js')
 var overlayMobil = document.querySelector('.overlay');


    buttonMobile.onclick = function() {
      menuMobil.style.display = "flex";
      closeMenu.style.display = "block";
      disableScroll();

    }

    closeMenu.onclick = function() {
      menuMobil.style.display = "none";
      overlayMobil.style.display = "none";
      enableScroll();
    }


function myFunction(x) {
  if (x.matches) {
     linkServices.onclick = function() {
      menuMobil.style.display = "none";
      overlayMobil.style.display = "none";
       enableScroll();
    }

    linkPortfolio.onclick = function() {
      menuMobil.style.display = "none";
       enableScroll();
    }
     
    linkCost.onclick = function () {
      menuMobil.style.display = "none";
       enableScroll();
    }
  } 

  else {

     linkServices.onclick = function() {
      menuMobil.style.display = "block";
    }

     linkPortfolio.onclick = function() {
      menuMobil.style.display = "block";
    }
 
    linkCost.onclick = function () {
      menuMobil.style.display = "block";
    }
  }
}

var x = window.matchMedia("(max-width: 1361px)")
  myFunction(x) 
    x.addListener(myFunction)


  
var bracket = document.querySelector('.b-advertising__icon-one');
  bracket.classList.add('b-advertising__icon--bracket');

var lattice = document.querySelector('.b-advertising__icon-free');
    lattice.classList.add('b-advertising__icon--lattice');

var div = document.querySelector('.b-advertising__icon-two');
    div.classList.add('b-advertising__icon--div');

var closing = document.querySelector('.b-advertising__icon-four');
    closing.classList.add('b-advertising__icon--closing');

var divTwo = document.querySelector('.b-advertising__icon-five');
    divTwo.classList.add('b-advertising__icon--div-two');

var closingTwo = document.querySelector('.b-advertising__icon-six');
    closingTwo.classList.add('b-advertising__icon--closing-two');


function scrollTo(element) {
  window.scroll({
    left:0,
    top:element.offsetTop,
    behavior: "smooth"
  })
}

var services = document.querySelector('.b-skills')
   linkServices.addEventListener('click', () => {
    scrollTo(services);
})

var portfolio = document.querySelector('.b-examples');
  linkPortfolio.addEventListener('click', () => {
  scrollTo(portfolio);

  })

  var cost = document.querySelector('.link-price');
  linkCost.addEventListener('click', () => {
  scrollTo(cost)

  })

  $(window).resize(function() {
    if ($(window).width() > 1360) {
      $('.b-nav--mobil').show()
      }
      
    else {
       $('.b-nav--mobil').hide()
    }
})


var submitName = document.querySelector('.b-form-block__name');
var submitNumber = document.querySelector('.b-form-block__number');

function fank() {
  if (submitName.value && submitNumber.value) {
    window.location.assign("fank.html")

  }
}









