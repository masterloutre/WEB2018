<?php
namespace App\Http\Controllers;

/**
 * Weapon
 */
class WeaponController {

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $id = null;
	private $name = null;
	private $maxAmmuniton = null;
	private $rate = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Weapon from id
	 * @param int $id from Weapon (bdd)
	 * @return [Name] instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function issetId($id){
		$user = app('db')->select('SELECT * FROM weapon WHERE id = ?', [$id]);
		if(count($user)>0)
			return $user;
        return 0;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Weapon from parameters
	 * @param int $id from Weapon (bdd)
	 */
	public static function add($name,$maxAmmuniton,$rate)
	{
		app('db')->insert('INSERT INTO weapon(name,maxAmmuniton,rate) VALUES (?,?,?)',[$name,$maxAmmuniton,$rate]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Weapon
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM weapon WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Weapon
	 * @param int $name, a parameter of Weapon
	 */	
	public static function getAllWeapons($userId)
	{
		$query = "SELECT * FROM weapon INNER JOIN own ON weapon.id = own.weaponId WHERE own.sessionId = ?";
		$weapons = app('db')->select($query,[$userId]);
		if(count($weapons)>0){
			return response()->json([
	                    $weapons
	            ],200);
		}

        return response('Id not found',400)->header('Content-Type', 'text/plain');
	}

	/*******************SETTERS SIMPLE**********************/


	/**
	 * Set a parameter of an instance of Weapon
	 * @param int $name, a parameter of Weapon
	 */
	

	/*******************GETTERS COMPLEXES*******************/
}
