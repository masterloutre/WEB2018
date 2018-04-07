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
$router->get('/','UserController@createFromId');

/******* 
	Rooting for /car/... 
*******/

$router->group(['prefix' => 'car'], function () use ($router) {
    $router->get('speed','UserController@speed');
    $router->put('speed', function (){
    	echo "speed - PUT";
    });

    $router->get('gas', function (){
    	echo "gas - GET";
    });	

    $router->get('km', function (){
    	echo "km - GET";
    });

    $router->get('airconditioner', function (){
    	echo "airconditioner - GET";
    });
    $router->put('airconditioner', function (){
    	echo "airconditioner - PUT";
    });

    $router->get('tires', function (){
    	echo "tires - GET";
    });

    $router->get('headlights', function (){
    	echo "headlights - GET";
    });
    $router->put('headlights', function (){
    	echo "headlights - PUT";
    });
});

/******* 
	Rooting for /weapons/... 
*******/
$router->group(['prefix' => 'weapons'], function () use ($router) {
    $router->get('{id}','WeaponController@createFromId');
    $router->put('{id}', function (){
    });
});

/******* 
	Rooting for /law/... 
*******/
$router->group(['prefix' => 'law'], function () use ($router) {
    $router->get('scanner', function (){
    });
    $router->put('scanner', function (){
    });

    $router->get('criminals/{id}','VilainController@createFromId');
    $router->patch('criminals/{id}', function (){
    });
    /*$router->delete('scanner', function (){ 
    });*/
    $router->post('criminals/{id}', function (){
    });
});

/******* 
	Rooting for /damage 
*******/

/******* 
	Rooting for /driver 
*******/
$router->get('driver', function (){});

/******* 
	Rooting for /music/... 
*******/
$router->group(['prefix' => 'music'], function () use ($router) {
    $router->get('radio/{id}', function (){
    });
    $router->put('aux/{id}', function (){
    });
});