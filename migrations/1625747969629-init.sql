GRANT ALL ON *.* TO 'user'@'%';

USE melichallenge

CREATE TABLE `melichallenge`.`servers` ( 
	`server` VARCHAR(200) NOT NULL , 
	`description` TEXT NOT NULL , 
	`server_type` INT NOT NULL ,
	PRIMARY KEY (`server`)) ENGINE = InnoDB;


CREATE TABLE `melichallenge`.`alerts` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`server` VARCHAR(200) NOT NULL , 
	`description` TEXT NOT NULL , 
	`created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP , 
	PRIMARY KEY (`id`),
	INDEX (`server`)) ENGINE = InnoDB;

ALTER TABLE `melichallenge`
	MODIFY `server` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

ALTER TABLE `melichallenge`.`alerts`
	ADD CONSTRAINT `fk_alerts_servers` FOREIGN KEY (`server`) REFERENCES `servers` (`server`) ON DELETE NO ACTION ON UPDATE NO ACTION,
