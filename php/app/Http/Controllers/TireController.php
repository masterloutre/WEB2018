<?php
namespace App\Http\Controllers;

/**
 * Class Tire
 */
class TireController {

	/***********************ATTRIBUTS***********************/

	private $id = null;
	private $pressure = null;
	private $radius = null;
	private $width = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of tire from id
	 * @param int $id from tire (bdd)
	 * @return [Name] instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM tire WHERE id = ?', [$id]);
		
		return $user;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Tire from parameters
	 * @param int $id from Tire (bdd)
	 */
	public static function add($pressure,$radius,$width)
	{
		app('db')->insert('INSERT INTO tire(pressure,radius,width) VALUES (?,?,?)',[$pressure,$radius,$width]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Tire
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM tire WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Tire
	 * @param int $name, a parameter of Tire
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
	 * Set a parameter of an instance of Tire
	 * @param int $name, a parameter of Tire
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
