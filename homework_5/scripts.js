/** Functions **/
// localStorage.clear();

function Product(name, color, size, cost) {
	this.name = name;
	// this.picture = picture;
	this.color = color;
	// this.quantity = quantity;
	this.size = size;
	this.cost = cost;
}


function loadCart() {

	var cart;

	//get cart
	if(localStorage.getItem("savedCart")) {
		cart = localStorage.getItem("savedCart");
		var loadedCart = JSON.parse(cart);
		var i=0;
		var len=loadedCart.length;
		var text="";

		$("#cart-number").text("(" + len + ")");
		return loadedCart;

	} else {
		cart = [];
		// saveCart();
		return cart;
	}

	
	// return loadedCart;

}

function saveCart() {

	localStorage.setItem("savedCart", JSON.stringify(cart));

}

function addToCart(product) {
	//call loadcart to get cart
	//check if product is already in cart, append new product to cart
	//call savecart

	cart = loadCart();
	cart.push(product);
	saveCart();
	loadCart();


}


/*** Document Load ***/

$(document).ready(function() {

	var loadedCart = loadCart();
	var i=0;
	var len=loadedCart.length;
	var text="";

	$("#cart-number").text("(" + len + ")");

	for(;i<len;i++){
		text += loadedCart[i].name + " " + loadedCart[i].color + " " +loadedCart[i].size+ " "+ loadedCart[i].cost + "\n";
	}

	 $("#cart-content").text(text);



 
  $('.color-choose input').on('click', function() {
      harnessColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.product-section img[data-image = ' + harnessColor + ']').addClass('active');
      $(this).addClass('active');
  });


  $("#button-storage").click(function() {
  	var name = $(".productName")[0].innerText;
  	var cost = $(".page-price")[0].innerText;
  	var color = $("input[name='color']:checked").attr('id');
  	var size = $("input[name='size']:checked").attr('id');

  	// var picture = $("product-section img[data-image=" + color + ']');
  	// var quantity = 1;

  	var product = new Product(name, color, size, cost);
  	addToCart(product);


  });
 
});
