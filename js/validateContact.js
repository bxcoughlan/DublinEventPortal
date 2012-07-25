 function validate() {
	  	var fail1 = validateContactName();
		var fail2 = validateEmail();
		var fail = fail1 + fail2;
		if (fail == "")
			return true;
		else {
		  alert(fail);
			return false;
		}
	}

	function validateContactName() {
	  var name = document.getElementById('contactname').value;
		if (name == "") {
		  return ("No name was entered.\n");
		}
		else {
		  return ("");
		}
	}

  function validateEmail() {
	  var email = document.getElementById('email').value;

		/*  blank form submitted for email address */
  	if (email == "") {
	  	return ("Please enter a valid email address.\n");
	  }
	  else {
		  /* check the following is true of the input email address -
			   - the @ symbol is present, and not in first position of string
				 - the . symbol is after the @ symbol by at least two spaces
				 - there are at least two characters after the .
			*/
		  var atpos=email.indexOf("@");
      var dotpos=email.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
			{
			  return ("Email address is invalid.\n");
		  }
			else {
			  return ("");
			}
	  }
	
}
	
	