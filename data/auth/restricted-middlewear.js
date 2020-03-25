const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.header; //destructing authorization from the header


 const secret = process.env.JWT_SECRET || "is it safe"



  if (authorization) {
    jwt.verify(authorization, secret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: `Can't validate credentials` });
    } else { 
        req.decodeToken = decodedToken


      next();
    }})
  } else {
    res.status(400).json({ message: `Can't validate credentials` });
  }
};
