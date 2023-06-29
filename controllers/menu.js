const Menu = require("../models/menu");

async function createMenu (res,req){
    const menu = new Menu(req.body);

    try {
        const response = await menu.save();
        res.status(200).send(response);

    } catch (error) {
        res.status(400).send({msg:"Error al crear el menu"});
    }
}



module.exports = {
    createMenu,
};