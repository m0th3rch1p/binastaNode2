-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: binasta_node
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin@admin.com','$2b$10$F8aZOW1fOBPyzxbXeogGtelc/Mqka/dBbdldO1LNWHXfgnEnJ9osq','2023-07-19 13:45:31','2023-07-19 13:45:31');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_categories`
--

DROP TABLE IF EXISTS `blog_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_categories`
--

LOCK TABLES `blog_categories` WRITE;
/*!40000 ALTER TABLE `blog_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `blog_category_id` bigint unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `post` longtext,
  `image_path` varchar(255) DEFAULT NULL,
  `link_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `country_code` (`country_code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Kenya','Kenya','254','2023-07-19 13:56:44','2023-07-19 13:56:44');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_addresses`
--

DROP TABLE IF EXISTS `distributor_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_addresses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address` (`address`),
  KEY `distributor_id` (`distributor_id`),
  CONSTRAINT `distributor_addresses_ibfk_1` FOREIGN KEY (`distributor_id`) REFERENCES `distributors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_addresses`
--

LOCK TABLES `distributor_addresses` WRITE;
/*!40000 ALTER TABLE `distributor_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_order_packages`
--

DROP TABLE IF EXISTS `distributor_order_packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_order_packages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_order_id` bigint unsigned NOT NULL,
  `package_id` bigint unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `amount` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_order_packages`
--

LOCK TABLES `distributor_order_packages` WRITE;
/*!40000 ALTER TABLE `distributor_order_packages` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_order_packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_order_product_variations`
--

DROP TABLE IF EXISTS `distributor_order_product_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_order_product_variations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `distributor_order_id` bigint unsigned NOT NULL,
  `product_variation_id` bigint unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_order_product_variations`
--

LOCK TABLES `distributor_order_product_variations` WRITE;
/*!40000 ALTER TABLE `distributor_order_product_variations` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_order_product_variations` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`z3r0`@`localhost`*/ /*!50003 TRIGGER `set_distributor_order_amount` AFTER INSERT ON `distributor_order_product_variations` FOR EACH ROW BEGIN
DECLARE order_amount INT DEFAULT 0;
DECLARE bp INT;
(SELECT wholesale_price * wholesale_min INTO bp FROM product_variations pv WHERE pv.id = NEW.product_variation_id);
SET order_amount = order_amount + (bp * NEW.quantity);
UPDATE distributor_orders o SET o.amount = order_amount WHERE o.id = NEW.distributor_order_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`z3r0`@`localhost`*/ /*!50003 TRIGGER `set_distributor_products` AFTER INSERT ON `distributor_order_product_variations` FOR EACH ROW BEGIN
DECLARE stock INT DEFAULT 0;
DECLARE wm INT;
DECLARE sp INT;

(SELECT wholesale_min, recomended_price INTO wm, sp FROM product_variations pv WHERE pv.id = NEW.product_variation_id);
SET stock = wm * NEW.quantity;

INSERT INTO distributor_product_variations (distributor_id, product_variation_id, stock, selling_price) VALUES (NEW.distributor_id, NEW.product_variation_id, stock, sp);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `distributor_orders`
--

DROP TABLE IF EXISTS `distributor_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `distributor_address_id` bigint unsigned NOT NULL,
  `ref` varchar(8) NOT NULL,
  `status` enum('pending','delivered') NOT NULL DEFAULT 'pending',
  `amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `discount_amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ref` (`ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_orders`
--

LOCK TABLES `distributor_orders` WRITE;
/*!40000 ALTER TABLE `distributor_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_product_variations`
--

DROP TABLE IF EXISTS `distributor_product_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_product_variations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `product_variation_id` bigint unsigned NOT NULL,
  `stock` int unsigned NOT NULL,
  `sold` int unsigned NOT NULL DEFAULT '0',
  `selling_price` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_product_variations`
--

LOCK TABLES `distributor_product_variations` WRITE;
/*!40000 ALTER TABLE `distributor_product_variations` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_product_variations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_user_addresses`
--

DROP TABLE IF EXISTS `distributor_user_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_user_addresses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_user_id` bigint unsigned NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `distributor_user_id` (`distributor_user_id`),
  CONSTRAINT `distributor_user_addresses_ibfk_1` FOREIGN KEY (`distributor_user_id`) REFERENCES `distributor_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_user_addresses`
--

LOCK TABLES `distributor_user_addresses` WRITE;
/*!40000 ALTER TABLE `distributor_user_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_user_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_user_order_product_variations`
--

DROP TABLE IF EXISTS `distributor_user_order_product_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_user_order_product_variations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_user_order_id` bigint unsigned NOT NULL,
  `distributor_product_variation_id` bigint unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_user_order_product_variations`
--

LOCK TABLES `distributor_user_order_product_variations` WRITE;
/*!40000 ALTER TABLE `distributor_user_order_product_variations` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_user_order_product_variations` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`z3r0`@`localhost`*/ /*!50003 TRIGGER `set_distributor_user_orders` AFTER INSERT ON `distributor_user_order_product_variations` FOR EACH ROW BEGIN
DECLARE sp INT DEFAULT 0;
DECLARE amount INT DEFAULT 0;
(SELECT selling_price INTO sp FROM distributor_product_variations);

SET amount = sp * NEW.quantity;

UPDATE distributor_user_orders duo SET duo.amount = amount WHERE id = NEW.distributor_user_order_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `distributor_user_orders`
--

DROP TABLE IF EXISTS `distributor_user_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_user_orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_user_id` bigint unsigned NOT NULL,
  `distributor_user_address_id` bigint unsigned NOT NULL,
  `ref` varchar(8) NOT NULL,
  `status` enum('pending','delivered') NOT NULL DEFAULT 'pending',
  `amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `discount_amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ref` (`ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_user_orders`
--

LOCK TABLES `distributor_user_orders` WRITE;
/*!40000 ALTER TABLE `distributor_user_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_user_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor_users`
--

DROP TABLE IF EXISTS `distributor_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributor_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor_users`
--

LOCK TABLES `distributor_users` WRITE;
/*!40000 ALTER TABLE `distributor_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributors`
--

DROP TABLE IF EXISTS `distributors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributors` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `country_id` bigint unsigned NOT NULL,
  `store_name` varchar(63) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `reward_points` decimal(5,2) NOT NULL DEFAULT '0.00',
  `status` enum('pending','active','suspended','disabled') NOT NULL DEFAULT 'pending',
  `referal_code` varchar(10) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `parent` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `store_name` (`store_name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `referal_code` (`referal_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributors`
--

LOCK TABLES `distributors` WRITE;
/*!40000 ALTER TABLE `distributors` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domains`
--

DROP TABLE IF EXISTS `domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domains` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `distributor_id` bigint unsigned NOT NULL,
  `domain` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domains`
--

LOCK TABLES `domains` WRITE;
/*!40000 ALTER TABLE `domains` DISABLE KEYS */;
/*!40000 ALTER TABLE `domains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_messages`
--

DROP TABLE IF EXISTS `main_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_messages`
--

LOCK TABLES `main_messages` WRITE;
/*!40000 ALTER TABLE `main_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product_variations`
--

DROP TABLE IF EXISTS `order_product_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product_variations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `product_variation_id` bigint unsigned NOT NULL,
  `selling_price` decimal(8,2) unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product_variations`
--

LOCK TABLES `order_product_variations` WRITE;
/*!40000 ALTER TABLE `order_product_variations` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_product_variations` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`z3r0`@`localhost`*/ /*!50003 TRIGGER `set_order_amount` AFTER INSERT ON `order_product_variations` FOR EACH ROW BEGIN
DECLARE order_amount INT DEFAULT 0;
DECLARE bp INT;
(SELECT buy_price INTO bp FROM product_variations pv WHERE pv.id = NEW.product_variation_id);
SET order_amount = order_amount + (bp * NEW.quantity);
UPDATE orders o SET o.amount = order_amount WHERE o.id = NEW.order_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `user_address_id` bigint unsigned NOT NULL,
  `ref` varchar(8) NOT NULL,
  `status` enum('pending','delivered') NOT NULL DEFAULT 'pending',
  `amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `discount_amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ref` (`ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_categories`
--

DROP TABLE IF EXISTS `package_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_categories`
--

LOCK TABLES `package_categories` WRITE;
/*!40000 ALTER TABLE `package_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `package_category_id` bigint unsigned NOT NULL,
  `name` varchar(25) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slug` varchar(70) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `ext` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `image_path` (`image_path`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (1,'Nutritional Pills','Nutritional-Pills','8081feaec8b8c46197cce2ba1315ef5d','image/webp','2023-07-19 13:59:29','2023-07-19 13:59:29'),(2,'Candy','Candy','2453d8571a6ba0671545c8f0003715bb','image/jpeg','2023-07-19 14:00:02','2023-07-19 14:00:02'),(3,'Tea Bags','Tea-Bags','9e7cc4feed949c15d057a8b2065f7379','image/png','2023-07-19 14:01:14','2023-07-19 14:01:14');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned DEFAULT NULL,
  `path_url` varchar(255) NOT NULL,
  `ext` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `path_url` (`path_url`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,'e63e3c21d883a74265d66504ee86e3c8','image/webp','2023-07-19 14:11:35','2023-07-19 14:11:35'),(2,1,'0c42576f4e21ded7fb56e8a16d6be0fa','image/webp','2023-07-19 14:11:35','2023-07-19 14:11:35'),(3,2,'74b467402afe98a400f1d2050c19bc8d','image/webp','2023-07-19 14:16:28','2023-07-19 14:16:28'),(4,2,'5407ad9031ee0a066f90d36c5852f7d9','image/webp','2023-07-19 14:16:28','2023-07-19 14:16:28'),(5,3,'36ed9aaec8785106bb37bfb38d45d74f','image/webp','2023-07-19 14:17:21','2023-07-19 14:17:21'),(6,3,'4422f5a3e47ebd4292c3ea5dc0b026ac','image/webp','2023-07-19 14:17:21','2023-07-19 14:17:21'),(7,4,'0aca57c7aec35b2cc39ca27bc2797a6a','image/webp','2023-07-19 14:37:07','2023-07-19 14:37:07'),(8,4,'83ff07557b61d26d5d5f906881db691c','image/webp','2023-07-19 14:37:07','2023-07-19 14:37:07'),(9,5,'364ce92cfc993e21bdcb2b5f6fed485a','image/webp','2023-07-19 14:37:31','2023-07-19 14:37:31'),(10,5,'3b4ae82a2ebb9743ef8f4e9579aa46a7','image/webp','2023-07-19 14:37:31','2023-07-19 14:37:31');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_variations`
--

DROP TABLE IF EXISTS `product_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_variations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned DEFAULT NULL,
  `variation` varchar(255) NOT NULL,
  `buy_price` decimal(8,2) DEFAULT '0.00',
  `sale_price` decimal(8,2) DEFAULT '0.00',
  `wholesale_price` decimal(8,2) DEFAULT '0.00',
  `recomended_price` decimal(8,2) unsigned NOT NULL DEFAULT '0.00',
  `wholesale_min` int unsigned NOT NULL DEFAULT '1',
  `stock` int unsigned NOT NULL DEFAULT '0',
  `sold` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_variations`
--

LOCK TABLES `product_variations` WRITE;
/*!40000 ALTER TABLE `product_variations` DISABLE KEYS */;
INSERT INTO `product_variations` VALUES (1,1,'400mg',1000.00,2300.00,2199.99,2500.00,10,1000,0,'2023-07-19 15:02:23','2023-07-19 15:02:23'),(2,1,'200mg',500.00,1700.00,1500.00,1650.00,5,10000,0,'2023-07-19 15:05:21','2023-07-19 15:05:21'),(3,2,'6pc',2000.00,3500.00,2500.00,3650.00,8,10000,0,'2023-07-19 15:06:09','2023-07-19 15:06:09'),(4,2,'12pc',12000.00,13500.00,12500.00,13650.00,10,10000,0,'2023-07-19 15:06:31','2023-07-19 15:06:31'),(5,3,'300mg',1200.00,1600.00,1400.00,1500.00,10,10000,0,'2023-07-19 15:07:13','2023-07-19 15:07:13'),(6,3,'500mg',1500.00,1800.00,1600.00,1700.00,15,10000,0,'2023-07-19 15:08:35','2023-07-19 15:08:35'),(7,4,'500mg',1500.00,1800.00,1600.00,1700.00,15,10000,0,'2023-07-19 15:08:50','2023-07-19 15:08:50'),(8,4,'300mg',1500.00,1800.00,1600.00,1700.00,15,10000,0,'2023-07-19 15:11:10','2023-07-19 15:11:10'),(9,5,'100mg',100.00,500.00,400.00,4500.00,15,10000,0,'2023-07-19 15:11:30','2023-07-19 15:11:30'),(10,5,'300mg',1200.00,1500.00,1400.00,1550.00,15,1000,0,'2023-07-19 15:11:56','2023-07-19 15:11:56');
/*!40000 ALTER TABLE `product_variations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `views` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Cynohills','Cynohills','Cynohill capsules contains all essential amino acids. Helps in growth of all types of body cells Helps in good kidney function Supports good memory function Contains vitamin B complex Helps in growth and rejuvenation of worn out cells It is a natural antioxidant Improves digestive function Helps in weight loss without losing nutrition. Helps in glucose control Helps in lowering cholesterol',0,'2023-07-19 14:11:35','2023-07-19 14:11:35'),(2,1,'Leiferax','Leiferax','Contains natural soluble and insoluble fiber Supports natural immune defenses Helps in removal of toxins in the body Promotes good immunity Promotes skin rejuvenation Improves digestion reduces risk of cancerous tumors good for joint care improves wound healing improves liver function promotes healthy kidneys stimulates hair growth promotes health brain improves vision reduces wrinkles and slows down aging',0,'2023-07-19 14:16:28','2023-07-19 14:16:28'),(3,1,'Linamohill','Linamohill','Nourishes the cells Contains phytonutrients Promotes for weight loss Provides all round nutrition Herbal laxative Reduces premature aging Improves libido Improves blood circulation Keeps the heart healthy Very potent antioxidant Detoxify the body Prevents mood disorders Promotes healthy lungs Promotes the immunity Acts as a natural tonic',0,'2023-07-19 14:17:21','2023-07-19 14:17:21'),(4,3,'Swizenta LC7','Swizenta-LC7','Cynohill capsules contains all essential amino acids. Helps in growth of all types of body cells Helps in good kidney function Supports good memory function Contains vitamin B complex Helps in growth and rejuvenation of worn out cells It is a natural antioxidant Improves digestive function Helps in weight loss without losing nutrition. Helps in glucose control Helps in lowering cholesterol',0,'2023-07-19 14:37:06','2023-07-19 14:37:06'),(5,3,'Swizenta Rosmass','Swizenta-Rosmass','Cynohill capsules contains all essential amino acids. Helps in growth of all types of body cells Helps in good kidney function Supports good memory function Contains vitamin B complex Helps in growth and rejuvenation of worn out cells It is a natural antioxidant Improves digestive function Helps in weight loss without losing nutrition. Helps in glucose control Helps in lowering cholesterol',0,'2023-07-19 14:37:31','2023-07-19 14:37:31');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('4J2D5uyp10gX-blrmOV-iGjlWLSJ_xbW',1689865934,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":1,\"role\":\"admin\"}'),('D2445pVSt4ZaShQS85du1cZ6Z3PfDoF7',1689861074,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":1,\"role\":\"admin\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_subscribers`
--

DROP TABLE IF EXISTS `shop_subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_subscribers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_subscribers`
--

LOCK TABLES `shop_subscribers` WRITE;
/*!40000 ALTER TABLE `shop_subscribers` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_subscribers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_addresses`
--

DROP TABLE IF EXISTS `user_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_addresses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address` (`address`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_addresses`
--

LOCK TABLES `user_addresses` WRITE;
/*!40000 ALTER TABLE `user_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-19 18:22:24
