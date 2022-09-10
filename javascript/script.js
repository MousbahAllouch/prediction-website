userGender=document.getElementById("user-gender");
userAge=document.getElementById("user-age");


// in this function we need to fetch all data we need when the user click the button
function fetchingData(){
    let userName=document.getElementById("user-name").ariaValueMax;

    // define all url we need to fetch from 
    let genderUrl= "https://api.genderize.io?name="+userName;
    let ageUrl= "https://api.agify.io/?name="+userName;
    let nationalityUrl="https://api.nationalize.io/?name="+userName;

    // getting the gender data we need to show
    fetch(genderUrl)
        .then((response) => response.json())
        .then((data) => {
             let gender=data.gender;
             userGender.innerText=gender;
        });

    // getting age and set it
    fetch(ageUrl)
        .then((response) => response.json())
        .then((data) => {
                let age=data.age;
                userAge.innerText=age;
        });

    
   


}

