function zf_ValidateAndSubmit(){
	var r;
	var n = document.getElementById("id1").value;
	var e = document.getElementById("id2").value;
	var p1 = document.getElementById("international_PhoneNumber_countrycodeval").value;
	var p2 = document.getElementById("international_PhoneNumber_countrycode").value;
	var w1 = document.getElementById("id3").value;
	var w = getDomain(w1);
	var r1 = document.getElementById("Radio_1").checked;
	var r2 = document.getElementById("Radio_2").checked;
	var c = document.getElementById("Check_Box").checked;
	if(r1)
		r = "Yes";
	else if(r2)
		r = "No";
	else
		r = "";
	var nameformat = /^[a-zA-Z\s]*$/;
	var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;
	var phoneformat = /^[0-9]+$/;
	var webformat = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
	
	document.getElementById('SingleLine_error').innerHTML = "";
	document.getElementById('Email_error').innerHTML = "";
	document.getElementById('PhoneNumber_error').innerHTML = "";
	document.getElementById('Website_error').innerHTML = "";
	document.getElementById('Radio_error').innerHTML = "";
	document.getElementById('Check_error').innerHTML = "";
	
	if(n == "" || e == "" || p1 == "" || p2 == "" || w == "" || r == "" || !c)
	{
		if(n == "")
		{
			document.getElementById('SingleLine_error').innerHTML = "Name should not empty!";
		}
		if(e == "")
		{
			document.getElementById('Email_error').innerHTML = "Email should not empty!";
		}
		if(p1 == "")
		{
			document.getElementById('PhoneNumber_error').innerHTML = "Code should not empty!";
		}
		if(p2 == "")
		{
			document.getElementById('PhoneNumber_error').innerHTML = "Number should not empty!";
		}
		if(w == "")
		{
			document.getElementById('Website_error').innerHTML = "Website should not empty!";
		}
		if(r == "")
		{
			document.getElementById('Radio_error').innerHTML = "Select any one option";
		}
		if(!c)
		{
			document.getElementById('Check_error').innerHTML = "Please Accept Terms and Conditions";
		}
		return false;
	} else if((n.length < 2) || (n.length > 100))
	{
		document.getElementById('SingleLine_error').innerHTML = "Name should be between length 5 to 100.";
		return false;
		
	}else if(n.match(nameformat) === null)
	{
		document.getElementById('SingleLine_error').innerHTML = "Name should contain character only.";
		return false;
		
	} else if(e.match(mailformat) === null || e.match(/^\d/))
	{
		document.getElementById('Email_error').innerHTML = "Invalid email format";
		return false;
		
	} else if(p2.match(phoneformat) === null)
	{
		document.getElementById('PhoneNumber_error').innerHTML = "Phone Number should contain number only.";
		return false;
		
	} else if(w.match(webformat) === null || w.match(/^\d/))
	{
		document.getElementById('Website_error').innerHTML = "Invalid Website format";
		return false;
		
	}else if((p2.length < 5) || (p2.length > 15))
	{
		document.getElementById('PhoneNumber_error').innerHTML = "Phone number should be between length 5 to 15.";
		return false;
	}else {
		if(isSalesIQIntegrationEnabled){
			zf_addDataToSalesIQ();
		}
		return true;
	}
	
}

function getDomain(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }
	document.getElementById("id3").value = "www."+url;
    return "www."+url;
}

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
