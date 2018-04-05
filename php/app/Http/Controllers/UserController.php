<?php

namespace App\Http\Controllers;

class UserController
{

   /***********************ATTRIBUTS***********************/
    
    // Identifiant

    private $sessionId = null;
    private $weight = null;
    private $mileage = null;
    private $speed = null;
    private $essence = null;
    private $battery = null;
    private $tpm = null;
    private $oilLevel = null;
    private $liquidLevel = null;
    private $carbodyState = null;
    private $xPos = null;
    private $yPos = null;
    private $bpm = null;
    private $modeId = null;
    private $tireId = null;
    private $radioId = null;
    private $temperature = null;
    private $headlight = null;

    /*********************CONSTRUCTORS*********************/
    
    // inacessible contructor
    function __construct() {}

    /**
     * Factory to build an instance of User from id
     * @param int $id from User (bdd)
     * @return [Name] instance correspond to $id
     * @throws Exception if this id does not exist in the table
     */
    public static function createFromId(){
        session_start();
        $sessionId = session_id();
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = ?', [$sessionId]);
        if(count($user) > 0)
            return $user;
        UserController::add($sessionId,1548,125458,50,88,74,1537,64,28,98,0,0,48,1,2,1,18,0);
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = ?', [$sessionId]);
        return $user;
    }

    /********************CREATE*****************************/

    /**
     * Factory to create an instance of [Name] from parameters
     * @param int $id from [Name] (bdd)
     */
    public static function add($sessionId,$weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight)
    {
        $stmt = app('db')->insert('INSERT INTO User(sessionId,weight,mileage,speed,essence,battery,tpm,oilLevel,liquidLevel,carbodyState,xPos,yPos,bpm,modeId,tireId,radioId,temperature,headlight) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[$sessionId,$weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight]);
    }

    /********************DELETE*****************************/

    /**
     * Delete an instance of User
     */
    public function delete()
    {
        $stmt = app('db')->delete('DELETE FROM user WHERE id = ?');
        $stmt->bindValue(1,$this->id);
        $stmt->execute();
    }

    /********************GETTERS SIMPLES********************/

    /**
     * Get a parameter of an instance of User
     * @param int $name, a parameter of User
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
     * Set a parameter of an instance of User
     * @param int $name, a parameter of User
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
