-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: pizzariajulia
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(14) DEFAULT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `sobrenome` varchar(50) DEFAULT NULL,
  `nascimento` date DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `localidade` varchar(40) DEFAULT NULL,
  `bairro` varchar(40) DEFAULT NULL,
  `logradouro` varchar(60) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'131.378.629-22','Julia Vitória','Ribeiro Kretzer','2004-12-08','89259-460',NULL,NULL,NULL,NULL,58,'apto 802'),(2,'948.768.439-53','Julia Vitória','Ribeiro Kretzer','2004-12-08','89259-460',NULL,NULL,NULL,NULL,58,'apto 802'),(3,'509.021.101-95','Vera','Mariana Moreira','1945-10-26','78125-005',NULL,NULL,NULL,NULL,898,'(Lot P Ipiranga I)'),(4,'157.780.333-70','Tomás João','Caleb Souza','1975-07-16','89010-160',NULL,NULL,NULL,NULL,648,''),(5,'157.780.333-70','Nelson','Carlos Alves','1949-09-27','30570-700',NULL,NULL,NULL,NULL,354,''),(6,'64940602508','Carlos Eduardo','Luiz Freitas','1969-02-18','79822-213',NULL,NULL,NULL,NULL,112,''),(7,'266.027.089-96','Laura Clara ','Andreia Corte Real','1962-11-15','65635-456',NULL,NULL,NULL,NULL,679,''),(8,'505.478.183-86','Louise ','Alana Gonçalves','1975-04-15','07073-131',NULL,NULL,NULL,NULL,817,''),(9,'749.283.555-80','Débora','Heloisa Silveira','1975-05-09','57603-132',NULL,NULL,NULL,NULL,872,''),(10,'757.312.656-58','César Roberto','Fernando Porto','1958-07-20','69313-648',NULL,NULL,NULL,NULL,816,'');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `valor` float DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `retiradaEntrega` varchar(8) DEFAULT NULL,
  `sabores` varchar(100) DEFAULT NULL,
  `tamanho` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,99.9,NULL,'retirada','mussarela,portuguesa,alcatra','gg'),(2,29.9,NULL,'entrega','calabresa','p'),(3,49.9,NULL,'retirada','marguerita,mussarela','m'),(4,29.9,NULL,'entrega','marguerita','p'),(5,29.9,NULL,'retirada','lombinho','p'),(6,69.9,NULL,'retirada','marguerita','g'),(7,49.9,NULL,'entrega','calabresa','m'),(8,99.9,NULL,'entrega','mussarela,lombinho','gg'),(9,29.9,NULL,'retirada','marguerita','p'),(10,49.9,NULL,'retirada','marguerita,portuguesa','m');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `cod_barras` int NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`cod_barras`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (111,'Pizza de camarão','Pizza',14),(121,'Fanta Laranja','Refrigerante',17),(222,'Pizza de frango com catupiry','Pizza',19),(333,'Coca-cola','Refrigerante',529),(444,'Guaraná Zero','Refrigerante',87),(555,'Pizza de dois amores','Pizza',29),(666,'Pizza de espinafre','Pizza',194),(777,'Suco de laranja','Suco',1928),(888,'Lasanha à bolonhesa','Lasanha',275),(999,'Pizza 4 queijos','Pizza',17);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30 20:13:02
