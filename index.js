const $ = document.querySelector.bind(document);
const form = $(".form");
const form_login = $(".form_login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const email_message = $(".email_message");
const password_message = $(".password_message");
const login_message = $(".login_message");

const user = [
  {
    email: "thanh123@gmail.com",
    password: "123",
  },

  {
    email: "nam123@gmail.com",
    password: "12345",
  },
];

var inputEmail;
var inputPassword;
email.onblur = function (e) {
  inputEmail = e.target.value;
  var emailLengt = inputEmail.length;
  var checkEmail = inputEmail.slice(emailLengt - 10, emailLengt);
  // ko nhap email
  email_message.innerText = !inputEmail ? "Username not be blank" : "";

  //ko phai email
  if (inputEmail) {
    if (inputEmail.length < 10 || checkEmail !== "@gmail.com") {
      email_message.innerText = "Trường này phải là email!";
    }
  }
};

password.onblur = function (e) {
  inputPassword = e.target.value;

  // ko nhap password
  password_message.innerText = !inputPassword ? "Password not be blank" : "";
};

// kiem tra tai khoan co ton tai ko
form_login.onclick = function (e) {
  var checkLogin = [
    {
      email: inputEmail,
      password: inputPassword,
    },
  ];

  var checkEmail = user.some(function (data) {
    return data.email === checkLogin[0].email;
  });

  var checkPassword = user.some(function (data) {
    return data.password === checkLogin[0].password;
  });

  if (!checkEmail && !checkPassword) {
    login_message.innerText = "Account not found";
  } else if (!checkEmail || !checkPassword) {
    email_message.innerText = "Invalid username/password";
    login_message.innerText = "Account not found";
  } else if (checkEmail && checkPassword) {
    login_message.innerText = "Login successful";
  }
};

// Ngăn chặn hành vi submit mặc định
document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  form_login.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
