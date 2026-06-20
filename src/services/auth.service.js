const db = require('../../models');
const bcrypt = require('bcrypt');
const apiError = require('../utils/api-error');


const User = db.users;
//register
const serviceRegister = async (email, name, password) => {
    // Check if email already exists
    const existingUser = await User.findOne({where : {email}});
    if (existingUser) {
        throw new apiError(400, 'Email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
        email, 
        name, 
        password: hashedPassword
    });


    return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name
};;
};

const serviceLogin = async (email, password) => {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user){
        throw new apiError(401, "Invalid email or password"); 
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new apiError(401, "Invalid email or password");
    }
    return {
        id : user.id,
        email : user.email,
        name : user.name
    };
};

const serviceAccessToken = async (user) => {}
const serviceRefreshToken = async (refreshToken) => {}







//login

module.exports = {
    serviceRegister,
    serviceLogin,
    serviceRefreshToken
};
