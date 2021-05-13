function validateform() {
    var x = document.forms["myform"]["fname"].value;
    var y = document.forms["myform"]["email"].value;
    if (x == "" || x == null) {
        document.querySelector(".alert_name").style.display = "block";
        document.querySelector('#form #fname').style.marginBottom = "0rem";
        return false;
    }
    if (y == "" || y == null) {
        document.querySelector(".alert_email").style.display = "block";
        document.querySelector('#form #email').style.marginBottom = "0rem";
        return false
    }
}