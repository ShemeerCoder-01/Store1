let dataArr = [];
let menArr = [];
let womenArr = [];
let jewwlArr = [];
let elecArr = [];
let cartArr = [];
let mainCont = document.getElementById("container");
let container = document.getElementById("items");
let container1 = document.getElementById("items1");
let container2 = document.getElementById("items2");
let container3 = document.getElementById("items3");
let allTab = document.getElementById("all");
let menTab = document.getElementById("men");
let womenTab = document.getElementById("women");
let jewelTab = document.getElementById("jewel");
let electronicTab = document.getElementById("electronic");
let ratingValue = document.getElementById("range");
let zero_25 = document.getElementById("0-25");
let twentyfy_50 = document.getElementById("25-50");
let fifty_100 = document.getElementById("50-100");
let hundredAbove = document.getElementById("100on");
let search = document.getElementById("search");
let zero_flag = false;
let twentyfy_flag = false;
let fifty_flag = false;
let hundred_flag = false;
let abovehundred_flag = false;
let cart_flag = false;

search.addEventListener('input', () => {
  let searchArr = dataArr.filter((item) => {
    return item.title.toLowerCase().includes(search.value.toLowerCase());
  });
  render(searchArr);
});

zero_25.addEventListener("click", () => {
  if (zero_flag == false) {
    let uptoTwentyfy = dataArr.filter((item) => {
      return item.price >= 0 && item.price < 25;
    });
    zero_flag = true;
    render(uptoTwentyfy);
  } else {
    zero_flag = false;
    render(dataArr);
  }

});


twentyfy_50.addEventListener("click", () => {
  if (fifty_flag == false) {
    let uptofifty = dataArr.filter((item) => {
      return item.price >= 25 && item.price < 50;
    });
    fifty_flag = true;
    render(uptofifty);
  } else {
    fifty_flag = false;
    render(dataArr);
  }
});


fifty_100.addEventListener("click", () => {
  if (hundred_flag == false) {
    let uptohundred = dataArr.filter((item) => {
      return item.price >= 50 && item.price < 100;
    });
    hundred_flag = true;
    render(uptohundred);
  } else {
    hundred_flag = false;
    render(dataArr);
  }
});

hundredAbove.addEventListener("click", () => {
  if (abovehundred_flag == false) {
    let aboveHundred = dataArr.filter((item) => {
      return item.price > 100;
    });
    abovehundred_flag = true;
    render(aboveHundred);
  } else {
    abovehundred_flag = false;
    render(dataArr);
  }
});


ratingValue.addEventListener("input", () => {

  let ratingSortedarr = dataArr.filter((item) => {
    return item.rating.rate >= ratingValue.value;
  });
  render(ratingSortedarr);
});

menTab.addEventListener('click', () => {
  menTab.classList.add("active");
  womenTab.classList.remove("active");
  jewelTab.classList.remove("active");
  electronicTab.classList.remove("active");
  allTab.classList.remove("active");
  render(menArr);
});

womenTab.addEventListener('click', () => {
  womenTab.classList.add("active");
  menTab.classList.remove("active");
  jewelTab.classList.remove("active");
  electronicTab.classList.remove("active");
  allTab.classList.remove("active");
  render(womenArr);
});

jewelTab.addEventListener('click', () => {
  jewelTab.classList.add("active");
  womenTab.classList.remove("active");
  menTab.classList.remove("active");
  electronicTab.classList.remove("active");
  allTab.classList.remove("active");
  render(jewwlArr);
});

electronicTab.addEventListener('click', () => {
  electronicTab.classList.add("active");
  womenTab.classList.remove("active");
  menTab.classList.remove("active");
  allTab.classList.remove("active");
  jewelTab.classList.remove("active");
  render(elecArr);
});

allTab.addEventListener('click', () => {
  allTab.classList.add("active");
  jewelTab.classList.remove("active");
  womenTab.classList.remove("active");
  menTab.classList.remove("active");
  electronicTab.classList.remove("active");
  render(dataArr);
});

function render(Arr) {
  mainCont.innerHTML = "";
  Arr.forEach((item) => {
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
    cartbtn.setAttribute('id', `btn${item.id}`);
    cartbtn.setAttribute('onclick', `myCard(${item.id})`);
    cartbtn.innerHTML = "Add To Cart";
    card.appendChild(img);
    card.appendChild(card_info);
    card.appendChild(cartbtn);
    mainCont.appendChild(card);
  });

}

if (localStorage.getItem("currUser")) {
  let currUser = JSON.parse(localStorage.getItem("currUser"));
  document.getElementById("welcomeMsg").innerHTML = ` ${currUser.currName}...`;
  // document.getElementById("welcomeMsg").style.color ="whitesmoke";
} else {
  window.location.href = "../login/index.html";
}



async function getData() {
  let response = await fetch("https://fakestoreapi.com/products");
  dataArr = await response.json();
  // localStorage.setItem("productArr",JSON.stringify(dataArr));
  console.log(dataArr);
  displayData(dataArr);
}

function displayData(dataArr) {
  container.innerHTML = "";
  container1.innerHTML = "";
  container2.innerHTML = "";
  container3.innerHTML = "";
  dataArr.forEach((item) => {
    if (item.category == "men's clothing") {
      menArr.push(item);
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
      cartbtn.setAttribute('id', `btn${item.id}`);
      cartbtn.setAttribute('onclick', `myCard(${item.id})`);
      cartbtn.innerHTML = "Add To Cart";
      card.appendChild(img);
      card.appendChild(card_info);
      card.appendChild(cartbtn);
      container.appendChild(card);
    }
    else if (item.category == "women's clothing") {
      womenArr.push(item);
      let card = document.createElement("div");
      card.setAttribute('class', "item");
      let img = document.createElement("img");
      img.setAttribute('id', "img");
      img.src = `${item.image}`;
      let card_info = document.createElement("div");
      card_info.setAttribute('class', "info");
      let info_row = document.createElement("div");
      info_row.setAttribute('class', "row");
      let price = document.createElement("div");
      price.setAttribute('class', "price");
      price.innerHTML = `$ ${item.price}`;
      let title = document.createElement("strong");
      title.setAttribute('class', "title");
      title.innerHTML = `${item.title}`;
      let rating = document.createElement("p");
      rating.setAttribute('class', "rating");
      rating.innerHTML = `Rating : ${item.rating.rate}`;
      info_row.appendChild(title);
      info_row.appendChild(rating);
      info_row.appendChild(price);
      card_info.appendChild(info_row);
      let cartbtn = document.createElement("button");
      cartbtn.setAttribute('class', "addbtn");
      cartbtn.setAttribute('id', `btn${item.id}`);
      cartbtn.setAttribute('onclick', `myCard(${item.id})`);
      cartbtn.innerHTML = "Add To Cart";
      card.appendChild(img);
      card.appendChild(card_info);
      card.appendChild(cartbtn);
      container1.appendChild(card);

    }
    else if (item.category == "jewelery") {
      jewwlArr.push(item);
      let card = document.createElement("div");
      card.setAttribute('class', "item");
      let img = document.createElement("img");
      img.setAttribute('id', "img");
      img.src = `${item.image}`;
      let card_info = document.createElement("div");
      card_info.setAttribute('class', "info");
      let info_row = document.createElement("div");
      info_row.setAttribute('class', "row");
      let price = document.createElement("div");
      price.setAttribute('class', "price");
      price.innerHTML = `$ ${item.price}`;
      let title = document.createElement("p");
      title.setAttribute('class', "title");
      title.innerHTML = `${item.title}`;
      let rating = document.createElement("div");
      rating.setAttribute('class', "rating");
      rating.innerHTML = `Rating : ${item.rating.rate}`;
      info_row.appendChild(title);
      info_row.appendChild(rating);
      info_row.appendChild(price);
      card_info.appendChild(info_row);
      let cartbtn = document.createElement("button");
      cartbtn.setAttribute('class', "addbtn");
      cartbtn.setAttribute('id', `btn${item.id}`);
      cartbtn.setAttribute('onclick', `myCard(${item.id})`);
      cartbtn.innerHTML = "Add To Cart";
      card.appendChild(img);
      card.appendChild(card_info);
      card.appendChild(cartbtn);
      container2.appendChild(card);
    }
    else if (item.category == "electronics") {
      elecArr.push(item);
      let card = document.createElement("div");
      card.setAttribute('class', "item");
      let img = document.createElement("img");
      img.setAttribute('id', "img");
      img.src = `${item.image}`;
      let card_info = document.createElement("div");
      card_info.setAttribute('class', "info");
      let info_row = document.createElement("div");
      info_row.setAttribute('class', "row");
      let price = document.createElement("div");
      price.setAttribute('class', "price");
      price.innerHTML = `$ ${item.price}`;
      let title = document.createElement("p");
      title.setAttribute('class', "title");
      title.innerHTML = `${item.title}`;
      let rating = document.createElement("div");
      rating.setAttribute('class', "rating");
      rating.innerHTML = `Rating : ${item.rating.rate}`;
      info_row.appendChild(title);
      info_row.appendChild(rating);
      info_row.appendChild(price);
      card_info.appendChild(info_row);
      let cartbtn = document.createElement("button");
      cartbtn.setAttribute('class', "addbtn");
      cartbtn.setAttribute('id', `btn${item.id}`);
      cartbtn.setAttribute('onclick', `myCard(${item.id})`);
      cartbtn.innerHTML = "Add To Cart";
      card.appendChild(img);
      card.appendChild(card_info);
      card.appendChild(cartbtn);
      container3.appendChild(card);

    }

  });
}

getData();


// function myCard(id) {
//   if (cart_flag == false) {
//     cart_flag = true;
//     document.getElementById(`btn${id}`).innerHTML = "Added To Cart";
//     if (localStorage.getItem("cart")) {
//       cartArr = JSON.parse(localStorage.getItem("cart"));
//       localStorage.removeItem("cart");
//       cartArr.push(dataArr[id - 1]);
//       localStorage.setItem("cart", JSON.stringify(cartArr));
//     }
//     else {
//       cartArr.push(dataArr[id - 1]);
//       localStorage.setItem("cart", JSON.stringify(cartArr));
//     }
//   }
//   else {
//     cart_flag = false;
//     document.getElementById(`btn${id}`).innerHTML = "Add To Cart";
//     cartArr = JSON.parse(localStorage.getItem("cart"));
//     localStorage.removeItem("cart");
//     cartArr.splice(id - 1, 1);
//     localStorage.setItem("cart", JSON.stringify(cartArr));
//   }
// }


function myCard(id) {
  console.log(id);
  let btnVal = document.getElementById(`btn${id}`).innerHTML.trim();
  if (!localStorage.getItem("cart")) {
    document.getElementById(`btn${id}`).innerHTML = "Added To Cart";
    cartArr.push(dataArr[id-1]);
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }
  else if (localStorage.getItem("cart") && btnVal == "Add To Cart") {
    document.getElementById(`btn${id}`).innerHTML = "Added To Cart";
    cartArr = JSON.parse(localStorage.getItem("cart"));
    localStorage.removeItem("cart");
    cartArr.push(dataArr[id - 1]);
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }
  else if (localStorage.getItem("cart") && btnVal == "Added To Cart") {
    document.getElementById(`btn${id}`).innerHTML = "Add To Cart";
    cartArr = JSON.parse(localStorage.getItem("cart"));
    let idx = -1;
    if(id == 0){
      cartArr.splice(0,1);
    }
    for(let i = 0; i < cartArr.length; i++){
      if(cartArr[i].id == id ){
        idx = i;
        break;
      }
    }
    cartArr.splice(idx,1);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }

}