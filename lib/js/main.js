let main_title = document.getElementById("main_title");
let title_input = document.getElementById("title_input");
let noun = document.getElementById('noun');
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
let submit_button = document.getElementById("submit_button");

submitok = "true"


//calls function whenever user types
title_input.onkeyup = function () {
    let userInput = title_input.value;
    main_title.innerHTML = userInput; 
}

submit_button.onclick = function(event) {
    console.log('hello');
    
    //checks if each field is empty
    if (title_input.value == '' || verb.value == ''|| adjective.value == ''|| noun.value == '') {
        alert("Please fill in all fields");
        submitok = "false";
    }
    

    event.preventDefault();
}


