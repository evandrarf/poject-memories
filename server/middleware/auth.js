import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decoderData;

    if (token && isCustomAuth) {
      decoderData = jwt.verify(token, "test");

      req.userId = decoderData?.id;
    } else {
      decoderData = jwt.decode(token);

      req.userId = decoderData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
