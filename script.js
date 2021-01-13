$(document).ready(function() {

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });

    // validera email   
    $("#email").keyup(function(){
        let email = $("#email").val();
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            // document.getElementById('create_btn').disabled = true          
          $("#email-error").text(email+" är inte en giltig email");
          email.focus;
          //return false;
       } else {
           $("#email-error").text("");
        //    document.getElementById('create_btn').disabled = false
       }
    });


    //Funkar me allt förutom email
    $(document).ready(function () {
        validate();
        $('#firstName, #lastName, #adress, #city, #postalCode, #phoneNumber, #email' ).keyup(validate);
    });

    function validate() {

        let email = $("#email").val();
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ($('#firstName').val().length > 1 &&
            $('#lastName').val().length > 1 &&
            $('#adress').val().length > 1 &&
            $('#city').val().length > 1 &&
            $('#postalCode').val().length == 5 &&
            $('#phoneNumber').val().length == 10 &&
            (filter.test(email))) {
                $('#create_btn').prop("disabled", false);
            }
        else {
            $('#create_btn').prop("disabled", true);
        }
    }




})

// import User from "./user.js

// Lista över Users
let users = [];
console.log(users)


// Lägg till användare i users

const addUser = (e) => {
    e.preventDefault(); //för att stoppa formuläret att submitta

    let user = {
        id: Date.now(),
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        adress: document.getElementById('adress').value,
        city: document.getElementById('city').value,
        postalcode: document.getElementById('postalCode').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
    }

    users.push(user);

    // rensa formuläret
    document.forms[0].reset(); 
    document.querySelector('form').reset();


    // consollogga adderade användare
    console.warn('added' , {users} );

    
    // Rubrik på drop-down listan
    let flip = document.querySelector('#flip');
    flip.textContent = `${user.firstName } ` + `${ user.lastName}`;


    // Innehåll i drop-down listan
    let userId = document.querySelector('#userId')
    userId.textContent = user.id;
    let userFirstName = document.querySelector('#userFirstName')
    userFirstName.textContent = user.firstName;
    let userLastName = document.querySelector('#userLastName')
    userLastName.textContent = user.lastName;
    let userEmail = document.querySelector('#userEmail')
    userEmail.textContent = user.email;
    let userPhoneNumber = document.querySelector('#userPhoneNumber')
    userPhoneNumber.textContent = user.phoneNumber;
    let userAdress = document.querySelector('#userAdress')
    userAdress.textContent = user.adress;
    let userCity = document.querySelector('#userCity')
    userCity.textContent = user.city;
    let userPostalCode = document.querySelector('#userPostalCode')
    userPostalCode.textContent = user.postalcode;

    //gör så att knappen är disabled när man har tryckt på den
    document.getElementById('create_btn').disabled = true;
}



// Event Submit
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('create_btn').addEventListener('click', addUser);    
  });


// validerar all inputs
let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 2) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken '
            // document.getElementById('create_btn').disabled = true
            }
        else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        // document.getElementById('create_btn').disabled = false
        }
    })
}

// validera PostalCode
document.getElementById('postalCode').addEventListener('keyup', (e) => {
    if(e.target.value.length !== 5) {
        document.getElementById(`${e.target.id}-error`).innerText = 'Ange ett giltigt postnr'
        // document.getElementById('create_btn').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        // document.getElementById('create_btn').disabled = false
    }
})

// validera PhoneNumber
document.getElementById('phoneNumber').addEventListener('keyup', (e) => {
    if(e.target.value.length !== 10) {
        document.getElementById(`${e.target.id}-error`).innerText = 'Ange ett giltigt telfonnr'
        // document.getElementById('create_btn').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        // document.getElementById('create_btn').disabled = false
    }
})



