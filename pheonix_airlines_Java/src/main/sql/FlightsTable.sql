CREATE DATABASE 'Phoenix_Airline';

USE Phoenix_Airline;

CREATE TABLE Flight (
  Flight_ID int(5) PRIMARY KEY,
  Flight_Type varchar(15),
  Description varchar(50),
  Flight_Time time,
  seat int(5),
  User_ID int(5),
  Staff_ID int(5),
  User_Email varchar(25),
  Ticket_ID int(5)
);


ALTER TABLE Ticket ADD FOREIGN KEY (Flight_ID) REFERENCES Flight (Flight_ID);

ALTER TABLE Flight ADD FOREIGN KEY (User_ID) REFERENCES User (User_ID);

ALTER TABLE Flight ADD FOREIGN KEY (User_Email) REFERENCES User (User_Email);

ALTER TABLE Flight ADD FOREIGN KEY (Staff_ID) REFERENCES Staff (Staff_ID);

ALTER TABLE Flight ADD FOREIGN KEY (Ticket_ID) REFERENCES Ticket (Ticket_ID);
