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


/******* 
	Rooting for /car/... 
*******/

$router->group(['prefix' => 'car'], function () use ($router) {
    $router->get('/','UserController@createFromId');
    $router->get('{name}','UserController@get');
    $router->put('{name}','UserController@set');
});

/******* 
	Rooting for /weapons/... 
*******/
$router->group(['prefix' => 'weapons'], function () use ($router) {
    $router->get('{id}','OwnController@getAmmunition');
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