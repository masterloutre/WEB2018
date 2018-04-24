<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

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
    public function get($name)
    {
        $user = UserController::createFromId();
        /*echo $name;
        var_dump($user["0"]);*/
        switch ($name) {
            case 'speed':
                $speed = array('speed' => $user["0"]->speed);
                return json_encode($speed);
            case 'gas':
                $gas = array('essence' => $user["0"]->essence);
                return json_encode($gas);
            case 'km':
                $km = array('mileage' => $user["0"]->mileage);
                return json_encode($km);
            case 'airconditioner':
                $aC = array('temperature' => $user["0"]->temperature);
                return json_encode($aC);
            case 'tires':
                return UserController::getTireWithId($user["0"]->tireId);
            case 'headlights':
                $headlight = array('headlight' =>$user["0"]->headlight);
                return json_encode($headlight);
            default:
                # code...
                break;
        }
    }

    public function getBpm(){
        $user = UserController::createFromId();
        return $user["0"]->bpm;
    }

    public function getCarbodyState(){
        $user = UserController::createFromId();
        return $user["0"]->carbodyState;
    }

    /*******************SETTERS SIMPLE**********************/


    /**
     * Set a parameter of an instance of User
     * @param int $name, a parameter of User
     */
    public function set(Request $request,$name)
    {
        session_start();
        $sessionId = session_id();
        $val = $request->json()->all();
        switch ($name) {
            case 'speed':
                break;
            case 'airconditioner':
                $name = "temperature";
                break;
            case 'headlights':
                $name = "headlight";
                break;
            default:
                return 0;
                break;
        }
        $query = "UPDATE user SET $name = ? WHERE sessionId = ?";
        $stmt = app('db')->update($query,[$val[$name],$sessionId]);
    }

    /*******************GETTERS COMPLEXES*******************/
    public function getTireWithId($id){
        $tire = TireController::createFromId($id);
        return $tire;
    }
}
