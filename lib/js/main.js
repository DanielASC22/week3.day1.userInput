let main_title = document.getElementById("main_title");
let title_input = document.getElementById("title_input");
let noun = document.getElementById('noun');
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
let submit_button = document.getElementById("submit_button");
let form_container = document.getElementsByClassName('form_container')[0];
let final = document.getElementById('story_result');
let submitok = "true"


//calls function whenever user types
title_input.onkeyup = function () {
    let userInput = title_input.value;
    main_title.innerHTML = userInput; 
}

// when we click the submit button
submit_button.onclick = function(event) {
     //prevents refreshing the page on click
     event.preventDefault();
    
    //checks if each field is empty
    if (title_input.value == '' || verb.value == ''|| adjective.value == ''|| noun.value == '') {
        alert("Please fill in all fields");
        submitok = "false";
    }
   
    else {
        form_container.style.opacity = '0'
        final = document.getElementById('story_result');

        final.innerHTML = "Last night I ate a " + noun.value + 
        ", and today I just had to " + verb.value + ". What a " + adjective.value + " day!";
    }
}


