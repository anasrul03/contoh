

let m = document.getElementById("socmd").value;


function submition(){


   

    
    if(document.getElementById("mtric").value == ""){
        document.getElementById("lblStatus").innerHTML = "Please complete the Matric Number";

    } if(document.getElementById("mtric").length != 9){
        document.getElementById("lblStatus").innerHTML =  "the Section field only accpet 8 chacaracter :)";

    }
    if(document.getElementById("section").value < 0 || document.getElementById("section").value > 11){
        document.getElementById("lblStatus").innerHTML = "Please enter the Section between 1 to 10";

    }
     if(document.getElementById("fname").value == ""){
        document.getElementById("lblStatus").innerHTML = "Please complete Your name";

    }
    if( document.getElementById("male").checked == false && document.getElementById("female").checked == false){
        document.getElementById("lblStatus").innerHTML = "Please complete the Gender";

    }
     if( document.getElementById("insta").checked == false && document.getElementById("fb").checked == false )
    {
       document.getElementById("lblStatus").innerHTML = "Please complete the Social Media";

    }else 
    
    {

         
    }
}

