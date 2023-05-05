// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

let loginbtn = document.getElementById("login");
let signupbtn = document.getElementById("signup");

loginbtn.addEventListener('click', logFunc);
signupbtn.addEventListener('click', signupFunc);

function logFunc() {
    console.log("login button is clicked");
    window.location.href = "./login/index.html";
}
function signupFunc() {
    console.log("signup button is clicked");
    window.location.href = "./signup/index.html";
}
