let loginbtn = document.getElementById("login");
loginbtn.addEventListener('click', loginFunc);

let cartLink = document.getElementById("cart-link");
let profileLink = document.getElementById("profile-link");
cartLink.style.pointerEvents = "none";
profileLink.style.pointerEvents = "none";

if (localStorage.getItem("currUser")) {
    let currUser = JSON.parse(localStorage.getItem("currUser"));
    let email = currUser.Email;
    console.log(email);
    let pass = currUser.Password;
    console.log(pass);
    document.getElementById("email").value = email;
    document.getElementById("password").value = pass;
    cartLink.style.pointerEvents = "auto";
    profileLink.style.pointerEvents = "auto";
    localStorage.removeItem("currUser");
}

function loginFunc() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let flag = false;
    if (localStorage.getItem("myArr")) {
        let Arr = JSON.parse(localStorage.getItem("myArr"));
        Arr.forEach((item) => {
            if (item.Email == email && item.Password == pass) {
                flag = true;
                // console.log("email is", item.Email);
                // console.log("pass is", item.Password);
                let currUser = {
                    firstName:`${item.firstName}`,
                    lastName:`${item.lastName}`,
                    currName: `${item.firstName}${item.lastName}`,
                    currEmail: item.Email,
                    currPass: item.Password,
                    token: tokenGenerator()
                };
                localStorage.setItem("currUser", JSON.stringify(currUser));
                window.location.href = "../shop/index.html";
            }
        });
        if(flag == false){
            window.location.href = "../signup/index.html";
        }
        

    } else {
        window.location.href = "../signup/index.html";
    }
}

function tokenGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}