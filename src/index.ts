// const fs = require("fs");
// var xhr= new XMLHttpRequest();
// xhr.open('GET', 'blocks/test.html', true);
// xhr.onreadystatechange= function() {
//     if (this.readyState!==4) return;
//     if (this.status!==200) return; // or whatever error handling you want
//     document.getElementById('y').innerHTML= this.responseText;
//
// };
//
//
// xhr.send();
//
//
// let a = document.getElementById('y');
// console.log(a);
// console.log(a.querySelectorAll('.memes'));
//
// function reqListener () {
//     // console.log(this.responseText);
//     return this.responseText;
//
// }
//
// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "blocks/test.html", true);
// oReq.send();



$.ajax('blocks/test.html', {
    success: function (data, status, xhr) {
        $('#y').append(data);
    }
});


console.log(document.querySelector('.memes'))
