<?php
$host = 'c1.apexnodes.xyz';
$db = 's9559_slavyadb';
$user = 'u9559_F3Q5dV9hmW';
$pass = 'hEzzBtItj!kgw7Z+oovMHKc2';

header('Content-Type: application/json');

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  echo json_encode(['error' => 'DB connection failed']);
  exit;
}

$result = $conn->query("SELECT * FROM telegram_subs");
$data = [];
while ($row = $result->fetch_assoc()) {
  $data[$row['channel_name']] = $row['subscriber_count'];
}
echo json_encode($data);
$conn->close();
?>
