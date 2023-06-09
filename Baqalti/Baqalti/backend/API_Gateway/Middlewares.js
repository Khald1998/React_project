const validator = require('validator');

// Add
function AddRequiredFields(req, res, next) {
  const { name, cost, quantity } = req.body;
  if (!name || !cost || !quantity) {
      return res.status(400).json({ message: 'Name, cost, and quantity are required fields ' });
  }
  next();
}
function AddFieldType(req, res, next) {
  const { name, cost, quantity } = req.body;
  if (typeof name !== 'string' || typeof cost !== 'number' || typeof quantity !== 'number') {
      return res.status(400).json({ message: 'Invalid field types: name should be a string, cost and quantity should be numbers ' });
  }
  next();
}
//-----------------------------------------------------------------------------------------------------
// Add
// Profile

function verifyTokenExisting(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
      res.status(403).json({ 'message': 'invalid, no Bearer token' });
    }
}
//-----------------------------------------------------------------------------------------------------
//Loginn
function checkCredentials(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  next();
}

// Middleware to validate email and password as strings
function validateCredentials(req, res, next) {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password must be strings.' });
  }

  next();
}

// Middleware to validate email format
function validateEmailFormat(req, res, next) {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  next();
}
//-----------------------------------------------------------------------------------------------------
//Register





  const  checkRequiredFieldsRegister = (req, res, next) => {
    const { name, phone, email, username, password } = req.body;
    if (!name || !phone || !email || !username || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
  };

const checkRequiredFieldsRegisterType = (req, res, next) => {
    const { name, phone, email, username, password } = req.body;
  
    if (typeof name !== 'string') {
      return res.status(400).json({ error: 'Name should be a string.' });
    }
  
    if (typeof phone !== 'number') {
      return res.status(400).json({ error: 'Phone should be a number.' });
    }
  
    if (typeof email !== 'string') {
      return res.status(400).json({ error: 'Email should be a string.' });
    }
  
    if (typeof username !== 'string') {
      return res.status(400).json({ error: 'Username should be a string.' });
    }
  
    if (typeof password !== 'string') {
      return res.status(400).json({ error: 'Password should be a string.' });
    }
    if (phone.toString().length <= 9) {
        return res.status(400).json({ error: 'Phone number must be more than 9 digits.' });
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
      }
    
    next();
  };


module.exports = {
    verifyTokenExisting,
    AddRequiredFields,
    checkRequiredFieldsRegister,
    checkRequiredFieldsRegisterType,
    checkCredentials,
    validateCredentials,
    validateEmailFormat,
    AddFieldType
  };