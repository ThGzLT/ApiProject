<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>



                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <td>employee_name</td>
                                    </tr>
                                </thead>
            <?php

$endpoint = 'http://dummy.restapiexample.com/api/v1/employees';

$session = curl_init($endpoint);

curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

$data = curl_exec($session);

curl_close($session);

$search_results = json_decode($data, true);
if ($search_results === NULL) die('Error parsing json');


foreach ($search_results as $coin) {
if (strlen($coin["employee_name"])<20) {


$name = $coin["id"];
$profit = $coin["employee_name"];
?>
<tr>
		<td><?PHP echo $name; ?></td>
		<td><?PHP echo $profit; ?></td>

	</tr>
<?PHP
}
}

            ?>
                            </table>

    </body>
</html>
