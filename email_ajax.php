
<?php
//use PHPMailer\PHPMailer\PHPMailer; 
//use PHPMailer\PHPMailer\Exception; 
  
require_once  'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
//if(isset($_POST['sendMail'])){
//Server settings

$name=$_POST['name'];		
$phone=$_POST['phone'];	
$email=$_POST['email'];	
$zip=$_POST['zip'];
$qty=$_POST['qty'];
$calltime=$_POST['calltime'];

$posType = $_POST['posType'];

$cbRESSelectAll = $_POST['cbRESSelectAll'];

$cbRESSelectALLhardwareAndSoftware = $_POST['cbRESSelectALLhardwareAndSoftware'];
$cbRETSelectAll = $_POST['cbRETSelectAll'];
$cbCCPSelectAll = $_POST['cbCCPSelectAll'];
$CustomerFacingDisplaySelect = $_POST['CustomerFacingDisplaySelect'];

$budgetType = $_POST['budgetType'];
$ddlmoontlyDollarVolume = $_POST['ddlmoontlyDollarVolume'];
$projectedDollarVolume = $_POST['projectedDollarVolume'];
$AcceptCreditCardsTypeSelect = $_POST['AcceptCreditCardsTypeSelect'];





		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
		$mail->isSMTP();                                          //Send using SMTP
		$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                 //Enable SMTP authentication
		$mail->Username   = ' ';                                 //SMTP username
		$mail->Password   = ' ';                                 //SMTP password
	   // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;       //Enable implicit TLS encryption
		$mail->Port       = 587;             
		
		
		
		//TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom($email, $name);
		$mail->addAddress('sales@unitedstandardpos.com');     //Add a recipient
		$mail->addReplyTo($email, $name);

// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');


$mail->isHTML(true);  // Set email format to HTML
$mail->Subject ='POS Enquiry Form';
$bodyContent = '';
$bodyContent .='
<table cellpadding="0" cellspacing="0" style="width:800px;font-family:calibri;border: 1px solid #c1c1c1;">
	<tbody>
		<tr>
			<td colspan="" style="padding: 5px 10px;width:200px;"><strong>Contact Info: </strong><br/>'.$name.', &nbsp;'.$phone.',&nbsp;'.$email.',&nbsp;
			'.$zip.',&nbsp; '.$calltime.'</td>
		</tr>
		
		<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>Select business type:</strong><br/>'.$posType.'</td>
		</tr>';

	if ( !empty($cbRESSelectAll)) {
		$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>Describe your restaurant business:</strong><br/>'.$cbRESSelectAll.'</td>
		</tr>';
	}
	if ( !empty($cbCCPSelectAll)) {
		$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>Describe your business:</strong><br/>'.$cbCCPSelectAll.'</td>
		</tr>';
	}

	if ( !empty($cbRETSelectAll)){
		$bodyContent .='<tr>
				<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>Describe your retail business:</strong><br/>'.$cbRETSelectAll.'</td>
			</tr>';
		}

	if ( !empty($qty)) {
		$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>How many POS stations do you need?:</strong><br/>'.$qty.'</td>
		</tr>';
	}
	
	if ( !empty($cbRESSelectALLhardwareAndSoftware)) {
	$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>What additional hardware and software do you need?:</strong><br/>'.$cbRESSelectALLhardwareAndSoftware.'</td>
		</tr>';
	}
	
	if ( !empty($CustomerFacingDisplaySelect)) {
		$bodyContent .='<tr>
		<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>What additional hardware and software do you need?:</strong><br/>'.$CustomerFacingDisplaySelect.'</td>
		</tr>';
	}
	
	
	
	
	if ( !empty($budgetType)) {
	$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>Do you currently accept credit cards?:</strong><br/>'.$budgetType.'</td>
		</tr>';	
	}

	if ( !empty($ddlmoontlyDollarVolume)) {
		$bodyContent .='<tr>
    		<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>What is your average monthly dollar volume?:</strong><br/>'.$ddlmoontlyDollarVolume.'</td>
		</tr>';
	}

	if ( !empty($projectedDollarVolume)) {
		$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>What is your projected monthly dollar volume?:</strong><br/>'.$projectedDollarVolume.'</td>
		</tr>';	
	}

	if ( !empty($AcceptCreditCardsTypeSelect)) {
	$bodyContent .='<tr>
			<td colspan="" style="padding: 5px 10px; vertical-align: top;"><strong>How do you want to accept credit cards?:</strong><br/>'.$AcceptCreditCardsTypeSelect.'</td>
		</tr>';
	}
	$bodyContent .='</tbody>
</table>';

$mail->Body = $bodyContent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
//}
?>