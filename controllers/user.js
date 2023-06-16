async function getMe(req,res){
    res.status(200).send({msg:"Todo OK"});
}

module.exports = {
    getMe,
};