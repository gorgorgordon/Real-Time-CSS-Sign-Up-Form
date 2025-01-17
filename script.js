var speed = 50;

var style = `body{color:white;font-family:'Poppins',sans-serif;font-size:1rem;background-color:#ff7a7a;background-image:url('https://dl.dropbox.com/s/yrdk3o6dh9q57yt/bg-intro-mobile.png?raw=1');text-align:center}.container{padding:100px 20px}.title{font-weight:700}.btn-try{margin:80px auto 30px;background-color:#5f54a4;color:#fff;box-shadow:0 8px 0 0 #b54c4d87;font-weight:500;font-size:1rem;padding:7% 15%}.btn-try:hover{background-color:#8c7fdc;color:white}.form{background:#fff;padding:20px;border-radius:10px;margin-bottom:50px;box-shadow:0 7px #00000036}.form div{text-align:right}.form-control{margin:15px auto;padding:25px 15px;font-weight:500}input::placeholder{color:#3d3b48}.btn-claim{background-color:#38cb8b;font-size:1rem;font-weight:500;color:#fff;box-shadow:0 4px #1cb774}.btn-claim:hover{color:white;background-color:#68e2ad}.terms-condition{color:#b8b5d3}.terms-services{color:#ff7a7a;font-weight:600}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url('https://dl.dropbox.com/s/wfpgvq3ocprw4sc/icon-error.svg?raw=1')}.attribution{font-size:11px}.attribution a{text-decoration:underline;color:#fff;line-height:1.5}@media(min-width:800px){body{background-image:url('https://dl.dropbox.com/s/8q3zsg9f97puvg1/bg-intro-desktop.png?raw=1')}.title{font-size:3rem}#intro{text-align:left;margin:auto}#cta{margin:auto}.container{padding:5%}}`;
var rules = style.split('');
var stylebox;
$(document).ready(function () {
  stylebox = $("body style");
  alert("Styling Started\nYou can edit Speed(milliseconds per character) on js 1st line");
  setTimeout(() => alert("Styling Finished"), rules.length * speed);
  for (var i = 0; i < rules.length; i++) {
    setTimeout(addStyle, i * speed, i);
  }
})

function addStyle(i) {
  stylebox.append(rules[i]);
}