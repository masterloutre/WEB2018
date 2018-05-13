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
    public static function addNewEntry(){
        /*session_start();
        $sessionId = session_id();*/

        UserController::add(8,125458,50,88,74,1537,64,28,98,0,0,48,1,2,1,18,0);
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = (SELECT MAX(sessionId) FROM user)');
        $id = array('id' => $user["0"]->sessionId);
        return json_encode($id);
    }

    /********************CREATE*****************************/

    /**
     * Factory to create an instance of [Name] from parameters
     * @param int $id from [Name] (bdd)
     */
    public static function add($weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight)
    {
        $stmt = app('db')->insert('INSERT INTO User(weight,mileage,speed,essence,battery,tpm,oilLevel,liquidLevel,carbodyState,xPos,yPos,bpm,modeId,tireId,radioId,temperature,headlight) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[$weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight]);
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
    public function getAll($id){
        $user =  UserController::issetId($id);
        if($user)
            return $user;
        $error = array('error' => "Id not found"); 
        return json_encode($error);
    }

    /*public function get($name)
    {
        $user = UserController::addNewEntry();
        echo $name;
        var_dump($user["0"]);
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
        $user = UserController::addNewEntry();
        return $user["0"]->bpm;
    }

    public function getCarbodyState(){
        $user = UserController::addNewEntry();
        return $user["0"]->carbodyState;
    }*/

    /*******************SETTERS SIMPLE**********************/


    /**
     * Set a parameter of an instance of User
     * @param int $name, a parameter of User
     */
    public function set(Request $request, $id)
    {
        /*session_start();
        $sessionId = session_id();*/
        $vals = $request->json()->all();
        $user =  UserController::issetId($id);
        if(count($vals) != 0){  
            if($user){
                $keys = array_keys($vals);
                $issetSpeed = 0;
                foreach ($vals as $key => $name) {
                    if($key != "temperature" && $key != "speed" && $key != "headlight"){
                        unset($vals[$key]);
                    }
                    if($key=="speed")
                        $issetSpeed = 1;
                }
                $keys = array_keys($vals);

                $query = "UPDATE user SET";
                for($i=0;$i<count($vals);$i++){
                    if($i== count($vals)-1){
                        $query .= " $keys[$i] = ?";
                    }
                    else{
                        $query .= " $keys[$i] = ? ,";
                    }
                }
                $query .= " WHERE sessionId = ?";
                $bindValue = [];
                for ($j=0; $j < $i; $j++) {
                        array_push($bindValue, $vals[$keys[$j]]);
                }
                array_push($bindValue, $id);
                $stmt = app('db')->update($query,$bindValue);
                //if the speed is change, we lauch another method who's taking care of the mileage, the xPos, the battery, the oilLevel, the bpm 
                if($issetSpeed == 1){
                    UserController::setInfoFromSpeed($user,$vals["speed"],$id);
                }

                $response = array("success" => "Well done");
                return json_encode($response);
            }
            $response = array("error" => "User id not found in the database");
            return json_encode($response);
        }
        $response = array("error" => "No JSON values send");
        return json_encode($response);
    }

    /**
     * Set a parameter of an instance of User
     * @param int $name, a parameter of User
     */
    public function setInfoFromSpeed($user,$val,$id)
    {
        $moySpeed = ($user["0"]->speed + $val)/2;
        $user["0"]->mileage += $moySpeed/3600; // pour passer de km/h à km/s
        $user["0"]->xPos += $moySpeed/3.6; // pour passer de km/h à m/s
        if($val < 50) // Si on va à moins de 50km/h on passe en électrique
        {
            $user["0"]->battery -= 0.01;
        }
        else // Sinon on reste en thermique
        {
            $user["0"]->oilLevel -= 0.01;
            if($user["0"]->battery < 100) // ET comme la Batmobile est trop cool elle se recharge quand c'est en thermique
            {
                $user["0"]->battery += 0.01;
            }
        }

        $user["0"]->bpm = 42 + $val/5;
        app('db')->update('UPDATE user SET mileage = ?, xPos = ?,battery = ?,oilLevel = ?,bpm = ? WHERE sessionId = ?',[$user["0"]->mileage,$user["0"]->xPos,$user["0"]->battery,$user["0"]->oilLevel,$user["0"]->bpm,$id]);
    }

    /*******************GETTERS COMPLEXES*******************/
    public function getTireWithId($id){
        $tire = TireController::addNewEntry($id);
        return $tire;
    }

    public function issetId($id){
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = ?',[$id]);
        if(count($user)>0)
            return $user;
        return 0;
    }


}
