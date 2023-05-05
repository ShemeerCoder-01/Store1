let container = document.getElementById("cart-cont");
let billCont = document.getElementById("cart-items");
let cartArr = [];
let idx = -1;


function displayCart() {
  let sum = 0;
  if (localStorage.getItem("cart")) {
    cartArr = JSON.parse(localStorage.getItem("cart"));
    container.innerHTML = "";
    billCont.innerHTML = "";
    cartArr.forEach((item) => {
      sum += Math.round(item.price);
      let card = document.createElement("div");
      card.setAttribute('class', "item");
      let img = document.createElement("img");
      img.setAttribute('id', "img");
      img.src = `${item.image}`;
      let card_info = document.createElement("div");
      card_info.setAttribute('class', "info");
      let info_row = document.createElement("div");
      info_row.setAttribute('class', "row");
      let title = document.createElement("p");
      title.setAttribute('class', "title");
      title.innerHTML = `${item.title}`;
      let price = document.createElement("div");
      price.setAttribute('class', "price");
      price.innerHTML = `<strong>$</strong> ${item.price}`;
      let rating = document.createElement("div");
      rating.setAttribute('class', "rating");
      rating.innerHTML = `Rating : ${item.rating.rate}`;
      info_row.appendChild(title);
      info_row.appendChild(rating);
      info_row.appendChild(price);
      card_info.appendChild(info_row);
      let cartbtn = document.createElement("button");
      cartbtn.setAttribute('class', "addbtn");
      cartbtn.setAttribute('onclick', `removeItem(${item.id})`);
      cartbtn.innerHTML = "Remove From Cart";
      card.appendChild(img);
      card.appendChild(card_info);
      card.appendChild(cartbtn);
      container.appendChild(card);

      let cartItem = document.createElement("div");
      cartItem.setAttribute('class', "cartItems");
      let itemName = document.createElement("p");
      itemName.setAttribute('class', "cartItemName");
      itemName.innerHTML = `${item.title}`;
      let hyphen = document.createElement("span");
      hyphen.innerHTML = `- `;
      let itemPrice = document.createElement("span");
      itemPrice.setAttribute('class', "cartItemPrice");
      itemPrice.innerHTML = `${item.price}`;
      cartItem.appendChild(itemName);
      cartItem.appendChild(hyphen);
      cartItem.appendChild(itemPrice);
      billCont.appendChild(cartItem);
      // billCont.appendChild(itemName);
      // billCont.appendChild(itemPrice);

    });
    let hr = document.createElement("hr");
    billCont.appendChild(hr);
    let Total = document.createElement("div");
    Total.setAttribute('id', "total");
    let tot = document.createElement("p");
    tot.innerHTML = `Total`;
    let amt = document.createElement("p");
    amt.innerHTML = `${sum}.00`;
    Total.appendChild(tot);
    Total.appendChild(amt);
    billCont.appendChild(Total);
    let hr1 = document.createElement("hr");
    billCont.appendChild(hr1);

    let checkoutbtn = document.createElement("button");
    checkoutbtn.setAttribute('id', "checkoutbtn");
    checkoutbtn.innerHTML = "Click To Checkout";
    checkoutbtn.addEventListener('click',()=>{
      localStorage.removeItem("cart");
      localStorage.setItem('Total',JSON.stringify(sum));
      window.location.href = "../razorpay/index.html";
    });
    billCont.appendChild(checkoutbtn);

  }
  
}
displayCart();


function removeItem(id) {
  cartArr = JSON.parse(localStorage.getItem("cart"));
  localStorage.removeItem("cart");
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == id) {
      idx = i;
      break;
    }
  }
  cartArr.splice(idx, 1);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayCart();
}