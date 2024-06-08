// dummy
import "../../module/db";
import User from "../../model/login";

async function form(req, res) {
    var data = req.body;
    const tmp = new User(data);
    const resp = await tmp.save();
    res.json({msg: "saved!"});
    res.status(200);
}

export default form;

