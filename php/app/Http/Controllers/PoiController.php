<?php
namespace App\Http\Controllers;

/**
 * Class Poi
 */
class PoiController {

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $id = null;
	private $name = null;
	private $type = null;
	private $xPos = null;
	private $yPos = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Poi from id
	 * @param int $id from poi (bdd)
	 * @return Poi instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM poi WHERE id = ?',$id);
		return $user;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Poi from parameters
	 * @param int $id from poi (bdd)
	 */
	public static function add($name, $type, $xPos, $yPos)
	{
		app('db')->insert('INSERT INTO poi(name, type, xPos, yPos) VALUES (?,?,?,?)',[$name, $type, $xPos, $yPos]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Poi
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM poi WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Poi
	 * @param int $name, a parameter of Poi
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
	 * Set a parameter of an instance of Poi
	 * @param int $name, a parameter of Poi
	 */
	public function __set($name,$val)
	{
		if(isset($this->$name))
		{
			$this->$name = $val;
		}
	}

	/*******************GETTERS COMPLEXES*******************/
}


