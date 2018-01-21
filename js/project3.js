// Hold DOM elements for easy access
var jobRoleSelect = document.getElementById('title');
var activities = document.querySelector(".activities");
const submit = document.querySelector('button');
var otherField = document.getElementById('other-title');
var otherFieldLabel = document.getElementById('other-title-label');
const paymentMenu = document.getElementById("payment");
const ccDiv = document.querySelector('.credit-card');
const ccNumField = document.querySelector('#cc-num');
const zipField = document.querySelector('#zip');
const cvvField = document.querySelector('#cvv');
const paypalDiv = document.querySelector('.paypal');
const bitcoinDiv = document.querySelector('.bitcoin');
const designMenu = document.querySelector('select[name="user_design"]');
const colorDiv = document.querySelector('#colors-js-puns');
const colorMenu = document.querySelector('select[id="color"]');
const colors = colorMenu.children;

//Set focus on the first text field
document.getElementById("name").focus();

//"Job Role" section of the form:
//A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
otherFieldLabel.style.display = 'none';
otherField.style.display = 'none';

document.addEventListener('DOMContentLoaded', function() {
	function onJobChange(event) {
		if (event.target.value === 'other') {
			otherField.style.display = 'block';
			otherFieldLabel.style.display = 'block';
		} else {
			otherField.style.display = 'none';
			otherFieldLabel.style.display = 'none';
		}
	}
document.querySelector('select[name="user_title"]').addEventListener('change', onJobChange);
})


colorDiv.style.display = 'none';
designMenu.addEventListener('change', (event) => {
    colorDiv.style.display = '';
    if (event.target.value === 'js puns') {
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].className === 'puns') {
                colors[0].selected = true;
                colors[i].style.display = '';
            } else {
                colors[i].style.display = 'none';
            }
        }
    } else if (event.target.value === 'heart js') {
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].className === 'heartJS') {
                colors[3].selected = true;
                colors[i].style.display = '';
            } else {
                colors[i].style.display = 'none';
            }
        }
    } else {
        colorDiv.style.display = 'none';
    }
});

//"T-Shirt Info" section of the form
//Form the T-Shirt menu, only display the color options that match the design selected in the "Design" menu.
document.getElementById("design").addEventListener("change", function(){
var tShirtMenu = document.getElementById('design');
var tSelection = tShirtMenu.value;
var colorSelector = document.getElementById('colors-js-puns');
	
if(tSelection) {
	colorSelector.innerHTML = "";
	}

//If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
if(tSelection === "js puns") {
	colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option></select>';
	}

//If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
if(tSelection === "heart js") {
	colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option></select>';
	}
});

//"Register for Activities" section of the form
document.querySelector(".activities").addEventListener("change", function(){
var main = document.getElementById("all");
var framework = document.getElementById("framework");
var libs = document.getElementById("libs");
var express = document.getElementById("express");
var node = document.getElementById("node");
var build = document.getElementById("build");
var npm = document.getElementById("npm");

var frameworkLbl = document.getElementById("frameworkLabel");
var libsLbl = document.getElementById("libsLabel");
var expressLbl = document.getElementById("expressLabel");
var nodeLbl = document.getElementById("nodeLabel");

// If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
if(framework.checked == true) {
	express.disabled = true;
	expressLbl.style.color = "grey";
	}
if(express.checked == true) {
	framework.disabled=  true;
	frameworkLbl.style.color = "grey";
	} 
if(libs.checked == true) {
	node.disabled = true;
	nodeLbl.style.color = "grey";
	}
if(node.checked == true) {
	libs.disabled = true;
	libsLbl.style.color = "grey";
} 

//When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
if(framework.checked == false) {
	express.disabled = false;
	expressLbl.style.color = "black";
	}
if(express.checked == false) {
	framework.disabled = false;
	frameworkLbl.style.color = "black";
	}
if(libs.checked == false) {
	node.disabled = false;
	nodeLbl.style.color = "black";
	}
if(node.checked == false) {
	libs.disabled = false;
	libsLbl.style.color = "black";
}

//As a user selects activities, a running total should display below the list of checkboxes.
var mainPrice = 200;
var otherPrice = 100;
var totalPrice = 0;

if(main.checked == true){
	totalPrice += mainPrice;
	}
if(framework.checked == true || express.checked == true) {
	totalPrice += otherPrice;
	} 
if(libs.checked == true || node.checked == true) {
	totalPrice += otherPrice;
	} 
if(build.checked == true) {
	totalPrice += otherPrice;
	} 
if(npm.checked == true) {
	totalPrice += otherPrice;
	}

var totalNumber = totalPrice.toString();
var totalText = "Total is $" + totalNumber;
document.getElementById('total').innerHTML = totalText;

if(totalPrice == 0){
	document.getElementById('total').innerHTML = "";
	}
});

//Payment Info section of the form
//Display payment sections based on the payment option chosen in the select menu
function defaultPayment() {
    const choices = paymentMenu.children;
    choices[1].selected = true;
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
}

defaultPayment();
document.getElementById("payment options").addEventListener("change", () => {
	const pay = event.target;
	// "Credit Card" payment option isselected by default so display of the #credit-card div...
	// hide the "Paypal" and "Bitcoin information.
	if(pay.value === "credit card") {
		ccDiv.style.display = '';
		paypalDiv.style.display = "none";
		bitcoinDiv.style.display = "none";
	} else if(pay.value === "paypal") {
		// If user selects the "PayPal" payment option, display the Paypal information, and hide the credit card + Bitcoin
		ccDiv.style.display = 'none';
		paypalDiv.style.display = "";
		bitcoinDiv.style.display = "none";
	} else if(pay.value === "bitcoin") {
		/// If user selects the "Bitcoin" payment option, display the Bitcoin information, and hide the credit card + paypal.
		ccDiv.style.display = 'none';
		paypalDiv.style.display = "none";
		bitcoinDiv.style.display = "";
	}
});

submit.addEventListener('click', (e) => {
    const ccNum = ccNumField.value;
//Form Validation
//Name firld can't be blank
	var nameInput = document.getElementById("name");
	var nameLabel = document.getElementById("nameLabel");
	if(nameInput.value.length == 0) {
		nameLabel.innerHTML = "Name: (please provide name)";
		nameLabel.style.color = "red";
		e.preventDefault();
	} else {
		nameLabel.innerHTML = "Name:";
		nameLabel.style.color = "black";
	}

	//Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one
	function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
	}
	 
	var emailInput = document.getElementById("mail");
	var emailLabel = document.getElementById("emailLabel");

	if(!validateEmail(emailInput.value)) {
	    emailLabel.innerHTML = "Email: (please provide a valid email address)";
	    emailLabel.style.color = "red";
	    e.preventDefault();
	    
	} else {
	    emailLabel.innerHTML = "Email:";
		emailLabel.style.color = "black";
	}

	 //Must select at least one checkbox under the "Register for Activities" section of the form.
   	var activities = document.getElementsByClassName("activity");
    var counter = 0;
    var activityReminder = document.getElementById("activityReminder");
    var lineBreak = document.getElementById("lineBreak");

    for(var i = 0; i < activities.length; i++){
    	if(activities[i].checked === true) {
    		counter++;
    	}
    }

    if(counter < 1){
    	activityReminder.innerHTML = "Please select an Activity";
    	activityReminder.style.color = "red";
    	lineBreak.innerHTML = "<br>";
    	e.preventDefault();
    } if(counter >= 1){
    	activityReminder.innerHTML = "";
    	lineBreak.innerHTML = "";
    }


	//Check that a tshirt has been selected
	var tShirtMenu = document.getElementById('design');
	var tSelection = tShirtMenu.value;
	var tshirtReminder = document.getElementById("tshirtReminder");

	if(tSelection === "selectTheme"){
	    tshirtReminder.innerHTML = "Don't forget to choose a tshirt";
	    tshirtReminder.style.color = "red";
	    e.preventDefault();
	} else if (tSelection === "js puns" || tSelection === "heart js") {
	    tshirtReminder.innerHTML = "";
	};

    if (paymentMenu.value === 'credit card') {
        if (isNaN(ccNum) || ccNum.length < 13 || ccNum.length > 16) {
            e.preventDefault();
            ccNumField.className = 'error';
        } else {
            ccNumField.className = '';
        }
    }

    if (paymentMenu.value === 'paypal') {
    	return true;
    }
    if (paymentMenu.value === 'bitcoin') {
    	return true;
    }

    //check there's a zip code
	var zip = document.getElementById("zip");
    var zipLbl = document.getElementById("zipLbl");
	if(zip.value.length !== 5) {
		e.preventDefault();
        zipField.className = 'error';
    } else {
        zipField.className = ''
    }

    //check there's a cvv
	var cvv = document.getElementById("cvv");
    var cvvLbl = document.getElementById("cvvLbl");
	if(cvv.value.length !== 3) {
        cvvField.className = 'error';
        e.preventDefault();
    } else {
        cvvField.className = ''
    }
});

   