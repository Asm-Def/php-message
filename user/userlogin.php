<?php

if($_SERVER['REQUEST_METHOD'] === 'GET')
{
	echo "<script>alert('此页面不支持直接访问！')</script>";
}

$fp = fopen("../env.json", "r");
$config = json_decode(fread($fp, filesize("../env.json")));

$con = mysqli_connect($config->{"db-host"}, $config->{"db-username"}, $config->{"db-password"}, $config->{"db-name"}, $config->{"db-port"});

//function check_input($input)
//{
//	//return htmlspecialchars(addslashes(trim($input)));
//	//return URLencode($input);
//	return mysqli_real_escape_string($con, $input);
//}
?>
{
<?php
//$uname = check_input($_POST['uname']);
//$pword = check_input($_POST['pword']);
//var_dump($uname);
//var_dump($pword);
//$sql = "SELECT 1 FROM users WHERE 'uname'='".$uname."' and 'pword'='".$pword."';";
//var_dump($sql);
$sql = $con->prepare('SELECT 1 FROM
?>
}
