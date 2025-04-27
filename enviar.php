<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Destinatário do e-mail (seu e-mail)
    $destinatario = "seuemail@dominio.com"; // Altere para seu endereço de e-mail

    // Assunto do e-mail
    $assunto = "Novo contato de: $nome";

    // Corpo do e-mail
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $cabecalhos = "From: $email\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";

    // Enviar o e-mail
    if (mail($destinatario, $assunto, $corpo, $cabecalhos)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Tente novamente.";
    }
}
?>
