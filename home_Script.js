
var new_date,time,date;
const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
setInterval(() =>{
    new_date = new Date();
    date = new_date.toLocaleDateString(undefined,options)
    time = new_date.getHours() + ":" + new_date.getMinutes() + ":" + new_date.getSeconds()
    document.getElementById('time').innerHTML = time + ",   " + date;
},1000);



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

function validate_comment(){
    var x = document.forms['Comment_form']['name'].value;
    var y = document.forms['Comment_form']['email'].value;
    if (x == ""||x == null){
        document.getElementById("alert_name").style.display = "block";
        return false;
    }
    if (y == ""||y == null){
        document.getElementById("alert_email").style.display = "block";
        return false;
    }

}
