-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 10 Avril 2018 à 16:23
-- Version du serveur :  5.7.14
-- Version de PHP :  7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bat`
--

-- --------------------------------------------------------

--
-- Structure de la table `mode`
--

CREATE TABLE `mode` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `maxSpeed` int(11) DEFAULT NULL,
  `minSpeed` int(11) DEFAULT NULL,
  `shield` tinyint(1) DEFAULT NULL,
  `shieldState` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mode`
--

INSERT INTO `mode` (`id`, `name`, `maxSpeed`, `minSpeed`, `shield`, `shieldState`) VALUES
(1, 'Combat', 800, 0, 1, 50);

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `message` text,
  `emergency` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `own`
--

CREATE TABLE `own` (
  `ammunition` int(11) DEFAULT NULL,
  `sessionId` varchar(255) NOT NULL,
  `weaponId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `poi`
--

CREATE TABLE `poi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `xPos` int(11) DEFAULT NULL,
  `yPos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `radio`
--

CREATE TABLE `radio` (
  `id` int(11) NOT NULL,
  `frequency` float DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `songFile` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `radio`
--

INSERT INTO `radio` (`id`, `frequency`, `name`, `songFile`) VALUES
(1, 82.55, 'CNN', 'ceci_est_un_lien.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `tire`
--

CREATE TABLE `tire` (
  `id` int(11) NOT NULL,
  `pressure` int(11) DEFAULT NULL,
  `radius` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tire`
--

INSERT INTO `tire` (`id`, `pressure`, `radius`, `width`) VALUES
(2, 2, 80, 40);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
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
  `headlight` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
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

CREATE TABLE `vilain` (
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
  `yPos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `vilain`
--

INSERT INTO `vilain` (`id`, `name`, `firstname`, `nickname`, `age`, `sex`, `size`, `crimeNb`, `dangerousness`, `xPos`, `yPos`) VALUES
(0, 'Joker', 'Firstname', 'Nickname', 25, 0, 15, 1500, 5, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `weapon`
--

CREATE TABLE `weapon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `maxAmmuniton` int(11) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `weapon`
--

INSERT INTO `weapon` (`id`, `name`, `maxAmmuniton`, `rate`) VALUES
(0, 'Machingun', 1500, 100);

-- --------------------------------------------------------

--
-- Structure de la table `weather`
--

CREATE TABLE `weather` (
  `t` int(11) NOT NULL,
  `temperature` int(11) DEFAULT NULL,
  `humidity` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `wind` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `mode`
--
ALTER TABLE `mode`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `own`
--
ALTER TABLE `own`
  ADD PRIMARY KEY (`sessionId`,`weaponId`),
  ADD KEY `FK_own_weaponId` (`weaponId`);

--
-- Index pour la table `poi`
--
ALTER TABLE `poi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `radio`
--
ALTER TABLE `radio`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tire`
--
ALTER TABLE `tire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`sessionId`),
  ADD KEY `FK_user_id` (`modeId`),
  ADD KEY `FK_user_tireId` (`tireId`),
  ADD KEY `FK_user_radioId` (`radioId`);

--
-- Index pour la table `vilain`
--
ALTER TABLE `vilain`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `weapon`
--
ALTER TABLE `weapon`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `weather`
--
ALTER TABLE `weather`
  ADD PRIMARY KEY (`t`);

--
-- Contraintes pour les tables exportées
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
