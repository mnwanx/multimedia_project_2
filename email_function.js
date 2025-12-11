function send_email()   {
    receiver = document.getElementById("email_receiver") . value;
    subject = document.getElementById("email_subject") . value;
    body = document.getElementById("email_body") . value;

    window.open(`mailto:${receiver}?subject=${subject}&body=${body}`);
}