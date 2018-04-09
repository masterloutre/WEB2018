<?php
namespace App\Http\Controllers;
/**
 * Class Vilain
 */
class VilainController {

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $id = null;
	private $name = null;
	private $firstname = null;
	private $nickname = null;
	private $age = null;
	private $sex = null;
	private $size = null;
	private $crimeNb = null;
	private $dangerousness = null;
	private $xPos = null;
	private $yPos = null;

	/* [ champs de la table ] */

	/*********************CONSTRUCTORS*********************/
	
	// inacessible contructor
	function __construct() {}

	/**
	 * Factory to build an instance of Vilain from id
	 * @param int $id from Vilain (bdd)
	 * @return [Name] instance correspond to $id
	 * @throws Exception if this id does not exist in the table
	 */
	public static function createFromId($id){
		$user = app('db')->select('SELECT * FROM vilain WHERE id = ?', [$id]);
		
		return $user;
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Vilain from parameters
	 * @param int $id from Vilain (bdd)
	 */
	public static function add($name,$firstname,$nickname,$age,$sex,$size,$crimeNb,$dangerousness,$xPos,$yPos)
	{
		app('db')->insert('INSERT INTO vilain(name,firstname,nickname,age,sex,size,crimeNb,dangerousness,xPos,yPos) VALUES (?,?,?,?,?,?,?,?,?,?)',[$name,$firstname,$nickname,$age,$sex,$size,$crimeNb,$dangerousness,$xPos,$yPos]);
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Vilain
	 */
	public function delete()
	{
		app('db')->delete('DELETE FROM vilain WHERE id = ?',[$this->id]);
	}

	/********************GETTERS SIMPLES********************/

	/**
	 * Get a parameter of an instance of Vilain
	 * @param int $name, a parameter of Vilain
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
	 * Set a parameter of an instance of Vilain
	 * @param int $name, a parameter of Vilain
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
