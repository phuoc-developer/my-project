//slider-----------------------------//
(function ($){
    $(".slider-content-left-top").owlcarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,

    });

})(jQuery);
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

