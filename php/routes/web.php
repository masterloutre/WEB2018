<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/



/*$router->get('user/{id}[/{type}]',function($id,$type = null){
	$user = UserController::createFromId($id);
	var_dump($user);
	if(isset($type))
		echo $user[0]->$type;
	else
		echo "Lol";
});*/

$router->get('/','UserController@createFromId');
$router->get('user/{type}','UserController@createFromId');

/*$router->get('/hello/{name}', function ($name){
    return "Hello $name !";
});


$router->get('/', function(){
	require("../app/Http/Controllers/requires.php");
	$user = User::createFromId("beflgn735kjpamcrcn0plc95h4");
	$str = array("phrase" => "Bonjour Batman, votre voiture a un poids de ".$user->weight."kg et va à ".$user->speed." km/h");
	return json_encode($str);
});

$router->get('/speed/{sessionId}','UserController@createFromId');*/

/*$app->group(['namespace' => 'App\Http\Controllers'], function ($app) {
    // Controllers Within The "App\Http\Controllers\Admin" Namespace
    require("../app/Http/Controllers/requires.php");
	$router->get('/speed/{sessionId}','UserController@speed');
});*/