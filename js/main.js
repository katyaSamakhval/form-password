document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
event.preventDefault();
var el = document.getElementById('main-form')
var name = el.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var state = el.state.value;

var fail = "";

if(name == "" || pass == "" || state == "") 
    fail = "заполните все поля"
else if(name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
else if(pass != repass)
    fail = "пароли должны совпадать";
else if(pass.split("&").length > 1)
    fail = "некорректный пароль";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail
    } else {
        alert("все корректно заполнены")
        window.location = 'https://hgvhgv.com'
    }
}