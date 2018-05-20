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

	public static function addOwn($ammunition, $sessionId, $weaponId)
    {
        $stmt = app('db')->insert('INSERT INTO own(ammunition,sessionId,weaponId) VALUES (?,?,?)',[$ammunition,$sessionId,$weaponId]);
        return response('Success',200)->header('Content-Type', 'text/plain');
    }

	/*******************GETTERS COMPLEXES*******************/

	public function getAmmunition($weaponId,$userId){
		$ammunition = app('db')->select('SELECT ammunition FROM own WHERE sessionId = ? AND weaponId = ?',[$userId, $weaponId]);
        if(count($ammunition) > 0)
			return response()->json([
                    'ammunition' => $ammunition["0"]->ammunition
            ],200);
		return response()->json([
                    'error' => "No ammunition for this weapon"
            ],400);
	}

	public function setAmmunition(Request $request, $weaponId, $userId){
		//Checking if the userId is already set in the database
		$user = UserController::issetId($userId);
		//Checking if the weaponId is already set in the database
		$weapon = WeaponController::issetId($weaponId);
		if($user && $weapon){
	        $val = $request->json()->all();
	        if(isset($val["ammunition"])){

	        	if($val["ammunition"]>=0){
			        //Checking if an entry with the current data (weapon and user id) is already in the database
					$test = OwnController::getAmmunition($weaponId,$userId);
					$test = json_decode($test);
					if(isset($test->error)){
						OwnController::addOwn($val["ammunition"],$userId,$weaponId);
						
	        			return response('Success',200)->header('Content-Type', 'text/plain');
					}
					$query = "UPDATE own SET ammunition = ? WHERE weaponId = ? AND sessionId = ?";
			        $stmt = app('db')->update($query,[$val["ammunition"],$weaponId,$userId]);
					return response('Success',200)->header('Content-Type', 'text/plain');
				}
				return response('Invalid data (>0)',400)->header('Content-Type', 'text/plain');
			}
			return response('Invalid data-name (need "ammunition")',400)->header('Content-Type', 'text/plain');
		}
		return response('sessionId or weaponId not found',400)->header('Content-Type', 'text/plain');
	}

	public static function setAllOwn($id){
        $max = app('db')->select('SELECT MAX(id) AS max FROM weapon ',[]);
        for ($i=0; $i < $max[0]->max; $i++) { 
        	OwnController::addOwn(100, $id, $i);
        }
	}
}
