var jwt = require("jsonwebtoken");

exports.getToken = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(userId);

        const token = getAccessToken(userId);

        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

function getAccessToken(userId) {
    const apiKeySid = "SK.0.lGc3sWWVpAKKBTtBOuTcFZxMdpS24O8W";
    const apiKeySecret = "Y3R4WHJUQjZsZ09rZ0NJcEM4b3hXeEhpSFZ2WHA0bVE=";
    var now = Math.floor(Date.now() / 1000);
    var exp = now + 3600;

    var header = { cty: "stringee-api;v=1" };
    var payload = {
        jti: apiKeySid + "-" + now,
        iss: apiKeySid,
        exp: exp,
        userId: userId,
    };

    var token = jwt.sign(payload, apiKeySecret, { algorithm: "HS256", header: header });
    return token;
}
