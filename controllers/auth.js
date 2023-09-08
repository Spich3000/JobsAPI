

const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
const bcrypt = require("bcryptjs")




const register = async (req, res) => {
    // Example of custom error
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError("Please provide name, email and password")
    }
    //
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const tempUser = { name, email, password: hashPassword }

    const user = await User.create({ ...tempUser })
    res.status(StatusCodes.CREATED).json(user)
}

const login = async (req, res) => {
    res.send("Login user")
}

module.exports = {
    register,
    login
}