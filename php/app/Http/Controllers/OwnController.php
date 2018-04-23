<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
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

	public function getAmmunition($id){
		session_start();
        $sessionId = session_id();
		$ammunition = app('db')->select('SELECT ammunition FROM own WHERE sessionId = ? AND weaponId = ?',[$sessionId, $id]);
        if(count($ammunition) > 0)
			return json_encode($ammunition["0"]);
        $response = array('error' => "Weapon not found");
        return json_encode($response);
	}

	public function setAmmunition(Request $request, $id){
		$test = OwnController::getAmmunition($id);
		$test = json_decode($test);
        $sessionId = session_id();
		if(isset($test->error)){
			$response = array('error' => "This weapon id is not set for the current session.");
			return json_encode($response);
		}
        $val = $request->json()->all();
		$query = "UPDATE own SET ammunition = ? WHERE weaponId = ? AND sessionId = ?";
        $stmt = app('db')->update($query,[$val["ammunition"],$id,$sessionId]);
		$response = array('success' => "Well-defined");
		return json_encode($response);
	}
}
