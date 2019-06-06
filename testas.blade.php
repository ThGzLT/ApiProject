@extends('layouts.main')
@section('content')


<div class="row">
<div class="col-md-3">
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
</div>
</div>

                            <div id="apps">
                            </div>

@endsection
