# MongoDB Commerce #
![alt app](mc.jpg "car img")

The project consists of building queries for data manipulation, CRUD (Create, Read, Update, Delete) document records from the MongoDB database. The commerce database contains data from the McDonald's menu, such as ingredients, nutritional values and fictitious sales data.

## Skills and Tools ##

* Use of Docker;
* Write queries to manipulate the database MongoDB;

## Guidelines to runnig API ##
1. Clone the repository: ```git clone git@github.com:carinacunha/mongodb-commerce.git```
2. Navigate to the root of the repository: ```cd mongodb-commerce```
3. Create a container with a volume pointing to the project folder: ```docker run -d --name=containerName -v "$PWD:/app" -p 27017:27017 mongo:5.0```
4. Access the container terminal: ```docker exec -it containerName bash```

**✨ This project was developed during the Full Stack Web Development course at Trybe**