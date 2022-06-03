const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
       let newPlayer = req.body;
        //    let playersName = req.body.name;
       let sameName = false;
       for(let i =0; i<players.length; i++){
           if(players[i].name == newPlayer.name){
            sameName = true;
            break;
           }
       }
       if(sameName == false){
           players.push(newPlayer);
           res.send(  { data: players , status: true }  )
       }else{
           res.send("Player's name already exist.Please check the name.");
       }
    // res.send(  { data: players , status: true }  ) 
   })
  
module.exports = router;
