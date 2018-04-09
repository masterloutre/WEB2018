<?php
namespace App\Http\Controllers;

/**
 * Class Weather
 */
class WeatherController {

	/***********************ATTRIBUTS***********************/
	
	private $t = null;
	private $temperature = null;
	private $humidity = null;
	private $state = null;
	private $wind = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Weather from id
	 * @param int $id from Weather (bdd)
	 * @return Weather instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM weather WHERE t = ?', [$id]);
		
		return $user;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Weather from parameters
	 * @param int $id from Weather (bdd)
	 */
	public static function add($t,$temperature,$humidity,$state,$wind)
	{
		app('db')->insert('INSERT INTO weather(t,temperature,humidity,state,wind) VALUES (?,?,?,?,?)',[$t,$temperature,$humidity,$state,$wind]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Weather
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM weather WHERE t = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Weather
	 * @param int $name, a parameter of Weather
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
	 * Set a parameter of an instance of Weather
	 * @param int $name, a parameter of Weather
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
