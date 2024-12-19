<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
echo "<h2>Submitted Data (PHP)</h2>"; foreach ($_POST as $key => $value) {
echo "<p><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($value) . "</p>";
}
}
?>
 
