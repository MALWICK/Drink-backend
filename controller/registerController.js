/* const User = require('../database/users')

const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate usernames in the db
    const duplicate = User.find(person => person.userName === User);
    if (duplicate) return res.sendStatus(409); //Conflict 
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = { "username": User, "password": hashedPwd };
        usersDB.setUsers([...User, newUser]);
        console.log(User);
        res.status(201).json({ 'success': `New user ${User} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser }; */