<?php
namespace App\Http\Controllers;

/**
 * Class Radio
 */
class RadioController {

	/***********************ATTRIBUTS***********************/
	
	private $id = null;
	private $frequency = null;
	private $name = null;
	private $songFile = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Radio from id
	 * @param int $id from radio (bdd)
	 * @return Radio instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$radio = app('db')->select('SELECT * FROM radio WHERE id = ?', [$id]);
		return $radio;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Radio from parameters
	 * @param int $id from radio (bdd)
	 */
	public static function add($frequency, $name, $songFile)
	{
		app('db')->insert('INSERT INTO radio(frequency, name, songFile) VALUES (?,?,?)',[$frequency, $name, $songFile]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Radio
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM radio WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Radio
	 * @param int $name, a parameter of Radio
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
	 * Set a parameter of an instance of Radio
	 * @param int $name, a parameter of Radio
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