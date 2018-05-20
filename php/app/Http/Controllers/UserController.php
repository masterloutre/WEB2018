<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Contracts\Routing\ResponseFactory;
use Response;

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

        UserController::add(1050,rand(150,1000),rand(50,150),rand(60,100),rand(60,100),rand(1000,3000),64,28,rand(1,100),0,0,48,1,2,1,18,0);
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = (SELECT MAX(sessionId) FROM user)');
        OwnController::setAllOwn($user["0"]->sessionId);
        return response()->json(['sessionId' => $user["0"]->sessionId],200);
    }

    /********************CREATE*****************************/

    /**
     * Factory to create an instance of [Name] from parameters
     * @param int $id from [Name] (bdd)
     */
    public static function add($weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight)
    {
        $stmt = app('db')->insert('INSERT INTO user(weight,mileage,speed,essence,battery,tpm,oilLevel,liquidLevel,carbodyState,xPos,yPos,bpm,modeId,tireId,radioId,temperature,headlight) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[$weight,$mileage,$speed,$essence,$battery,$tpm,$oilLevel,$liquidLevel,$carbodyState,$xPos,$yPos,$bpm,$modeId,$tireId,$radioId,$temperature,$headlight]);
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
        if($user){
             return response()->json([
                    'sessionId' => $user["0"]->sessionId,
                    'weight' => $user["0"]->weight,
                    'mileage' => $user["0"]->mileage,
                    'speed' => $user["0"]->speed,
                    'essence' => $user["0"]->essence,
                    'battery' => $user["0"]->battery,
                    'tpm' => $user["0"]->tpm,
                    'oilLevel' => $user["0"]->oilLevel,
                    'liquidLevel' => $user["0"]->liquidLevel,
                    'carbodyState' => $user["0"]->carbodyState,
                    'xPos' => $user["0"]->xPos,
                    'yPos' => $user["0"]->yPos,
                    'bpm' => $user["0"]->bpm,
                    'modeId' => $user["0"]->modeId,
                    'tireId' => $user["0"]->tireId,
                    'radioId' => $user["0"]->radioId,
                    'temperature' => $user["0"]->temperature,
                    'headlight' => $user["0"]->headlight
            ],200); 
        }

        return response('Id not found',400)->header('Content-Type', 'text/plain');
    }

    /*******************SETTERS SIMPLE**********************/


    /**
     * Set a parameter of an instance of User
     * @param int $name, a parameter of User
     */
    public function set(Request $request, $id)
    {
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

                return response('Success',200)->header('Content-Type', 'text/plain');
            }
            return response('User id not found in the database',400)->header('Content-Type', 'text/plain');
        }

        return response('No JSON values send',400)->header('Content-Type', 'text/plain');
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
            if($user["0"]->battery < 0){$user["0"]->battery = 0;}
        }
        else // Sinon on reste en thermique
        {
            $user["0"]->essence -= 0.01;
            if($user["0"]->essence < 0){$user["0"]->essence = 0;}
            if($user["0"]->battery < 100) // ET comme la Batmobile est trop cool elle se recharge quand c'est en thermique
                {
                    $user["0"]->battery += 0.01;
            }
        }

        $user["0"]->bpm = 42 + $val/5;
        if($user["0"]->bpm > 300){$user["0"]->bpm = 300;}
            app('db')->update('UPDATE user SET mileage = ?, xPos = ?,battery = ?,essence = ?,bpm = ? WHERE sessionId = ?',[$user["0"]->mileage,$user["0"]->xPos,$user["0"]->battery,$user["0"]->essence,$user["0"]->bpm,$id]);
    }

    public function setCarbodyState(Request $request, $id)
    {
        $vals = $request->json()->all();
        $user =  UserController::issetId($id);
        if(isset($vals['carbodyState']) && $user)
        {
            $damage = $vals['carbodyState'];
            if($damage<0)
                $damage = 0;
            if($damage>100)
                $damage = 100;
            app('db')->update('UPDATE user SET carbodyState = ? WHERE sessionId = ?',[$damage,$id]);
            return response('Success',200)->header('Content-Type', 'text/plain');
        }
        return response('Invalid parameter name',400)->header('Content-Type', 'text/plain');
    }

    /*******************GETTERS COMPLEXES*******************/
    public function getTireWithId($id){
        $tire = TireController::addNewEntry($id);
        return $tire;
    }

    public static function issetId($id){
        $user = app('db')->select('SELECT * FROM user WHERE sessionId = ?',[$id]);
        if(count($user)>0)
            return $user;
        return 0;
    }
}
