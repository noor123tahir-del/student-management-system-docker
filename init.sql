CREATE DATABASE StudentDB;
GO

USE StudentDB;
GO

CREATE TABLE Students (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(100),
    RollNumber VARCHAR(50)
);
GO