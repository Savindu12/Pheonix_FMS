CREATE TABLE `Admin` (
  `Admin_ID` int(5) PRIMARY KEY ,
  `Admin_Name` varchar(25),
  `Admin_Email` varchar(25)
);

CREATE TABLE `Staff` (
  `Staff_ID` int(5),
  `Staff_Email` varchar(25),
  `Staff_Grade` int(5),
  `Staff_Name` varchar(25),
  `Staff_Role` varchar(25),
  `Admin_ID` varchar(25),
   PRIMARY KEY (`Staff_ID`),
   PRIMARY KEY (`Staff_Email`)
);

CREATE TABLE `User` (
  `User_ID` int(5),
  `User_Name` varchar(25),
  `User_Email` varchar(25),
  `Last_Login_Time` time,
  `IP` float,
  `Staff_ID` int(5),
  `Staff_Email` varchar(25),
  `Admin_ID` varchar(25),
  PRIMARY KEY (`User_ID`),
  PRIMARY KEY (`User_Email`)
);

CREATE TABLE `Flight` (
  `Flight_ID` int(5) PRIMARY KEY,
  `Flight_Type` varchar(15),
  `Description` varchar(50),
  `Flight_Time` time,
  `seat` int(5),
  `User_ID` int(5),
  `Staff_ID` int(5),
  `User_Email` varchar(25),
  `Ticket_ID` int(5)
);

CREATE TABLE `Ticket` (
  `Ticket_ID` int(5) PRIMARY KEY,
  `Class` varchar(10),
  `Arrival` date,
  `Departure` date,
  `Date` datetime,
  `Price` float,
  `User_ID` int(5),
  `Staff_ID` int(5),
  `Staff_Email` varchar(25),
  `User_Email` varchar(25),
  `Flight_ID` int(5)
);

ALTER TABLE `User` ADD FOREIGN KEY (`Staff_ID`) REFERENCES `Staff` (`Staff_ID`);
ALTER TABLE `User` ADD FOREIGN KEY (`Staff_Email`) REFERENCES `Staff` (`Staff_Email`);

ALTER TABLE `User` ADD FOREIGN KEY (`Admin_ID`) REFERENCES `Admin` (`Admin_ID`);

ALTER TABLE `Staff` ADD FOREIGN KEY (`Admin_ID`) REFERENCES `Admin` (`Admin_ID`);

ALTER TABLE `Ticket` ADD FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`);
ALTER TABLE `Ticket` ADD FOREIGN KEY (`User_Email`) REFERENCES `User` (`User_Email`);

ALTER TABLE `Ticket` ADD FOREIGN KEY (`Staff_ID`) REFERENCES `Staff` (`Staff_ID`);
ALTER TABLE `Ticket` ADD FOREIGN KEY (`Staff_Email`) REFERENCES `Staff` (`Staff_Email`);

ALTER TABLE `Ticket` ADD FOREIGN KEY (`Flight_ID`) REFERENCES `Flight` (`Flight_ID`);

ALTER TABLE `Flight` ADD FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`);
ALTER TABLE `Flight` ADD FOREIGN KEY (`User_Email`) REFERENCES `User` (`User_Email`);
ALTER TABLE `Flight` ADD FOREIGN KEY (`Staff_ID`) REFERENCES `Staff` (`Staff_ID`);

ALTER TABLE `Flight` ADD FOREIGN KEY (`Ticket_ID`) REFERENCES `Ticket` (`Ticket_ID`);
