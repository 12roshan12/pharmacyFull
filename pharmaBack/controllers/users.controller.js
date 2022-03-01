const { createUser, getUser, getuserbyid } = require("../models/user.models")
const { isUndefined } = require("../utilities/commons.utilities")


const addUser = async (req, res, next) => {

    if (req.body) {
        if (!isUndefined(req.body.username) || !isUndefined(req.body.password) || !isUndefined(req.body.email)) {
            const result = await createUser(req.body.username, req.body.password, req.body.email)
            if (result.err) {
                res.status(400).json({ error: result.err, data: null })
            }
            else {
                res.status(200).json({ error: null, data: result.out })

            }
        }
    }

}

const fetchUsers = async (req, res, next) => {



    const result = await getUser()
    if (result.err) {
        res.status(400).json({ error: result.err, data: null })
    }
    else {
        res.status(200).json({ error: null, data: result.out })



    }

}




const fetchusersbyid = async (req, res, next) => {


    if (req.body) {
        if (!isUndefined(req.body.username) || !isUndefined(req.body.password)) {


            const result = await getuserbyid(req.body.username.trim())

            if (result.err) {
                res.status(400).json({ error: result.err, data: null })
            }
            else {

                if (result.out && result.out.length > 0 && (result.out[0].password == req.body.password)) {
                    res.status(200).json({ error: null, data: "success" })
                }
                else {
                    if (result.out && result.out.length > 0) {
                        res.status(200).json({ error: null, data: {username:true, password:false} })
                    }
                    else{
                        res.status(200).json({ error: null, data: "failed" })
                    }
                    
                }
            }
        }
    }



}





module.exports = {
    addUser,
    fetchUsers,
    fetchusersbyid
}