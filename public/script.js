// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  $('.cart-list').append('<ul id="item-list"></ul>');
  var itemsArr = [];
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].price;
    console.log(totalCost);
    itemsArr[i] = {
      name: cart[i].name,
      price : cart[i].price
    }
    // debugger;
    var source = $('#cart-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(itemsArr[i]);

    $('#item-list').append(newHTML);
  }
  $('.total').html(totalCost);


}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
  console.log(cart);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  $('.cart-list').empty();
  $('.total').html(0);
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  console.log(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

console.log('connected!!');