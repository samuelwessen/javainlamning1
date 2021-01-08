$(document).ready(function() {

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });

    // validera email   
    $("#email").keyup(function(){
        let email = $("#email").val();
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            document.getElementById('create_btn').disabled = true
          //alert('Please provide a valid email address');
          $("#email-error").text(email+" är inte en giltig email");
          email.focus;
          //return false;
       } else {
           $("#email-error").text("");
           document.getElementById('create_btn').disabled = false
       }
    });
})

import User from "./user.js";

const user = new User('samuel','wessen','r','örebro','70342','hej')
// console.log(user)
// console.log(user.displayName)


// validerar all inputs
let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 2) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken '
            document.getElementById('create_btn').disabled = true
            }
        else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById('create_btn').disabled = false
        }
    })
}

// validera PostalCode
document.getElementById('postalCode').addEventListener('keyup', (e) => {
    if(e.target.value.length !== 5) {
        document.getElementById(`${e.target.id}-error`).innerText = 'Ange ett giltigt postnr'
        document.getElementById('create_btn').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById('create_btn').disabled = false
    }
})


