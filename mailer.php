<?php
    if(isset($_POST['check'])){

      $name = trim($_POST['name']);
      $email = trim($_POST['email']);
      $url = trim($_POST['url']);
      $comment = trim($_POST['comment']);
      $subject = 'Dott New Contact From '. $name;
      $mailMessage = "
      <html>
      <head>
        <title>New Contact from Dott..</title>
        <style>
          body {max-width: 700px;font-family: arial;margin: 0 auto; }
          table{border: 1px solid #ddd; }
          td { padding: 5px 15px;}
          th { border: 1px solid #ddd; padding: 2px 10px;}
        </style>
      </head>
      <body>
        <p>New Order Recived from <strong>$name</strong></p>
        <table>
          <tr>
            <th>Name</th><th>Email</th><th>Website</th><th>Comment</th>
          </tr>
          <tr>
            <td>$name</td><td>$email</td><td>$url</td><td>$comment</td>
          </tr>
        </table>
      </body>
      </html>
      ";
    }
// multiple recipients
$to  = 'nhaque520@gmail.com';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// Additional headers
$headers .= 'To: Nazmul <nhaque520@gmail.com>' . "\r\n";
$headers .= 'From: Dott <info@dott.com>' . "\r\n";

// Mail it
mail($to, $subject, $mailMessage, $headers);
echo "<script>alert('Thank You. Your Message has Received. I will contact with you as soon as possible');</script>";
echo "<script>location.href='index.html';</script>";
?>
