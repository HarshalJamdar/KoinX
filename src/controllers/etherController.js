let axios = require("axios");
const etherModel = require("../models/ether");
const transactionModel = require("../models/transaction");



//===Fetching the price of Ethereum every 10 minutes
const getEther = async function (){
    try{
    let options1 = {
        method: "get",
        url: `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`
    }
    let result1 = await axios(options1);
    let data1 = await etherModel.create({ ethereum : result1.data });
    console.log( data1);
    return data1
}catch(err){
        console.log({ msg: err.message });
}
}

setInterval(()=>{ getEther() },10*60*1000);

//=========================================================================//


//===Fetching the crypto transactions of a user
const getTransaction = async function(req,res){
    try{
       let userAdd = req.params.address
        
       let options = {
            method: "get",
            url: `https://api.etherscan.io/api?module=account&action=txlist&address=${userAdd}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=FNBE9RXM84FJAA81H31Y7KUDX9VTNDTEDC`,
          };
         
        let result = await axios(options);
        let user = await transactionModel.findOne({userAddress : userAdd});

        if(user){
            //--if user address already exist, updating document
            let details = await transactionModel.findOneAndUpdate({ userAddress : userAdd }, { $set :{ userTransaction : result.data.result } });
            return res.status(200).send({ status : true, msg : details });
        }else{
            //--if user address not present, creating document
             let details = await transactionModel.create({ userAddress : userAdd ,userTransaction : result.data.result });
             return res.status(201).send({ status : true, msg : details });
      }
       
    }catch(err){
        res.status(500).send({ msg: err.message });
    }
}

//=========================================================================//

//===Getting current balance and current price of ether
const getBalance = async function(req,res){
    try{
        let userAdd = req.params.address;
        let currBalance =0;
        let data = await transactionModel.findOne({ userAddress : userAdd });
    
    //--if user address not present
    if(!data) return res.status(404).send({ status: false, message: "User address not found" });

    //--if user address present, calculating user balance
    for(let i=0;i<data.userTransaction.length;i++){
        if(data.userTransaction[i].from === userAdd){
            currBalance += data.userTransaction[i].value;
        }else if(data.userTransaction[i].to === userAdd){
            currBalance -= data.userTransaction[i].value;
        }
    }

    //--getting current price of ether
    let price = await getEther();
    let currentEtherPrice = price.ethereum.ethereum.inr 
    return res.status(200).send({ status : true, data : { currentBalance : currBalance, currentEtherPrice : currentEtherPrice } });
    }catch(err){
        res.status(500).send({ msg: err.message });
    }
}

//=========================================================================//

module.exports = { getTransaction, getBalance }

//=========================================================================//