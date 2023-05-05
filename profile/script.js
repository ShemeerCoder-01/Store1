let fNamecol = document.getElementById("firstName");
let lastNamecol = document.getElementById("lastName");
let savebtn = document.getElementById("savebtn");
let passbtn = document.getElementById("passbtn");
let logoutbtn = document.getElementById("logoutbtn");
let msg = document.getElementById("msg");

if (localStorage.getItem("currUser")) {
    let data = JSON.parse(localStorage.getItem("currUser"));
    let fname = data.firstName;
    let lname = data.lastName;
    let pass = data.currPass;
    fNamecol.value = fname;
    lastNamecol.value = lname;
}
else {
    window.location.href = "../index.html";
}

savebtn.addEventListener('click', () => {
    let fname = fNamecol.value;
    let lname = lastNamecol.value;
    let idx = -1;
    console.log(fname, lname);
    let myArr = JSON.parse(localStorage.getItem("myArr"));
    let currUser = JSON.parse(localStorage.getItem("currUser"));
    myArr.forEach((item) => {
        if (item.Email == currUser.currEmail) {
            idx = item.Id;
        }
    });

    if (fname != currUser.firstName && lname != currUser.lastName) {
        localStorage.removeItem("currUser");
        localStorage.removeItem("myArr");
        currUser.firstName = fname;
        currUser.lastName = lname;
        currUser.currName = fname + lname;
        myArr[idx].firstName = fname;
        myArr[idx].lastName = lname;
        localStorage.setItem("myArr", JSON.stringify(myArr));
        localStorage.setItem("currUser", JSON.stringify(currUser));
    }
    else if (lname != currUser.lastName) {
        localStorage.removeItem("currUser");
        localStorage.removeItem("myArr");
        currUser.lastName = lname;
        currUser.currName = currUser.firstName + lname;
        myArr[idx].lastName = lname;
        localStorage.setItem("myArr", JSON.stringify(myArr));
        localStorage.setItem("currUser", JSON.stringify(currUser));
    }
    else if (fname != currUser.firstName) {
        localStorage.removeItem("currUser");
        localStorage.removeItem("myArr");
        currUser.firstName = fname;
        currUser.currName = fname + currUser.lastName;
        myArr[idx].firstName = fname;
        localStorage.setItem("myArr", JSON.stringify(myArr));
        localStorage.setItem("currUser", JSON.stringify(currUser));

    }
    fNamecol.value = "";
    lastNamecol.value = "";
    document.getElementById("nameMsg").innerText = "Name Updated Successfully...";
    document.getElementById("nameMsg").style.color = "green";

});

passbtn.addEventListener('click', () => {
    let myArr = JSON.parse(localStorage.getItem("myArr"));
    let currUser = JSON.parse(localStorage.getItem("currUser"));
    let oldPassword = document.getElementById("password").value;
    let newPassword = document.getElementById("newPass").value;
    let confPassword = document.getElementById("confPass").value;
    let idx = -1;

    myArr.forEach((item) => {
        if (item.Email == currUser.currEmail) {
            idx = item.Id;
        }
    });

    if (oldPassword != currUser.currPass) {
        msg.innerText = "Incorrect Password!!!"
        msg.style.color = "red";
    }
    else if (oldPassword == newPassword) {
        msg.innerText = "New Password shouldn't be a old Password!!!"
        msg.style.color = "red";
    }
    else if (newPassword != confPassword) {
        msg.innerText = "New Password mismatch!!!"
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Changed your Old Password Successfully..";
        msg.style.color = "green";
        document.getElementById("password").value = "";
        document.getElementById("newPass").value = "";
        document.getElementById("confPass").value = "";
        localStorage.removeItem("currUser");
        localStorage.removeItem("myArr");
        currUser.currPass = newPassword;
        myArr[idx].Password = newPassword;
        localStorage.setItem("myArr", JSON.stringify(myArr));
        localStorage.setItem("currUser", JSON.stringify(currUser))
    }


});

logoutbtn.addEventListener('click', () => {
    localStorage.removeItem("currUser");
    localStorage.removeItem("cart");
    window.location.href = "../index.html"
});