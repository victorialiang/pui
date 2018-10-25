/*** Global Variables **/

var cart = [];


/** Functions **/

function Product(name, picture, color, cost, quantity) {
	this.name = name;
	this.picture = picture;
	this.cost = cost;
	this.quantity = quantity;
	this.color = color;
}


function loadCart() {
	//get cart

}

function saveCart() {

}

function addToCart(product) {
	//call loadcart to get cart
	//check if product is already in cart, append new product to cart
	//call savecart


}


/*** Document Load ***/

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var harnessColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.product-section img[data-image = ' + harnessColor + ']').addClass('active');
      $(this).addClass('active');
  });

  // $("#button-storage").click(function() {
  // 	var name = $(".productName")[0].innerText;
  // 	var cost = $(".page-price")[0].innerText;
  // 	var color = $(".color-choose input").attr('data-image');
  // 	var picture = $("product-section img[data-image=" + color + ']');
  // 	var quantity = 1;

  // 	var product = new Product(name, picture, color, cost, quantity);
  // 	addToCart(product);
  // });
 
});
