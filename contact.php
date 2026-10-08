<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$institution = trim((string) ($_POST['institution'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['title'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$honeypot = trim((string) ($_POST['website'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid form data']);
    exit;
}

$recipient = 'info@dominuslogistica.com';
$sender = 'formweb@dominuslogistica.com';
$mailSubject = 'Nueva consulta desde DOMINUS' . ($subject !== '' ? ': ' . $subject : '');
$mailBody = implode("\n", [
    'Nueva consulta recibida desde el sitio web de DOMINUS.',
    '',
    'Nombre: ' . $name,
    'Institución / Empresa: ' . ($institution !== '' ? $institution : 'No informada'),
    'Email: ' . $email,
    'Asunto: ' . ($subject !== '' ? $subject : 'No informado'),
    '',
    'Mensaje:',
    $message,
]);
$headers = implode("\r\n", [
    'From: DOMINUS <' . $sender . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail($recipient, $mailSubject, $mailBody, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
    exit;
}

echo json_encode(['success' => true]);
