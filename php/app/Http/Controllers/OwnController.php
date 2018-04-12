<?php
namespace App\Http\Controllers;

/**
 * Class who get information about ammunition state for each weapon 
 */
class OwnController {

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $ammunition = null;
	private $sessionId = null;
	private $weaponId = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/*******************GETTERS COMPLEXES*******************/
//t98pkkk59a3dlav80ku0c7rhc2
	public function getAmmunition($id){
		session_start();
        $sessionId = session_id();
		$ammunition = app('db')->select('SELECT ammunition FROM own WHERE sessionId = ? AND weaponId = ?',[$sessionId, $id]);
		return $ammunition;
	}
}
