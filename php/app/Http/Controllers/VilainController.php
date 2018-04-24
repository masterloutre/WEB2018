<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
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
		if(count($user)>0){
			return $user;
		}
		$response = array('error' => "Id not found");
        return json_encode($response);
	}

	/********************CREATE*****************************/

	/**
	 * Factory to create an instance of Vilain from parameters
	 * @param int $id from Vilain (bdd)
	 */
	public function add(Request $request)
	{
        $vals = $request->json()->all();
        var_dump($vals);
		/*app('db')->insert('INSERT INTO vilain(name,firstname,nickname,age,sex,size,crimeNb,dangerousness,xPos,yPos) VALUES (?,?,?,?,?,?,?,?,?,?)',[$name,$firstname,$nickname,$age,$sex,$size,$crimeNb,$dangerousness,$xPos,$yPos]);*/
	}

	/********************DELETE*****************************/

	/**
	 * Delete an instance of Vilain
	 */
	public function delete($id)
	{
		$stmt = app('db')->delete('DELETE FROM vilain WHERE id = ?',[$id]);
       	$response = array("success" => "Delete complete");
       	return json_encode($response);
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


	public function patchVilain(Request $request, $id){
        $vals = $request->json()->all();
        $keys = array_keys($vals);
        var_dump($keys);
        $query = "UPDATE vilain SET";
        for($i=0;$i<count($vals);$i++){
        	if($i== count($vals)-1){
        		$query .= " $keys[$i] = ?";
        	}
        	else{
        		$query .= " $keys[$i] = ? ,";
        	}
        }
        $query .= " WHERE id = ?";
        $bindValue = [];
        for ($j=0; $j < $i; $j++) {
        	array_push($bindValue, $vals[$keys[$j]]);
        }
        array_push($bindValue, $id);
        $stmt = app('db')->update($query,$bindValue);
       	$response = array("success" => "Well done");
       	return json_encode($response);
	}
}
