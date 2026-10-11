//slider-----------------------------//
var imgtag = document.getElementById('hinh');
var imgarr = ['imges/slider1.png', 'imges/slider2.png', 'imges/slider3.png', 'imges/slider4.png'];
var i = 0;

function prev(){
    i--;
    if(i< -0) i = imgarr.length -1;
   imgtag.setAttribute('src', imgarr[i]);

}
function next(){
    i++;
    if(i==imgarr.length) i = 0;
    imgtag.setAttribute('src', imgarr[i]);
}
setInterval("next()", 5000);
//users-------------------------------------//
function singUp(e){
    event.preventDefault();
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    prompt('dang ku thanh cong');

}
function login(){
    event.preventDefault();
    var username = document.getElementById('username').Value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var data = JSON.parse(user);
    if(user ==nul){
        alert("vui long dang nhap vao ")
    } else if(username ==data.username && email ==data.email && password ==data.password){
        prompt("dang nhap thanh cong");
        window.location.href ="todolist.html"
    }
    else{
        prompt("dang nhap thap bai")
    }



}

