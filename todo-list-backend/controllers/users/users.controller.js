'use strict'

//local requires
const { Users } = require('../../models');
const { Sign } = require('../../libs/jwtAuth');

// libraries requires
const mongoose = require('mongoose');

class UsersController {

    /**
     * POST /register
     */
    async register(req, res, next) {
        try {
            const userData = req.body;
            const { username, email } = userData;
            
            const userEmail = await Users.findOne({ email });
            const userName = await Users.findOne({ username });

            if (!!userEmail && !!userName) {
                const error = new Error('Email or Username already exists');

                res.status(500).json({ message: error.message });
                return;
            } else {
                const user = new Users(userData);

                user.password = await user.hashPassword(user.password);
                await user.save()

                res.status(200).json({ result: 'user created successfully' });
            }

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    /**
     * POST /login
     */
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const userCredentials = await Users.findOne({ username });

            if (!userCredentials || !(await userCredentials.comparePassword(password))) {
                const error = new Error('Invalid credentials');
                res.status(401).json({ message: error.message });
                return;
            } 

            Sign(userCredentials._id, '2h', (error, jwtToken) => {
                if (error) {
                    res.status(500).json({ message: error.message });
                }
                res.json({
                    msg: 'Token Created',
                    token: jwtToken,       
                })
            });

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    /**
     * PUT /update-user
     */
    async updateUser(req, res, next) {
        try {
            const dataToUpdate = req.body;
            //Waitinf for control panel from front
        } catch (error) {
            
        }
    }

    /**
     * PUT /update-passwd
     */
    async updatePasswd(req, res, next) {
        try {
            //Waitinf for control panel from front
        } catch (error) {
            
        }
    }

    /**
     * DELETE /delete-user
     */
    async deleteUser(req, res, next) {
        try {
            //Waitinf for control panel from front
        } catch (error) {
            
        }
    }

    /**
     * logout - recoverpassword - userimag(post)
     */
    //Waitinf for control panel from front
}

module.exports = new UsersController();