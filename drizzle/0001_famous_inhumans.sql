CREATE TABLE `deals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`assetType` varchar(64) NOT NULL,
	`address` text NOT NULL,
	`purchasePrice` varchar(64),
	`additionalInfo` text,
	`contactEmail` varchar(320) NOT NULL,
	`contactPhone` varchar(20),
	`contactName` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `deals_id` PRIMARY KEY(`id`)
);
