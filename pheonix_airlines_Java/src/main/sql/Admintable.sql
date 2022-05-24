CREATE DATABASE 'Phoenix_Airline';

USE Phoenix_Airline;

CREATE TABLE Admin (
  Admin_ID int(5) PRIMARY KEY ,
  Admin_Name varchar(25),
  Admin_Address varchar(30),
  Admin_Email varchar(25)
);

ALTER TABLE User ADD FOREIGN KEY (Admin_ID) REFERENCES Admin (Admin_ID);

ALTER TABLE Staff ADD FOREIGN KEY (Admin_ID) REFERENCES Admin (Admin_ID);