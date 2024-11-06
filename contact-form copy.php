<?php
      use PHPMailer\PHPMailer\PHPMailer;
      use PHPMailer\PHPMailer\Exception;
      
      require 'PHPMailer/src/Exception.php';
      require 'PHPMailer/src/PHPMailer.php';
      require 'PHPMailer/src/SMTP.php';
 
      $mail = new PHPMailer;
      $mails = new PHPMailer;

      if($_POST['sendmail']){ 	

      if(!empty($_POST['email'])){	      
      
          $mail->isSMTP();
          $mail->Host = 'smtp.gmail.com'; 
          $mail->SMTPAuth = true;
          $mail->Username = 'cafeandgreen@gmail.com';  
          $mail->Password = 'GREENcafe2023'; 
          $mail->SMTPSecure = 'tls'; 
          $mail->Port = 587; 


          $postData = $_POST; 
          $name = trim($_POST['name']);
          $email = trim($_POST['email']);
          $phone = trim($_POST['phone']);
          $message = trim($_POST['message']);
          $honeypot = $_POST['firstname'];   
         
  
      if( ! empty( $honeypot ) ){
        return; 
      }     
      else{
        if{
          $txt = file_get_contents ("contact-form-enquiry.php"); 
          $txt = str_replace("Your Name", "Your Name: <br /><span>{$name}</span>\n", $txt); 
          $txt = str_replace("Email Address", "Email Address: <br /><span>{$email}</span>\n", $txt); 
          $txt = str_replace("Phone Number", "Phone Number: <br /><span>{$phone}</span>\n", $txt); 
          $txt = str_replace("Message", "Message: <br /><span>{$message}</span>\n", $txt); 
            
          $mail->From ='cafeandgreen@gmail.com';
          $mail->FromName = 'Cafe Green';     
          $mail->addAddress("iyappanvicky7@gmail.com");
          $mail->isHTML(true);
          $mail->Subject = "Request for Table Bokking {$name} {$email} {$message}";
          $mail->Body = $txt;
        
        if(!$mail->send()) 
        {		
          echo "Mailer Error: " . $mail->ErrorInfo;
        }
        else{	
          $mail->isSMTP();
          $mail->Host = 'smtp.gmail.com'; 
          $mail->SMTPAuth = true;
          $mail->Username = 'cafeandgreen@gmail.com';  
          $mail->Password = 'GREENcafe2023'; 
          $mail->SMTPSecure = 'tls'; 
          $mail->Port = 587; 
          
          $postData = $_POST; 
          $name = trim($_POST['name']);
          $email = trim($_POST['email']);
          $phone = trim($_POST['number']);
          $message = trim($_POST['message']);
          $honeypot = $_POST['firstname']; 
        
          $msg = file_get_contents ("contact-form-thanks.php");
          $msg = str_replace("Dear", "Dear {$name}", $msg); 
          
          $mails->From ='cafeandgreen@gmail.com';
          $mails->FromName = 'Cafe Green';
          $mails->addAddress($email);
          $mails->isHTML(true);
          $mails->Subject = "Request for Table Bokking {$name} {$email} {$message}";
          $mails->Body = $msg;        
          if(!$mails->send()) 
            {			
              echo "Mailer Error: " . $mails->ErrorInfo;
            }
          else
            {		
              header('Location: http://cafeandgreen.in/');
            }			
          }      
       }
    } 
  }   
}
?>



    
 
    
   
  </body>
</html>