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
		$("#cart-number").text("(0)");
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

// $(document).on("click", ".delete-item", function() {
// 	localStorage.removeItem($(this).parent());
// 	removeFromCart($(this).parent());
//     $(this).parent().remove();
// });

$(document).ready(function() {

	var loadedCart = loadCart();
	var i=0;
	var len=loadedCart.length;
	var text="";

	$("#cart-number").text("(" + len + ")");

	for(;i<len;i++){
		text += "<li> <div class='pname'> " + loadedCart[i].name + "</div> <div class='pcolor'> " + loadedCart[i].color + "</div> <div class='psize'>" +loadedCart[i].size+ "</div> <div class='pcost'> "+ loadedCart[i].cost + "</div> <button class='delete-item'>REMOVE</button> </li>";
	}

	// text = text.replace(/\n/g, "<br />");

	$("#cart-content").html(text);

	if(text===""){
		$("#cart-content").html("There are no items in your cart.");
	}



 
  $('.color-choose input').on('click', function() {
      color = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.product-section img[data-image = ' + color + ']').addClass('active');
      $(this).addClass('active');
      if (color==="red"){
      	$(".page-price").html("$50");
      }
      if (color==="green"){
      	$(".page-price").html("$70");
      }
      if (color==="blue"){
      	$(".page-price").html("$99");
      }
      if (color==="yellow"){
      	$(".page-price").html("$50");
      }


  });


  $("#button-storage").click(function() {
  	var name = $(".productName")[0].innerText;
  	var cost = $(".page-price")[0].innerText;
  	var color = $("input[name='color']:checked").attr('id');
  	var size = $("input[name='size']:checked").attr('id');
  	var quantity = $(".quantity").val();

  	// var picture = $("product-section img[data-image=" + color + ']');
  	// var quantity = 1;

  	for(i=0;i<quantity;i++){
  		var product = new Product(name, color, size, cost);
  		addToCart(product);
  	}

  	
  });

  $(".delete-item").click(function() {
  	localStorage.removeItem($(this));
	removeFromCart($(this));
    $(this).parent().remove();
  })

  $("#clear-cart").click(function() {
  	localStorage.clear();

  	// loadCart();
  	saveCart();
  	loadCart();
  })
 
});

$(document).on("click", "#clear-cart", function() {
	localStorage.clear();

  	// loadCart();
  	saveCart();
  	loadCart();

});


