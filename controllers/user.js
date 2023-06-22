const bcrypt = require("bcryptjs");
const user = require("../models/user");


async function getMe(req,res){
   
   const {user_id} = req.user;
   
   const response = await user.findById(user_id);

   if (!response) {
    res.status(400).send({msg: "No se ha encontrado usuario"});
   } else {
    res.status(200).send(response);
   }
   
   
}

async function getUsers(req,res){
    const {active} = req.query;
    let response = null;

    if (active === undefined) {
        response = await user.find();
    } else {
        response = await user.find({active});
    }
    
    res.status(200).send(response);
}

async function createUser(req, res) {   
    const { password } = req.body;
    const user = new User({ ...req.body, active: false});

    const salt = bcrypt.genSaltSync(10);
    const hasPassword = bcrypt.hashSync(password, salt);
    user.password = hasPassword;

    console.log(user);

    res.status(200).send({msg: "OK"});
}

module.exports = {
    getMe,
    getUsers,
    createUser,
};