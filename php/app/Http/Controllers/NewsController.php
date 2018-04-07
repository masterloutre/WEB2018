<?php
namespace App\Http\Controllers;

/**
 * Class News
 */
class NewsController {

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $id = null;
	private $autor = null;
	private $message = null;
	private $emergency = null;

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of News from id
	 * @param int $id from news (bdd)
	 * @return News instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM news WHERE id = ?', [$id]);
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of News from parameters
	 * @param int $id from news (bdd)
	 */
	public static function add($autor, $message, $emergency)
	{
		app('db')->insert('INSERT INTO news(autor, message, emergency) VALUES (?,?,?)',[$autor, $message, $emergency]);

	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of News
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM news WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of News
	 * @param int $name, a parameter of News
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
	 * Set a parameter of an instance of News
	 * @param int $name, a parameter of News
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