

const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
// const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
    // Example of custom error
    // const { name, email, password } = req.body
    // if (!name || !email || !password) {
    //     throw new BadRequestError("Please provide name, email and password")
    // }
    //
    // const salt = await bcrypt.genSalt(10)
    // const hashPassword = await bcrypt.hash(password, salt)

    // const tempUser = { name, email, password: hashPassword }

    // const user = await User.create({ ...tempUser })

    const user = await User.create({ ...req.body })

    // const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", { expiresIn: "30d" })
    const token = user.createJWT()

    res
        .status(StatusCodes.CREATED)
        .json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
    res.send("Login user")
}

module.exports = {
    register,
    login
}