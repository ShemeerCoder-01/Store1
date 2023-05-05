let signupbtn = document.getElementById("signup");
let arr=[];
let id;
signupbtn.addEventListener('click', signbtnFunc);

let cartLink = document.getElementById("cart-link");
let profileLink = document.getElementById("profile-link");
cartLink.style.pointerEvents = "none";
profileLink.style.pointerEvents = "none";

if(localStorage.getItem("myArr")){
    arr = JSON.parse(localStorage.getItem("myArr"));
}


function signbtnFunc() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confPass").value;
    let flag = false;
    arr.forEach((item)=>{
        if(item.Email == email){
            flag = true;
            return;
        }
    });
    if(fName =='' || lName =='' || email =='' || pass =='' || confpass ==''){
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Please fill in all the fields...";
        document.getElementById("msg").style.color = "red";
        return;
    }
    else if(pass != confpass){
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Password Mismatch...";
        document.getElementById("msg").style.color = "red";
        return;

    }
    else if(flag == true){
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Email Should be unique...";
        document.getElementById("msg").style.color = "red";
        return;

    }
    else{
        document.getElementById("msg").style.display = "none";
    }

   
    let user = {
        Id: arr.length,
        firstName: fName,
        lastName: lName,
        Email: email,
        Password: pass
    };
    arr.push(user);
    console.log(arr);
    localStorage.setItem("currUser",JSON.stringify(user));
    localStorage.setItem("myArr", JSON.stringify(arr));

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confPass").value = "";
    window.location.href = "../login/index.html";

    if (localStorage.getItem("myArr")) {
        let Arr = JSON.parse(localStorage.getItem("myArr"));
        Arr.forEach((item) => {
            if (item.Email == email && item.Password == pass) {
                cartLink.style.pointerEvents = "auto";
                profileLink.style.pointerEvents = "auto";
            }
        });
    
    }
}

if (localStorage.getItem("myArr")) {
    let Arr = JSON.parse(localStorage.getItem("myArr"));
    Arr.forEach((item) => {
        if (item.Email == email && item.Password == pass) {
            cartLink.style.pointerEvents = "auto";
            profileLink.style.pointerEvents = "auto";
        }
    });

}


