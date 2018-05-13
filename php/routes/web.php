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
    $router->get('/{id}','UserController@getAll');
    $router->get('/','UserController@addNewEntry');
    $router->put('/{id}','UserController@set');
});

/******* 
    Rooting for /weapons/... 
*******/
$router->group(['prefix' => 'weapons'], function () use ($router) {
    $router->get('/','WeaponController@getAllWeapons');
    $router->get('{weaponId}/user/{userId}','OwnController@getAmmunition');
    $router->put('{weaponId}/user/{userId}','OwnController@setAmmunition');
});

/******* 
	Rooting for /car/... 
*******/

/*$router->group(['prefix' => 'car'], function () use ($router) {
    $router->get('/','UserController@createFromId');
    $router->get('{name}','UserController@get');
    $router->put('{name}','UserController@set');
});*/

/******* 
	Rooting for /weapons/... 
*******/
/*$router->group(['prefix' => 'weapons'], function () use ($router) {
    $router->get('{id}','OwnController@getAmmunition');
    $router->put('{id}','OwnController@setAmmunition');
});*/

/******* 
	Rooting for /law/... 
*******/
/*$router->group(['prefix' => 'law'], function () use ($router) {
    $router->get('scanner',);
    $router->put('scanner',);

    $router->get('criminals/{id}','VilainController@createFromId');
    $router->patch('criminals/{id}','VilainController@patchVilain');
    $router->delete('criminals/{id}','VilainController@delete');
    $router->post('criminals/{id}','VilainController@add');
});*/

/******* 
	Rooting for /damage 
*******/
/*
$router->get('damage','UserController@getCarbodyState');*/

/******* 
	Rooting for /driver 
*******//*
$router->get('driver', 'UserController@getBpm');*/

/******* 
	Rooting for /music/... 
*******//*
$router->group(['prefix' => 'music'], function () use ($router) {
    $router->get('radio/{id}','RadioController@createFromId');
    $router->put('aux/{id}', function (){
    });
});*/