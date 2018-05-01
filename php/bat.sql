-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 28 avr. 2018 à 14:40
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `batprojet`
--

-- --------------------------------------------------------

--
-- Structure de la table `mode`
--

DROP TABLE IF EXISTS `mode`;
CREATE TABLE IF NOT EXISTS `mode` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `maxSpeed` int(11) DEFAULT NULL,
  `minSpeed` int(11) DEFAULT NULL,
  `shield` tinyint(1) DEFAULT NULL,
  `shieldState` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `mode`
--

INSERT INTO `mode` (`id`, `name`, `maxSpeed`, `minSpeed`, `shield`, `shieldState`) VALUES
(1, 'Fight', 800, 0, 1, 50),
(2, 'Leisure', 300, 0, 0, 50);

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `message` text,
  `emergency` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `autor`, `message`, `emergency`) VALUES
(1, 'James Gordon', 'A Wayne Enterprises robbery is in progress. Request of reinforcements.', 4),
(2, 'Mackenzie \"Hardback\" Bock', 'The Joker would have been seen in Ace Chemicals. Request of immediate intervention.', 5),
(3, 'Carlos Alvarez', 'Civilian\'s aggression was indicated in the following street.', 2),
(4, 'Gerard \"Jerry\" Hennelly', 'A fight would have started in a nightclub there is 5 minutes.', 1),
(5, 'Donald Peak', 'An individual was poisoned two hours ago. Poisin Ivy is suspected. Gather your strengths and find her.', 5),
(6, 'Officer Xue', 'An armed man has just killed two people from Brideshead. Request of intervention.', 3),
(7, 'Nora Fields', 'A call has just testified of a conjugal act of violence by a drunk man in two streets of you.', 2),
(8, 'Stacy', 'A man was stabbed in the middle of the street to Burnley. The suspect would be fair, medium-sized and carrying flashy clothes.', 2),
(9, 'Rebecca Mulcahey', 'Demand of reinforcements, Lex Luthor would have appeared in Miller Harbor.', 5),
(10, 'Catwoman', 'Where are you meow-darling ? ', 0);

-- --------------------------------------------------------

--
-- Structure de la table `own`
--

DROP TABLE IF EXISTS `own`;
CREATE TABLE IF NOT EXISTS `own` (
  `ammunition` int(11) DEFAULT NULL,
  `sessionId` varchar(255) NOT NULL,
  `weaponId` int(11) NOT NULL,
  PRIMARY KEY (`sessionId`,`weaponId`),
  KEY `FK_own_weaponId` (`weaponId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `poi`
--

DROP TABLE IF EXISTS `poi`;
CREATE TABLE IF NOT EXISTS `poi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `xPos` int(11) DEFAULT NULL,
  `yPos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `poi`
--

INSERT INTO `poi` (`id`, `name`, `type`, `xPos`, `yPos`) VALUES
(1, 'Park Row', 'Alley', 0, 0),
(2, 'Wayne Enterprises', 'Company', 0, 0),
(3, 'Ace Chemicals', 'Factory', 0, 0),
(4, 'Amusement Mile', 'Park', 0, 0),
(5, 'Archie Goodwin International Airport ', 'Airport', 0, 0),
(6, 'Gotham City General Hospital ', 'Hospital', 0, 0),
(7, 'Gotham City Police Headquarters', 'Justice', 0, 0),
(8, 'Gotham Public Library ', 'Library', 0, 0),
(9, 'Robinson Park ', 'Park', 0, 0),
(10, 'Gotham Academy ', 'School', 0, 0),
(11, 'St. Michael\'s Square', 'Park', 0, 0),
(12, 'Hall of Justice', 'Justice', 0, 0),
(13, 'Gotham State Penitentiary ', 'Justice', 0, 0),
(14, 'Iceberg Lounge ', 'Nightclub', 0, 0),
(15, 'Club Vesuvius', 'Nightclub', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `radio`
--

DROP TABLE IF EXISTS `radio`;
CREATE TABLE IF NOT EXISTS `radio` (
  `id` int(11) NOT NULL,
  `frequency` float DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `songFile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `radio`
--

INSERT INTO `radio` (`id`, `frequency`, `name`, `songFile`) VALUES
(1, 82.55, 'CNN', 'ceci_est_un_lien_vers_la_radio'),
(2, 122.55, 'BBC', 'ceci_est_un_lien_vers_la_radio'),
(3, 115.25, 'ABC', 'ceci_est_un_lien_vers_la_radio'),
(4, 95.75, 'FOX', 'ceci_est_un_lien_vers_la_radio');

-- --------------------------------------------------------

--
-- Structure de la table `tire`
--

DROP TABLE IF EXISTS `tire`;
CREATE TABLE IF NOT EXISTS `tire` (
  `id` int(11) NOT NULL,
  `pressure` int(11) DEFAULT NULL,
  `radius` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tire`
--

INSERT INTO `tire` (`id`, `pressure`, `radius`, `width`) VALUES
(1, 3, 150, 60),
(2, 2, 80, 40),

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `sessionId` varchar(255) NOT NULL,
  `weight` int(11) DEFAULT NULL,
  `mileage` int(11) DEFAULT NULL,
  `speed` int(11) DEFAULT NULL,
  `essence` int(11) DEFAULT NULL,
  `battery` int(11) DEFAULT NULL,
  `tpm` int(11) DEFAULT NULL,
  `oilLevel` int(11) DEFAULT NULL,
  `liquidLevel` int(11) DEFAULT NULL,
  `carbodyState` int(11) DEFAULT NULL,
  `xPos` int(11) DEFAULT NULL,
  `yPos` int(11) DEFAULT NULL,
  `bpm` int(11) DEFAULT NULL,
  `modeId` int(11) DEFAULT NULL,
  `tireId` int(11) DEFAULT NULL,
  `radioId` int(11) DEFAULT NULL,
  `temperature` int(11) DEFAULT NULL,
  `headlight` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`sessionId`),
  KEY `FK_user_id` (`modeId`),
  KEY `FK_user_tireId` (`tireId`),
  KEY `FK_user_radioId` (`radioId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`sessionId`, `weight`, `mileage`, `speed`, `essence`, `battery`, `tpm`, `oilLevel`, `liquidLevel`, `carbodyState`, `xPos`, `yPos`, `bpm`, `modeId`, `tireId`, `radioId`, `temperature`, `headlight`) VALUES
('723ck0fd8mjcfp3khkvd0s2imt', 1548, 125458, 50, 88, 74, 1537, 64, 28, 98, 0, 0, 48, 1, 2, 1, 18, 0),
('beflgn735kjpamcrcn0plc95h4', 1500, 200000, 500, 80, 50, 2500, 80, 20, 99, 0, 0, 120, 1, 2, 1, 25, 0),
('gupfr3n08jajou93bb3hktkoli', 1548, 125458, 50, 88, 74, 1537, 64, 28, 98, 0, 0, 48, 1, 2, 1, 18, 0),
('ls8ej5s88fbo5n6uv6gm4p4dhq', 1548, 125458, 50, 88, 74, 1537, 64, 28, 98, 0, 0, 48, 1, 2, 1, 18, 0),
('r491ua925kde04jma8p898djhb', 1548, 125458, 50, 88, 74, 1537, 64, 28, 98, 0, 0, 48, 1, 2, 1, 18, 0);

-- --------------------------------------------------------

--
-- Structure de la table `vilain`
--

DROP TABLE IF EXISTS `vilain`;
CREATE TABLE IF NOT EXISTS `vilain` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `crimeNb` int(11) DEFAULT NULL,
  `dangerousness` int(11) DEFAULT NULL,
  `xPos` int(11) DEFAULT NULL,
  `yPos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vilain`
--

INSERT INTO `vilain` (`id`, `name`, `firstname`, `nickname`, `age`, `sex`, `size`, `crimeNb`, `dangerousness`, `xPos`, `yPos`) VALUES
(0, '', '', 'Joker', 25, 0, 15, 1500, 10, 0, 0),
(1, 'Isley ', 'Pamela', 'Poisin Ivy', 21, 1, 170, 31, 2, 0, 0),
(3, 'Quinzel', 'Harley', 'Harley Quinn', 19, 1, 162, 70, 3, 0, 0),
(4, 'Chesterfield Cobblepot', 'Oswald', 'Penguin', 44, 0, 175, 142, 4, 0, 0),
(5, 'Nigma', 'Edward', 'The Ridler', 35, 0, 183, 289, 5, 0, 0),
(6, NULL, NULL, 'Bane', 27, 0, 220, 456, 6, 0, 0),
(7, 'Crane', 'Jonathan', 'Scarecrow', 41, 0, 190, 721, 7, 0, 0),
(8, 'Dent', 'Harvey', 'Two-Face', 35, 0, 189, 876, 8, 0, 0),
(9, 'Robinson', 'Holly', 'Catwoman', 25, 1, 172, 666, 8, 0, 0),
(10, NULL, NULL, 'Ra\'s Al Ghul', 30, 0, 185, 1117, 9, 0, 0),
(11, 'Waller', 'Amanda', NULL, 46, 1, 165, 12, 1, 0, 0),
(12, 'Knox', 'Curtis', 'Vandal Savage', 42, 0, 190, 48, 2, 0, 0),
(13, NULL, NULL, 'Cheetah', 25, 1, 170, 50, 3, 0, 0),
(14, 'Black', 'Adam', NULL, 50, 0, 192, 82, 4, 0, 0),
(15, NULL, NULL, 'Doomsday', NULL, 0, 300, 451, 6, 0, 0),
(16, NULL, NULL, 'Reverse Flash', 25, 0, 186, 588, 5, 0, 0),
(17, 'Thawne', 'Eobard', 'Professor Zoom', 25, 0, 186, 524, 5, 0, 0),
(18, 'Slade', 'Wilson', 'Deathstroke', 32, 0, 200, 913, 7, 0, 0),
(19, 'Sinestro', 'Thaal', 'White Lantern', 34, 0, 177, 682, 7, 0, 0),
(20, NULL, NULL, 'Darkseid', 39, 0, 200, 1205, 9, 0, 0),
(21, 'Luthor', 'Lex', NULL, 40, 0, 185, 923, 9, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `weapon`
--

DROP TABLE IF EXISTS `weapon`;
CREATE TABLE IF NOT EXISTS `weapon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `maxAmmuniton` int(11) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `weapon`
--

INSERT INTO `weapon` (`id`, `name`, `maxAmmuniton`, `rate`) VALUES
(0, 'RPG', 1, 100),
(1, 'Revolver', 20, NULL),
(2, 'AK-47', 50, NULL),
(3, 'Scrambler', NULL, 25),
(4, 'Shotgun', 70, NULL),
(5, 'Rifle', 15, NULL),
(6, 'Rifle with electromagnetic impulse', 1, 100),
(7, 'Blasting gel', NULL, 80),
(8, 'Smoke grenade', NULL, 100),
(9, 'Grenade', NULL, 90),
(10, 'Batarang', NULL, 70),
(11, 'Cutting Batarang', NULL, 80),
(12, 'Thrower of sticky bomb', NULL, 50),
(13, 'Explosive Batarang', NULL, 90),
(14, 'Electrocuting Batarang', NULL, 90),
(15, 'Remote controlled Batarang', NULL, 95),
(16, 'Sonic Batarang', NULL, 95);

-- --------------------------------------------------------

--
-- Structure de la table `weather`
--

DROP TABLE IF EXISTS `weather`;
CREATE TABLE IF NOT EXISTS `weather` (
  `t` int(11) NOT NULL,
  `temperature` int(11) DEFAULT NULL,
  `humidity` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `wind` int(11) DEFAULT NULL,
  PRIMARY KEY (`t`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `weather`
--

INSERT INTO `weather` (`t`, `temperature`, `humidity`, `state`, `wind`) VALUES
(1, 17, 74, 2, 11),
(2, 30, 20, 8, 5),
(3, 0, 30, 1, 60),
(4, -20, 5, 0, 30),
(5, 80, 0, 9, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `own`
--
ALTER TABLE `own`
  ADD CONSTRAINT `FK_own_sessionId` FOREIGN KEY (`sessionId`) REFERENCES `user` (`sessionId`),
  ADD CONSTRAINT `FK_own_weaponId` FOREIGN KEY (`weaponId`) REFERENCES `weapon` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`modeId`) REFERENCES `mode` (`id`),
  ADD CONSTRAINT `FK_user_radioId` FOREIGN KEY (`radioId`) REFERENCES `radio` (`id`),
  ADD CONSTRAINT `FK_user_tireId` FOREIGN KEY (`tireId`) REFERENCES `tire` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
