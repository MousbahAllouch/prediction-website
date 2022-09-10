userGender=document.getElementById("user-gender");
userAge=document.getElementById("user-age");
userNationality=document.getElementById("user-nationality");
imgSrc=document.getElementById("img-src")
dogImg=document.getElementById("dog-img");


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

    // getting nationality and set it
    fetch(nationalityUrl)
        .then((response) => response.json())
        .then((data) => {
            userNationality.innerText=data["country"][0]["country_id"];
            // to check if ther are more than one country
            if (data["country"]["length"]>1){
                userNationality.innerText=data["country"][0]["country_id"]+" and "+data["country"][1]["country_id"];
            }
        });


    // getting dog-image and set it
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            // giv src attribute the image URL
            imgSrc.setAttribute("src",data.message);
    });
}

