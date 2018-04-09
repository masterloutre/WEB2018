<?php
namespace App\Http\Controllers;

/**
 * Class Mode
 */
class Mode Controller extends Controller
{

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $id = null;
	private $name = null;
	private $maxSpeed = null;
	private $minSpeed = null;
	private $shield = null;
	private $shieldState = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Mode from id
	 * @param int $id from mode (bdd)
	 * @return Mode instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM mode WHERE id = ?', [$id]);
		
		return $user;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Mode from parameters
	 * @param int $id from mode (bdd)
	 */
	public static function add($name, $maxSpeed, $minSpeed, $shield, $shieldState)
	{
		app('db')->insert('INSERT INTO mode(name, maxSpeed, minSpeed, shield, shieldState) VALUES (?,?,?,?,?)', [$name, $maxSpeed, $minSpeed, $shield, $shieldState]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Mode
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM mode WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Mode
	 * @param int $name, a parameter of Mode
	 */	
	public function __get($name)
	{
		if(isset($this->$name))
		{
			return $this->$name;
		}
	}

	/*******************SETTERS SIMPLE**********************/


	/**
	 * Set a parameter of an instance of Mode
	 * @param int $name, a parameter of Mode
	 */
	public function __set($name, $val)
	{
		if(isset($this->$name))
		{
			$this->$name = $val;
		}
	}

	/*******************GETTERS COMPLEXES*******************/

}