# KoinX-- `Backend Interview Task - Harshal Jamdar`


Develop a Server Side Application to fetch Crypto Transactions of a user.

* Created database "KoinX", and storing data in MongoDb collections.
* Designed schemas - 
    1. Ether schema - to store the price of Ethereum.

    2. userTransaction schema -  to store user transactions.

* Developed two APIs-
  1. GET/fetchDetails/:address - Here we are giving user address as path parameter, and fetching user's transactions for that address.

OUTPUT - 
{
  "status": true,
  "msg": {
    "_id": "63178fc0bfd4a82af79078e2",
    "userAddress": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
    "userTransaction": [
      {
        "blockNumber": "14609155",
        "timeStamp": "1650284543",
        "hash": "0x25f745fc71d9ddd0db561d06a023e6c654089861dc4625cdc81743afd3228982",
        "nonce": "112207",
        "blockHash": "0xa48498a87afc3714f3e6edce2fd3344ddbdb85e77eaf85bed3afa60f879616e1",
        "transactionIndex": "220",
        "from": "0xf598b81ef8c7b52a7f2a89253436e72ec6dc871f",
        "to": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
        "value": "10003420000000000",
        "gas": "105000",
        "gasPrice": "29489937413",
        "isError": "0",
        "txreceipt_status": "1",
        "input": "0x",
        "contractAddress": "",
        "cumulativeGasUsed": "14067378",
        "gasUsed": "21000",
        "confirmations": "880680",
        "methodId": "0x",
        "functionName": ""
      },
    
      {
        "blockNumber": "14793690",
        "timeStamp": "1652806251",
        "hash": "0x6bcf566f165be2f00beb9ff1417ecfbb0f11139122779899ed43816b933f5d30",
        "nonce": "0",
        "blockHash": "0x66b790fc21c1fa4acb0ea977f2a9f0aa921292fcd8d99202306f42a2a792a512",
        "transactionIndex": "405",
        "from": "0x052854cb136b9a5d62c96dff99459fa1adb167a0",
        "to": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
        "value": "33009827022960004",
        "gas": "21000",
        "gasPrice": "27647809222",
        "isError": "0",
        "txreceipt_status": "1",
        "input": "0x",
        "contractAddress": "",
        "cumulativeGasUsed": "29836323",
        "gasUsed": "21000",
        "confirmations": "696145",
        "methodId": "0x",
        "functionName": ""
      }
    ],
    "createdAt": "2022-09-06T18:21:52.246Z",
    "updatedAt": "2022-09-07T10:42:33.284Z",
    "__v": 0
  }
}



  2. GET/getBalance/:address - Passing user address as path parameter, and getting their current balance and current price of ether as output.

  OUTPUT - 
{
  "status": true,
  "data": {
    "currentBalance": -163895865906129440,
    "currentEtherPrice": 121097
  }
}

* Libraries Used -
1. axios - to make axios call to fetch data.
2. mongoose - to design schema for MongoDb and to perforn CRUD operations on the data stored in MongoDb.
