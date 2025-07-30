-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.43 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for test_db
CREATE DATABASE IF NOT EXISTS `test_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test_db`;

-- Dumping structure for table test_db.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Category_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.category: ~5 rows (approximately)
INSERT IGNORE INTO `category` (`id`, `name`) VALUES
	('1901f22b-33fe-4156-b695-7576b88a72c7', 'Single-Layer-PCBs'),
	('267e9913-8218-4095-8e8a-83201294f4b2', 'Flex-PCBs'),
	('487f012d-5597-465e-afbd-4ec2a6f6a138', 'Rigid-Flex-PCBs'),
	('978f5aef-b1f8-49f2-ada8-97f9474c765b', 'Multi-Layer-PCBs'),
	('a81fe8de-0e64-4dc6-a150-ebaf9b32f4c1', 'Prototype-PCBs');

-- Dumping structure for table test_db.customer_order
CREATE TABLE IF NOT EXISTS `customer_order` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adress` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apartment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateTime` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderNotice` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.customer_order: ~1 rows (approximately)
INSERT IGNORE INTO `customer_order` (`id`, `name`, `lastname`, `phone`, `email`, `company`, `adress`, `apartment`, `postalCode`, `dateTime`, `status`, `total`, `city`, `country`, `orderNotice`) VALUES
	('c20f31f2-f034-4fd4-b021-f503e59ac010', 'nik', 'nik', '9876543210', 'nik@gmail.com', 'nik', '76, kub', 'jhbj', '140413', '2025-07-26 11:42:14.416', 'processing', 64, 'moh', 'india', '');

-- Dumping structure for table test_db.customer_order_product
CREATE TABLE IF NOT EXISTS `customer_order_product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customerOrderId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_order_product_customerOrderId_fkey` (`customerOrderId`),
  KEY `customer_order_product_productId_fkey` (`productId`),
  CONSTRAINT `customer_order_product_customerOrderId_fkey` FOREIGN KEY (`customerOrderId`) REFERENCES `customer_order` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `customer_order_product_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.customer_order_product: ~1 rows (approximately)
INSERT IGNORE INTO `customer_order_product` (`id`, `customerOrderId`, `productId`, `quantity`) VALUES
	('1c5f9b20-a434-41e1-880a-bd26425678e5', 'c20f31f2-f034-4fd4-b021-f503e59ac010', '10', 1);

-- Dumping structure for table test_db.image
CREATE TABLE IF NOT EXISTS `image` (
  `imageID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`imageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.image: ~0 rows (approximately)

-- Dumping structure for table test_db.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mainImage` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL DEFAULT '0',
  `rating` int NOT NULL DEFAULT '0',
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `manufacturer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `inStock` int NOT NULL DEFAULT '1',
  `categoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Product_slug_key` (`slug`),
  KEY `Product_categoryId_fkey` (`categoryId`),
  CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.product: ~4 rows (approximately)
INSERT IGNORE INTO `product` (`id`, `slug`, `title`, `mainImage`, `price`, `rating`, `description`, `manufacturer`, `inStock`, `categoryId`) VALUES
	('04c5ee4b-e7db-4df3-b731-6d36a780b3a7', 'pcb-dem', 'PCB-4', 'pcb.jpg', 0, 5, 'This is PCB-4', 'prathmesh', 1, '487f012d-5597-465e-afbd-4ec2a6f6a138'),
	('10', 'pcb-demo', 'PCB-2', 'pcb.jpg', 64, 3, 'This is PCB-2', 'Hannah', 1, 'a81fe8de-0e64-4dc6-a150-ebaf9b32f4c1'),
	('91043a62-d0e7-459b-8df1-208ccc295104', 'pcb-test', 'PCB-3', 'pcb.jpg', 45, 5, 'This is PCB-3', 'Montana', 0, '487f012d-5597-465e-afbd-4ec2a6f6a138'),
	('a4908080-7cad-43b1-a4ac-953da68f818e', 'pcb', 'PCB-1', 'pcb.jpg', 300, 5, 'This is a PCB', 'Prathmesh', 1, '267e9913-8218-4095-8e8a-83201294f4b2');

-- Dumping structure for table test_db.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.user: ~1 rows (approximately)
INSERT IGNORE INTO `user` (`id`, `email`, `password`, `role`) VALUES
	('mpfI20XXs1Dptz4ZGWb5N', 'evasabeeh@gmail.com', '$2a$05$7pkfPWnelC.yRARxdjRvh./iolst3ocnd0URQLGy15IbUDr0iBOEG', 'admin');

-- Dumping structure for table test_db.wishlist
CREATE TABLE IF NOT EXISTS `wishlist` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Wishlist_userId_fkey` (`userId`),
  KEY `Wishlist_productId_fkey` (`productId`),
  CONSTRAINT `Wishlist_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Wishlist_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db.wishlist: ~0 rows (approximately)

-- Dumping structure for table test_db._prisma_migrations
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test_db._prisma_migrations: ~13 rows (approximately)
INSERT IGNORE INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('0662afa3-da3c-443d-85fa-71f59723111d', '18b8757843dccd623d2433bf0ff1641da3133299f1c6ecb97b1ad6ff0cdd8584', '2025-07-26 10:07:23.873', '20240415100000_added_category_id_field_in_product_table', NULL, NULL, '2025-07-26 10:07:23.752', 1),
	('0d9c2106-e4d9-43d6-9102-b2cdef650b25', '75aff0f5f28b43bcf4127585334898e8b44bf2b9cb883df2eb3a3512034cedda', '2025-07-26 10:07:24.039', '20240415130405_added_relationship_between_product_table_and_category_table', NULL, NULL, '2025-07-26 10:07:23.880', 1),
	('103165c2-0dcc-4a68-bba8-55e9899e7999', '97391833cf8525eb4d90062e96bf9aafe2c9b47a46b9276e14ad677ca67b301d', '2025-07-26 10:07:25.060', '20240607074201_added_cascade_delete_in_wishlist_table', NULL, NULL, '2025-07-26 10:07:24.910', 1),
	('3fa9891d-3df7-4c78-9bbe-b8a44211c624', '3788ae16c41a9d225cd8b5079d99baa910c89943036be6fc0465775a0d6751d5', '2025-07-26 10:07:25.231', '20240607075549_added_cascade_delete_for_categories_in_product_table', NULL, NULL, '2025-07-26 10:07:25.065', 1),
	('43e75d89-ea5b-45a3-8d61-81383c0485bc', 'fa88fb8154c8676de29135dc9174194b3eae5cb55ccd106f67161ac004d5f131', '2025-07-26 10:07:23.745', '20240414064137_added_category_table_and_added_role_column', NULL, NULL, '2025-07-26 10:07:23.593', 1),
	('5b048905-99e4-421a-b6be-9baa9e88df7c', 'd54b4ad31a8eb8ad5969bd37f0d56339a5b94297032ab9ee184fb7016fc0cf58', '2025-07-26 10:07:25.474', '20240607111047_added_unique_constraint_to_name_column_in_the_category_table', NULL, NULL, '2025-07-26 10:07:25.417', 1),
	('6ec5b567-55db-4c0d-b657-f541f62bc8fc', 'd04f8fe0a4c576cf0c68d367a0e879631b501643da2797a269187ef2c4579a47', '2025-07-26 10:07:23.493', '20240320142857_podesavanje_prizme', NULL, NULL, '2025-07-26 10:07:23.308', 1),
	('83cb0117-6cac-4e88-bfd6-aee9f205a0ea', '8ef051cd7b8d089d7354fded341a716f11a98e683ba634e2fa594e456bf4a5cb', '2025-07-26 10:07:24.903', '20240602092804_added_wishlist_table', NULL, NULL, '2025-07-26 10:07:24.586', 1),
	('8efcda25-42e8-4fc0-a594-f6b6492ed6fe', '0a4923f077321bf0b971896b04a155421d063e9c7b7915a2dcd395744861484c', '2025-07-26 10:07:24.132', '20240418151340_added_new_customer_order_table', NULL, NULL, '2025-07-26 10:07:24.047', 1),
	('d65cf878-121e-4b86-bb9e-e6e531123299', 'e3c767ecf3c420e28170062f9fb354828d14cd9de4d7bbe76d383d31e951349f', '2025-07-26 10:07:23.585', '20240413064716_added_order_table', NULL, NULL, '2025-07-26 10:07:23.501', 1),
	('e5caa8b0-1175-4983-9285-7887170cb33a', '361384a5b781cad143cceaf503bd24cac0ee5d1bc0682a26e9c0f4b5d6476137', '2025-07-26 10:07:24.465', '20240512145715_bojan_update_za_customer_order_product', NULL, NULL, '2025-07-26 10:07:24.139', 1),
	('fb1e50e8-a0b9-40a0-ae72-94f2daa97614', '5110bd5fa721be0289d7b60eab692f737a6e3ceec1e56a1775bec1dae5563e6e', '2025-07-26 10:07:24.580', '20240515154444_added_necessary_fields_for_customer_order_table', NULL, NULL, '2025-07-26 10:07:24.471', 1),
	('fcd77121-44b9-42b0-b9e6-c3c2dd613291', 'a5c3a4651d2b59b8eab58d7c14798dd83b3903c1e7ade094366c07f1f6a43243', '2025-07-26 10:07:25.410', '20240607083528_added_cascade_delete_for_wishlist_in_product_table', NULL, NULL, '2025-07-26 10:07:25.238', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
