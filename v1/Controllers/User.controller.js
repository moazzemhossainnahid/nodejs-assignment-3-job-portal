const { signupService, findUserByEmail, findUserByToken } = require("../Services/User.service");
const { sendMailWithGmail, sendMailWithMailGun } = require("../../Utilities/email");
const { generateToken } = require("../../Utilities/token");

exports.signup = async (req, res) => {
    try {

        const existingUser = await findUserByEmailService(req.body.email);
        if (existingUser) {
            return res.status(400).json({ error: "User Already Exists" });
        };

        const user = await signupService(req.body);

        const token = user.generateConfirmationToken();

        await user.save({ validateBeforeSave: false });

        const mailData = {
            to: [user.email],
            subject: "Verify your Account",
            text: `Thank you for creating your account. Please confirm your account here: ${req.protocol
                }://${req.get("host")}${req.originalUrl}/confirmation/${token}`,
        };

        await sendMailWithMailGun(mailData);

        res.status(200).json({
            status: "success",
            message: "Successfully signed up",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};