# KoinX-- `Backend Interview Task - Harshal Jamdar`


Develop a Server Side Application to fetch Crypto Transactions of a user.

* Created database "KoinX", and storing data in MongoDb collections.
* Designed schemas - 
    1. Ether schema - to store the price of Ethereum.

    2. userTransaction schema -  to store user transactions.

* Developed two APIs-
  1. GET/fetchDetails/:address - Here we are giving user address as path parameter, and fetching user's transactions for that address.

  2. GET/getBalance/:address - Passing user address as path parameter, and getting their current balance and current price of ether as output.

* Libraries Used -
1. axios - to make axios call to fetch data.
2. mongoose - to design schema for MongoDb and to perforn CRUD operations on the data stored in MongoDb.