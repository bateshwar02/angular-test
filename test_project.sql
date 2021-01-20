-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2019 at 09:09 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `master_forms`
--

CREATE TABLE `master_forms` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `shape` varchar(50) NOT NULL,
  `updateddate` date NOT NULL,
  `createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_forms`
--

INSERT INTO `master_forms` (`id`, `name`, `shape`, `updateddate`, `createdon`) VALUES
(1, 'Form1', 'POint1', '2019-01-23', '2019-01-23 18:50:36'),
(2, 'Form2', 'Point2', '2019-01-23', '2019-01-23 18:50:49'),
(3, 'Form3', 'Point3', '2019-01-23', '2019-01-23 18:51:02'),
(4, 'Form4', 'Point4', '2019-01-24', '2019-01-24 20:06:10');

-- --------------------------------------------------------

--
-- Table structure for table `master_user`
--

CREATE TABLE `master_user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `password` varchar(150) NOT NULL,
  `imageURL` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_user`
--

INSERT INTO `master_user` (`id`, `email`, `firstName`, `lastName`, `age`, `password`, `imageURL`) VALUES
(1, 'bnmkrishna123@gmail.com', 'BATESHWAR', 'MISHRA', 28, 'd099d77f42b9abf82a4c764538f288470d2350a5', 'bnm.jpg'),
(2, 'krishbate10@gmail.com', 'Krishna', 'Mishra', 24, '094f6743ec0789b133df88ea7ed313b8c1f6a2ac', 'imageFile-1548183493507.jpeg'),
(3, 'admin@gmail.com', 'Admin', 'Web', 23, '23d42f5f3f66498b2c8ff4c20b8c5ac826e47146', 'imageFile-1548183625129.jpg'),
(4, 'superadmin@gmail.com', 'Super ', 'Admin', 30, '23d42f5f3f66498b2c8ff4c20b8c5ac826e47146', 'imageFile-1548360450169.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `mster_project`
--

CREATE TABLE `mster_project` (
  `id` int(11) NOT NULL,
  `project` varchar(50) NOT NULL,
  `formssubmitted` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `lastupdated` date NOT NULL,
  `createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(225) NOT NULL,
  `count` int(11) NOT NULL,
  `forms` varchar(50) NOT NULL,
  `profile` varchar(50) NOT NULL,
  `symbol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mster_project`
--

INSERT INTO `mster_project` (`id`, `project`, `formssubmitted`, `total`, `lastupdated`, `createdon`, `description`, `count`, `forms`, `profile`, `symbol`) VALUES
(1, 'Project1', 32, 214, '2019-01-24', '2019-01-24 18:29:27', 'Project 1 Description', 123, '2', '2', 'symbol'),
(2, 'Project 2', 213, 12321, '2019-01-24', '2019-01-24 20:08:37', 'sagvjdddddddddd gsajjjjjjjjjjjjjjjjjjjjjjjjjjjjj dhjsfdjjjjjjjjjjjjjjjjjjjjjjjjjjjjj gddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 2312, '1', '4', 'asdsadsa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `master_forms`
--
ALTER TABLE `master_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mster_project`
--
ALTER TABLE `mster_project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `master_forms`
--
ALTER TABLE `master_forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_user`
--
ALTER TABLE `master_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `mster_project`
--
ALTER TABLE `mster_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
