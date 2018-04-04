-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 29 Mars 2018 à 13:15
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
-- Structure de la table `arme`
--

CREATE TABLE `arme` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `munitionMax` int(11) DEFAULT NULL,
  `cadence` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `mechant`
--

CREATE TABLE `mechant` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sexe` tinyint(1) DEFAULT NULL,
  `taille` int(11) DEFAULT NULL,
  `nbCrime` int(11) DEFAULT NULL,
  `dangerosite` int(11) DEFAULT NULL,
  `pos_x` int(11) DEFAULT NULL,
  `pos_y` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `meteo`
--

CREATE TABLE `meteo` (
  `t` int(11) NOT NULL,
  `temperature` int(11) DEFAULT NULL,
  `humidite` int(11) DEFAULT NULL,
  `etat` int(11) DEFAULT NULL,
  `vent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `mode`
--

CREATE TABLE `mode` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `vitesseMax` int(11) DEFAULT NULL,
  `vitesseMin` int(11) DEFAULT NULL,
  `bouclier` tinyint(1) DEFAULT NULL,
  `etatBouclier` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mode`
--

INSERT INTO `mode` (`id`, `nom`, `vitesseMax`, `vitesseMin`, `bouclier`, `etatBouclier`) VALUES
(1, 'Combat', 800, 0, 1, 50);

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `auteur` varchar(255) DEFAULT NULL,
  `message` text,
  `urgence` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pdi`
--

CREATE TABLE `pdi` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pos_x` int(11) DEFAULT NULL,
  `pos_y` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pneu`
--

CREATE TABLE `pneu` (
  `id` int(11) NOT NULL,
  `pression` int(11) DEFAULT NULL,
  `rayon` int(11) DEFAULT NULL,
  `largeur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pneu`
--

INSERT INTO `pneu` (`id`, `pression`, `rayon`, `largeur`) VALUES
(2, 2, 80, 40);

-- --------------------------------------------------------

--
-- Structure de la table `posseder`
--

CREATE TABLE `posseder` (
  `id` int(11) DEFAULT NULL,
  `munition` int(11) DEFAULT NULL,
  `idSession` varchar(255) NOT NULL,
  `id_arme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `radio`
--

CREATE TABLE `radio` (
  `id` int(11) NOT NULL,
  `frequence` float DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `fichierSon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `radio`
--

INSERT INTO `radio` (`id`, `frequence`, `nom`, `fichierSon`) VALUES
(1, 82.55, 'CNN', 'ceci_est_un_lien.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `idSession` varchar(255) NOT NULL,
  `poids` int(11) DEFAULT NULL,
  `kilometrage` int(11) DEFAULT NULL,
  `vitesse` int(11) DEFAULT NULL,
  `essence` int(11) DEFAULT NULL,
  `batterie` int(11) DEFAULT NULL,
  `tpm` int(11) DEFAULT NULL,
  `niveauHuile` int(11) DEFAULT NULL,
  `niveauLiquide` int(11) DEFAULT NULL,
  `etatCarrosserie` int(11) DEFAULT NULL,
  `pos_x` int(11) DEFAULT NULL,
  `pos_y` int(11) DEFAULT NULL,
  `bpm` int(11) DEFAULT NULL,
  `id_mode` int(11) DEFAULT NULL,
  `id_pneu` int(11) DEFAULT NULL,
  `id_radio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`idSession`, `poids`, `kilometrage`, `vitesse`, `essence`, `batterie`, `tpm`, `niveauHuile`, `niveauLiquide`, `etatCarrosserie`, `pos_x`, `pos_y`, `bpm`, `id_mode`, `id_pneu`, `id_radio`) VALUES
('beflgn735kjpamcrcn0plc95h4', 1500, 200000, 500, 80, 50, 2500, 80, 20, 99, 0, 0, 120, 1, 2, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `arme`
--
ALTER TABLE `arme`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mechant`
--
ALTER TABLE `mechant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `meteo`
--
ALTER TABLE `meteo`
  ADD PRIMARY KEY (`t`);

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
-- Index pour la table `pdi`
--
ALTER TABLE `pdi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pneu`
--
ALTER TABLE `pneu`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD PRIMARY KEY (`idSession`,`id_arme`),
  ADD KEY `FK_posseder_id_arme` (`id_arme`);

--
-- Index pour la table `radio`
--
ALTER TABLE `radio`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idSession`),
  ADD KEY `FK_user_id` (`id_mode`),
  ADD KEY `FK_user_id_pneu` (`id_pneu`),
  ADD KEY `FK_user_id_radio` (`id_radio`);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD CONSTRAINT `FK_posseder_idSession` FOREIGN KEY (`idSession`) REFERENCES `user` (`idSession`),
  ADD CONSTRAINT `FK_posseder_id_arme` FOREIGN KEY (`id_arme`) REFERENCES `arme` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`id_mode`) REFERENCES `mode` (`id`),
  ADD CONSTRAINT `FK_user_id_pneu` FOREIGN KEY (`id_pneu`) REFERENCES `pneu` (`id`),
  ADD CONSTRAINT `FK_user_id_radio` FOREIGN KEY (`id_radio`) REFERENCES `radio` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
