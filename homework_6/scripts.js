/** Functions **/

//Product object for each product to add to cart
function Product(name, color, size, cost) {
	this.name = name;
	this.color = color;
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
		$("#cart-number").text("(0)");
		return cart;
	}

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

function removeFromCart(product) {
	cart = loadCart();
	const index = cart.indexOf(product);
	if (index !== -1){
		cart.splice(index,1);
	}
	saveCart();
	loadCart();
}


/*** Document Load ***/

$(document).ready(function() {


	if (localStorage.getItem("product") == null){

	}
	else {
		var product = localStorage.getItem("product");
		if (product=="dog-harness"){
			$(".productName").html("Dog Harness");
			$(".productDesc").html("A durable, comfortable harness perfect for taking your dog out on hikes and walks.");
			$("#product-left").html("<img data-image='green' src='images/dog_harness-green.png' alt=''><img data-image='red' src='images/dog_harness-red.png' alt=''><img data-image='yellow' src='images/dog_harness-yellow.png' alt=''><img data-image='blue' class='active' src='images/dog_harness.png' alt=''>");

		}
		if (product=="cat-harness"){
			$(".productName").html("Cat Harness");
			$(".productDesc").html("A beautiful harness perfect for taking your cat out on hikes and walks whether they want to or not!");
			$("#product-left").html("<img data-image='green' src='images/cat_harness-green.png' alt=''><img data-image='red' src='images/cat_harness.png' alt=''><img data-image='yellow' src='images/cat_harness-yellow.png' alt=''><img data-image='blue' class='active' src='images/cat_harness-blue.png' alt=''>");
			
		}
		if (product=="food"){
			$(".productName").html("Food Storage Unit");
			$(".productDesc").html("A storage unit for keeping your pet's favorite snacks while on the go.");
			$("#product-left").html("<img data-image='green' src='images/attachment.png' alt=''><img data-image='red' src='images/attachment.png' alt=''><img data-image='yellow' src='images/attachment.png' alt=''><img data-image='blue' class='active' src='images/attachment.png' alt=''>");
		}
		if (product=="water"){
			$(".productName").html("Water Storage Unit");
			$(".productDesc").html("A water storage unit for keeping your pet's favorite drinks while on the go.");
			$("#product-left").html("<img data-image='green' src='images/attachment.png' alt=''><img data-image='red' src='images/attachment.png' alt=''><img data-image='yellow' src='images/attachment.png' alt=''><img data-image='blue' class='active' src='images/attachment.png' alt=''>");
		}
		if (product=="gps"){
			$(".productName").html("GPS Tracker");
			$(".productDesc").html("A GPS tracker so you never lose your pets.");
			$("#product-left").html("<img data-image='green' src='images/collar.png' alt=''><img data-image='red' src='images/collar.png' alt=''><img data-image='yellow' src='images/collar.png' alt=''><img data-image='blue' class='active' src='images/collar.png' alt=''>");
		}
		if (product=="backpack"){
			$(".productName").html("Cat Backpack");
			$(".productDesc").html("A beautiful backpack for making your cat carry your snacks.");
			$("#product-left").html("<img data-image='green' src='images/backpack.png' alt=''><img data-image='red' src='images/backpack.png' alt=''><img data-image='yellow' src='images/backpack.png' alt=''><img data-image='blue' class='active' src='images/backpack.png' alt=''>");
		}
	}


	 

	var loadedCart = loadCart();
	var i=0;
	var len=loadedCart.length;
	var text="";

	$("#cart-number").text("(" + len + ")");

	for(;i<len;i++){
		text += "<li> <div class='pname'> " + loadedCart[i].name + "</div> <div class='pcolor'> " + loadedCart[i].color + "</div> <div class='psize'>" +loadedCart[i].size+ "</div> <div class='pcost'> "+ loadedCart[i].cost + "</div> <button class='delete-item'>REMOVE</button> </li>";
	}

	$("#cart-content").html(text);

	if(text===""){
		$("#cart-content").html("There are no items in your cart.");
	}

 
 
 
  $('.color-choose input').on('click', function() {
      color = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.product-section img[data-image = ' + color + ']').addClass('active');
      $(this).addClass('active');
      


  });

  $(".product").click(function() {
  	console.log("hi");
  	var product = $(this).attr('data-image');
  	console.log(product);
  	localStorage.setItem("product", product);

  })




  $("#button-storage").click(function() {
  	var name = $(".productName")[0].innerText;
  	var cost = $(".page-price")[0].innerText;
  	var color = $("input[name='color']:checked").attr('id');
  	var size = $("input[name='size']:checked").attr('id');
  	var quantity = $(".quantity").val();

  	for(i=0;i<quantity;i++){
  		var product = new Product(name, color, size, cost);
  		addToCart(product);
  	}

  	
  });

  $(".delete-item").click(function() {
  	localStorage.removeItem($(this));
	removeFromCart($(this));
    $(this).parent().remove();
  });


  $("#clear-cart").click(function() {
  	localStorage.clear();

  	saveCart();
  	loadCart();
  });

  
 
});

$(document).on("click", "#clear-cart", function() {
	localStorage.clear();

  	saveCart();
  	loadCart();

});


