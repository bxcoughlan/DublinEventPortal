<!--  adapted from an example from http://php.about.com/od/phpapplications/ss/form_mail_3.htm -->
<?php
	require_once('FirePHPCore/fb.PHP');
  Fb::error("in emailSubmit.php")
	$to = "brian_x_coughlan@hotmail.com" ; 
  $from = $_POST["subemail"] ; 
  $name = $_POST["subname"] ; 
  Fb::error($name, "name output")
	$headers = "From: $from"; 
  $subject = "New Event Submission"; 
  $body = "We have received the following information:\n\n";

  $body .= sprintf("Name: %s\n",$_POST["subname"}); 
  $body .= sprintf("Website: %s\n",$_POST["subwebsite"]); 
  $body .= sprintf("Email: %s\n",$_POST["subemail"]);
  $body .= sprintf("Location: %s\n",$_POST["locDesc"]);
  $body .= sprintf("Event: %s\n",$_POST["eventDesc"]);  
 
  $send = mail($to, $subject, $body, $headers); 
  if($send) {
    header('Location: ./index.html');

  } 
  else 
  {
    echo "We encountered an error sending your mail, please notify info@dublineventportal.ie"; } 
  }  
 ?>
