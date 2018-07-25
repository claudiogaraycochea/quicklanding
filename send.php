<?php

	$email=$_POST['email'];
	$fullname=$_POST['fullname'];
	$location=$_POST['location'];
	$email_message=$_POST['message'];
	$ipaddress = $_SERVER['REMOTE_ADDR'];

	$to="email destinity";
	$from="email sender";
	$subject="Subject title";
	$message="Data contact: <br> <p>Email: ".$email."</p>"."<p>Fullname: ".$fullname."</p><p>Location: ".$location."</p><p>Message: ".$email_message."</p><p>IP:".$ipaddress."</p>";

	// Para enviar un correo HTML mail, la cabecera Content-type debe fijarse
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Cabeceras adicionales
	$headers .= 'To: '.$to . "\r\n";
	$headers .= 'From: '.$from . "\r\n";
	$headers .= 'Cc: ' . "\r\n";
	$headers .= 'Bcc: '. "\r\n";

	// Mail it
	mail($to, $subject, $message, $headers);

	$hand='<img src="img/hand.svg" style="width: 50%">';

	echo "Thank you!<br><br>".$hand;
?>