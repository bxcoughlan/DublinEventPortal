<?php
if (empty($_POST)) {
	print "<p>No data was submitted.</p>";
	print "</body></html>";
	exit();
}

//Creates function that removes magic escaping, if it's been applied, from values and then removes extra newlines and returns to foil spammers. Thanks Larry Ullman!
function clear_user_input($value) {
  alert('in right place');
	if (get_magic_quotes_gpc()) $value=stripslashes($value);
	$value= str_replace( "\n", '', trim($value));
	$value= str_replace( "\r", '', $value);
	return $value;
	}


if ($_POST['comments'] == 'Please share any comments you have here') $_POST['comments'] = '';	

//Create body of message by cleaning each field and then appending each name and value to it

$body ="Here is the data that was submitted:\n";

foreach ($_POST as $key => $value) {
	$key = clear_user_input($key);
	$value = clear_user_input($value);
	if ($key=='extras')
	{
		
	  if (is_array($_POST['extras']) )
		{
		  $body .= "$key: ";
		  $counter =1;
	  	foreach ($_POST['extras'] as $value)
			{
				//Add comma and space until last element
				if (sizeof($_POST['extras']) == $counter)
				{
					$body .= "$value\n";
					break;
				}
				else {
					$body .= "$value, ";
					$counter += 1;
				}
			}
		} else {
		  $body .= "$key: $value\n";
		}
	} 
	else
	{
	  $body .= "$key: $value\n";
	}
}

extract($_POST);
//removes newlines and returns from $email and $name so they can't smuggle extra email addresses for spammers
$email = clear_user_input($email);
$name = clear_user_input($name);

//Create header that puts email in From box along with name in parentheses and sends bcc to alternate address
$from='From: '. $email . "(" . $name . ")" . "\r\n" . 'Bcc: yourmail@yourdomain.com' . "\r\n";


//Creates intelligible subject line that also shows me where it came from
$subject = 'Event Submission';

//Sends mail to me, with elements created above
mail ('brian_x_coughlan@hotmail.com', $subject, $body, $from);
		  
 ?>
