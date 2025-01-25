const fs        = require('fs');
const path      = require('path');
const jwt       = require('jsonwebtoken');
const UserMdl   = require('../models/UserModel');

//This is user signup event
exports.userSignup = async (req, res) =>
{
    try
    {
        const { user_name, user_email, user_phone, user_password } = req.body;
        console.log("username====>",req.body);
        let newUser = await UserMdl.findOne({ user_email });

        if (newUser)
        {
            res.status(200).json({ message: 'Repeat account' });
        }
        else
        {
            newUser = new UserMdl({ user_name, user_email, user_password, user_phone });
            await newUser.save();
            
            res.status(200).json({
                message: 'SignUp success!',
            });
        }
    }
    catch (error)
    {
        res.status(500).json({ message: 'Failed to Singup', error });
    }
}


//This is user sigin event
exports.userSignin = async (req, res) =>
{
    try
    {
        const { user_email, user_password } = req.body;

        const newUser       = await UserMdl.findOne({ user_email });

        const fileUrl       = ``;
        const imagePath     = ``;

        if (newUser)
        {
            fileUrl     = `${req.protocol}://${serverUrl}/uploads/${newUser.currentImg}`;
            imagePath   = path.join(dataFolderPath, newUser.currentImg);

            if (newUser.isLogin)
            {
                return res.json({ message: 'Already login User.' });
            }
            if (newUser.password === password)
            {
                if (fs.existsSync(imagePath))
                {
                    newUser.isLogin = true;
                    await newUser.save();
                    return res.status(200).json({ message: 'success', newUser, filePath: fileUrl });
                } else {
                    newUser.currentImg = '';
                    newUser.isLogin = true;
                    await newUser.save();
                    return res.status(200).json({ message: 'success', newUser });
                }
            } else 
            {
                return res.json({ message: "Wrong Password" })
            }
        } else
        {
            res.status(200).json({ message: 'Not exist account.' });
        }
    } catch (error)
    {
        res.status(500).json({ message: 'Failed to Singup', error });
    }
}

//This is userInfo event
exports.userInfo = async (req, res) =>
{
    const newUser = await UserMdl.find();
    return res.json({ newUser })
}

//This is userLogout event
exports.userLogout = async (req, res) =>
{
    const { who } = req.body;
    let newUser = await UserMdl.findById(who);

    if (newUser)
    {
        newUser.isLogin = false;
        await newUser.save();
        return res.json({ message: 'logout' });
    }
}

// exports.changeName = async (req, res) => {
//     const { user_email, editName } = req.body;
//     let user = await UserMdl.findOne({ user_email });
//     if (user) {
//         const fileUrl = `${req.protocol}://${serverUrl}/uploads/${user.currentImg}`;
//         user.name = editName;
//         // user.wallet_score = 18;
//         await user.save();
//         return res.json({ message: 'success', admin: user, filePath: fileUrl });
//     }
// }

