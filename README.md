# Social Network API

![alt text](Assets/sample.jpg)

## Video Walkthrough
https://www.youtube.com/watch?v=oSr_cLP2FHU

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Summary
MongoDB based API for social media startup 
<Br><Br>

## Description 
An application for seeding, updating, and modifying social network data. 

Using MongoDB via NodeJS, a social media database consisting of Users, Thoughts, and reactions are seeded and interlinked.  

Using Insomnia: This data can be viewed and modified.
<Br><Br>

## Instructions

### Pre-requisites
Visual Studio to run code.<Br> 
Node.js installed<Br>
MongoDB installed<Br>
Insomnia installed<Br>
<Br>

### NPM Installations
NPM install: express
<Br>

### Execution: Insomnia
Use the following method/address combinations to access/edit the application database:

Thoughts:<Br>
GET, POST: http://localhost:3001/api/thoughts<Br>
GET/PUT/DEL single thought: http://localhost:3001/api/thoughts/:thoughtId<Br>

Reactions:<Br>
POST/DEL:  http://localhost:3001/api/thoughts/1/reactions<Br>

Users:<Br>
GET/POST: http://localhost:3001/api/users<Br>
GET/PUT/DEL single user: http://localhost:3001/api/users/1<Br>

Friends:<Br>
POST/DEL: http://localhost:3001/api/users/1/friends/1<Br>

## Contact
grimdango@gmail.com
<Br>
## Log 

### 16/04/22
Comprehensive code revisions and testing on Insomnia

### 14/04/22
Branches merged

### 13/04/22
Routes, seeds and schemas overhauled

### 09/04/22
Created branch for alternate routing 

### 07/04/22
Initial routing.

### 06/04/22
Initiated project, initial modelling.

   

