<?php
require_once 'MyPDO.my_db.include.php'; //TO DO : à modifier

/**
 * Classe Movie
 */
class User{

	/***********************ATTRIBUTS***********************/
	
	// Identifiant
	private $idSession = null;
	private $poids = null;
	private $kilometrage = null;
	private $vitesse = null;
	private $essence = null;
	private $batterie = null;
	private $tpm = null;
	private $niveauHuile = null;
	private $niveauLiquide = null;
	private $etatCarrosserie = null;
	private $pos_x = null;
	private $pos_y = null;
	private $bpm = null;
	private $id_mode = null;
	private $id_pneu = null;
	private $id_radio = null;
	
	/*********************CONSTRUCTEURS*********************/
	
	// Constructeur non accessible
	function __construct() {}

	/**
	 * Usine pour fabriquer une instance de Movie à partir d'un id (via la bdd)
	 * @param int $id identifiant du film à créer (bdd)
	 * @return Movie instance correspondant à $id
	 * @throws Exception s'il n'existe pas cet $id dans a bdd
	 */
	public static function createFromId($idSession){
		// TO DO
		$stmt = MyPDO::getInstance()->prepare("SELECT * FROM user WHERE idSession=?");
		$stmt->bindValue(1,$idSession);
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'User');
		if (($object = $stmt->fetch()) !== false){
			return $object;
		}
		else
			throw new Exception("<strong>Error: (id:".$id."</strong>");
	}

	/********************GETTERS SIMPLES********************/
	
	public function __get($name){
		if(isset($this->$name)){
			return $this->$name;
		}
	}

	/**
	 * Getter sur l'identifiant
	 * @return int $id
	 */
	public function getIdSession() {
		// TO DO
		return (string)$this->idSession;
	}

	/**
	 * Getter sur le titre
	 * @return string $title
	 */
	public function getPoids() {
		// TO DO
		return (int)$this->poids;
	}

	/**
	 * Getter sur la date de sortie
	 * @return string $releaseDate
	 */
	public function getKilometrage() {
		// TO DO
		return (int)$this->kilometrage;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getVitesse() {
		// TO DO
		return (int)$this->vitesse;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getEssence() {
		// TO DO
		return (int)$this->essence;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getBatterie() {
		// TO DO
		return (int)$this->batterie;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getTpm() {
		// TO DO
		return (int)$this->tpm;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getNiveauHuile() {
		// TO DO
		return (int)$this->niveauHuile;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getNiveauLiquide() {
		// TO DO
		return (int)$this->niveauLiquide;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getEtatCarrosserie() {
		// TO DO
		return (int)$this->etatCarrosserie;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getPos_X() {
		// TO DO
		return (int)$this->pos_x;
	}

	/**
	 * Getter sur l'identifiant du pays
	 * @return string $idCountry
	 */
	public function getPos_Y() {
		// TO DO
		return (int)$this->pos_y;
	}



	/*******************GETTERS COMPLEXES*******************/

	/**
	 * Récupère tous les enregistrements de la table Movie de la bdd
	 * Tri par ordre décroissant sur la date de sortie
	 * puis par ordre alphabétique sur le titre
	 * @return array<Movie> liste d'instances de Movie
	 */
	public static function getAll() {
		// TO DO
		$stmt = MyPDO::getInstance()->prepare("
			SELECT * FROM Movie ORDER BY title ASC
");
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS,'Movie');
		if (($object = $stmt->fetchAll()) !== false)
			return $object;
	}

	/**
	 * Récupère tous les films du réalisateur/de la réalisatrice
	 * Tri par ordre décroissant sur la date de sortie
	 * puis par ordre alphabétique sur le titre sur le titre
	 * @param int $idDirector identifiant du réalisateur/de la réalisatrice
	 * @return array<Movie> liste d'instances de Movie
	 */
	public static function getFromDirectorId($idDirector){
		//TO DO next : #04 Jointure Cast - Movie
		$stmt = MyPDO::getInstance()->prepare("
			SELECT m.* FROM movie m 
				INNER JOIN director d
			    	ON m.id = d.idMovie
			    WHERE d.idDirector = ?
                	ORDER BY m.releaseDate DESC, m.title
");
		$stmt->bindValue(1,$idDirector);
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'Movie');
		if (($object = $stmt->fetchAll()) !== false){
			return $object;
		}
		else
			throw new Exception("<strong>Error: (id:".$id."</strong>");
	}

	/**
	 * Récupère tous les films de l'act.eur.rice avec son rôle pour chaque
	 * Tri par ordre décroissant sur la date de sortie
	 * puis dans l'ordre alphabétique sur le titre
	 * @param int $idActor identifiant l'act.eur.rice
	 * @return array<Movie> liste d'instances de Movie
	 */
	public static function getFromActorId($idActor){
		// TO DO next : #04 Jointure Cast - Movie
		$stmt = MyPDO::getInstance()->prepare("
			SELECT m.*, a.name FROM movie m	
				INNER JOIN actor a
			    	ON m.id = a.idMovie
			    WHERE a.idActor = ?
			    	ORDER BY m.releaseDate DESC, m.title ASC
");
		$stmt->bindValue(1,$idActor);
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'Movie');
		if (($object = $stmt->fetchAll()) !== false){
			return $object;
		}
		else
			throw new Exception("<strong>Error: (id:".$id."</strong>");
	}

	/**
	 * Récupère les genres du film courant ($this)
	 * Tri par ordre alphabétique
	 * @return array<Genre> liste d'instances de Genre
	 */
	public function getGenres() {
		// TO DO next : #05 Classe Genre
		$stmt = MyPDO::getInstance()->prepare("
			SELECT g.* FROM genre g
				INNER JOIN moviegenre mg
			    	ON g.id = mg.idGenre
			    INNER JOIN movie m 
			    	ON mg.idMovie = m.id
			    WHERE m.id = ?
");
		$stmt->bindValue(1,$this->getId());
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS,'Genre');
		if (($object = $stmt->fetchAll()) !== false)
			return $object;
	}
	/**
	 * Récupère tous les films produit dans le pays $code
	 * Tri par ordre alphabétique selon le titre du film
	 * @param  $code identifiant du pays
	 * @return array<Movie> liste d'instances de Movie
	 */
	public static function getMoviesFromCode($code) {
		// TO DO next : #04 Jointure Cast - Movie
		$stmt = MyPDO::getInstance()->prepare("
			SELECT m.* FROM movie m 
			    INNER JOIN country c
			    	ON m.idCountry = c.code
			    WHERE c.code = ?
                	ORDER BY m.title ASC
");
		$stmt->bindValue(1,$code);
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'Movie');
		if (($object = $stmt->fetchAll()) !== false){
			return $object;
		}
		else
			throw new Exception("<strong>Error: (Code:".$code."</strong>");
	}

	/**
		*Récupére tous les films répondant aux conditions des paramètres
		*Tri par ordre alphabetique
		* @param $titre portion du titre du film
				 $firstDate et $secondDate pour choisir un intervalle d'année de publication des films
				 $country Pays de création du film
				 $cast portion du nom d'un des membres du cast
		* @return array<Movie> liste d'instances de Movie
	*/

	public static function getMoviesFromResearch($titre, $firstDate, $secondDate, $genres, $country, $cast){
		if($firstDate == ''){ /* Dans le cas ou firstDate n'est pas définie par l'utilisateur, on lui affecte une valeur par défaut  */ 
			$firstDate = '1900-01-01';
		}
		if($secondDate == ''){
				$secondDate = date('Y-m-d');
		}
		$query = "SELECT DISTINCT m.* FROM  movie m 
					LEFT JOIN actor a 
						ON m.id = a.idMovie 
					LEFT JOIN cast c 
						ON a.idActor = c.id
					LEFT JOIN moviegenre mg
						ON m.id = mg.idMovie
					LEFT JOIN country co
						ON m.idCountry = co.code
					WHERE m.title LIKE ? 
						AND (m.releaseDate BETWEEN ? AND ?)
						AND co.name LIKE ?
						
		";/*AND CONCAT(c.firstname,' ',c.lastname) LIKE ?*/

		for ($i=0; $i < count($genres); $i++) {
			if($i == 0 && count($genres)!=1){
				$query .= "AND (mg.idGenre = ? ";
			}
			elseif ($i==0 && count($genres)==1) {
				$query .= "AND mg.idGenre = ? ";
			}
			else if($i == count($genres)-1){
				$query .= "OR mg.idGenre = ?) ";
			}
			else{
				$query .= "OR mg.idGenre = ? ";
			}
		}
		if($cast != '') /* On gère le cas du cast à part car dans le cas où il n'y a pas d'acteurs pour un film, cela peut poser problème */ 
			$query .= "AND CONCAT(c.firstname,' ',c.lastname) LIKE ?";
		$stmt = MyPDO::getInstance()->prepare($query);
		$stmt->bindValue(1,"%$titre%");
		$stmt->bindValue(2,(string)$firstDate);
		$stmt->bindValue(3,(string)$secondDate);
	    $stmt->bindValue(4,"%$country%");
		for ($i=0; $i < count($genres); $i++) { 
			$stmt->bindValue($i+5,(int)$genres[$i]);
		}
		if($cast != ''){ /* On bind la value pour le cast seulement si la condition sur celui ci est présent dans la requête */
			$stmt->bindValue(($i+5),"%$cast%");
		}
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'Movie');
		if (($object = $stmt->fetchAll()) !== false){
			return $object;
		}
		else
			throw new Exception("<strong>Error: (Code:".$code."</strong>");
	}

	/* Modification dans la base movie */
	public function setTitle($newTitle) {
		$stmt = MyPDO::getInstance()->prepare("
			UPDATE movie SET title = ? WHERE id = ?
		");
		$stmt->bindValue(1,$newTitle);
		$stmt->bindValue(2,$this->id);
		$stmt->execute();
		$this->title = $newTitle;
	}
	public function setIdCountry($idCountry) {
		$stmt = MyPDO::getInstance()->prepare("
			UPDATE movie SET idCountry = ? WHERE id = ?
		");
		$stmt->bindValue(1,$idCountry);
		$stmt->bindValue(2,$this->id);
		$stmt->execute();
		
	}
	public function setReleaseDate($releaseDate) {
		$stmt = MyPDO::getInstance()->prepare("
			UPDATE movie SET releaseDate = ? WHERE id = ?
		");
		$stmt->bindValue(1,$releaseDate);
		$stmt->bindValue(2,$this->releaseDate);
		$stmt->execute();
	}

 	/* Suppresion de films */
	public function deleteMovie($id){
		echo "OOOOOOOOooooOOOO";
		$stmt = MyPDO::getInstance()->prepare("
			DELETE FROM movie WHERE id = ?
		");
		$stmt->bindValue(1,$this->id);
		$stmt->execute();
	}
}
