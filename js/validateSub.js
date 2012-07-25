  function validate() {
	  var fail1 = validateName();
		var fail2 = validateEmail();
		var fail3 = validateWebsite();
		var fail = fail1 + fail2 + fail3;
		if (fail == "")
			return true;
		else {
		  alert(fail);
			return false;
		}
	}
	
	function validateName() {
	  var name = document.getElementById('subname').value;
		if (name == "") {
		  return ("No name was entered.\n");
		}
		else {
		  return ("");
		}
	}
	
  function validateEmail() {
	  var email = document.getElementById('subemail').value;

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

	function validateWebsite() {
		
	  var website = document.getElementById('subwebsite').value;

  	if (website == "") {
	  	return ("Please enter a valid website.\n");
	  }
	  else {
			// check the website conforms to URL format with reg expression.
			var expression = new RegExp();
			expression.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
      if (!expression.test(website)) {
	 	    return ("website URL is invalid.\n");
	    }
			return("");
		}
	}