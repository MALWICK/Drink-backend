/* const User = require('../database/users');

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = User.find(person => person.userName === User);
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        // create JWTs
        res.json({ 'success': `User ${User} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin }; */