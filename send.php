<?php
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$name = $_POST['name'];
$email = $_POST['email'];
// $companyName = $_POST['unternehmen'];
// $phone = $_POST['phone'];
$text = $_POST['message'];

$title = "Заголовок письма";
$body = "
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Username   = 'i.d.group.sp.zoo.info@gmail.com';
    $mail->Password   = 'rkzamqycaezqzemf';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('i.d.group.sp.zoo.info@gmail.com', 'ID GROUP Office');

    // Получатель письма
    // $mail->addAddress('i.d.group.sp.zoo.info@gmail.com');  
    // $mail->addAddress('i.d.group.sp@gmail.com');
    // $mail->addAddress('office@idgroup.com.pl'); 
    $mail->addAddress('antoxa0105@gmail.com'); 

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);