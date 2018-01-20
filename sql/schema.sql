-- Create syntax for TABLE 'testament'
DROP TABLE IF EXISTS `testament`;
CREATE TABLE IF NOT EXISTS `testament`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(45) NULL,
	PRIMARY KEY (`id`) 
) ENGINE = InnoDB;

-- Create syntax for TABLE 'books'
DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books`(
	`id` INT NOT NULL,
	`name` VARCHAR(45) NULL,
	`abbrev` VARCHAR(5) NULL,
	`testament` VARCHAR(5) NULL,
	PRIMARY KEY (`id`) 
) ENGINE = InnoDB;

-- Create syntax for TABLE 'verses'
CREATE TABLE IF NOT EXISTS `verses`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`version` VARCHAR(10) NULL,
	`testament` INT NULL,
	`book` INT NULL,
	`chapter` INT NULL,
	`verse` INT NULL,
	`text` TEXT NULL,
	PRIMARY KEY (`id`) 
ENGINE = InnoDB;
