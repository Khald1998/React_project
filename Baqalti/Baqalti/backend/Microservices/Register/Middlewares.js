
function validateRequiredFields(req, res, next) {
    const { name, phone, email, username, password } = req.body;
    if (!name || !phone || !email || !username || !password) {
      return res.status(400).send({ message: 'Missing required fields' });
    }
    next();
  }
  
  // Middleware to validate field types
  function validateFieldTypes(req, res, next) {
    const { name, phone, email, username, password } = req.body;
    if (
      typeof name !== 'string' ||
      typeof phone !== 'number' ||
      typeof email !== 'string' ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      return res.status(400).send({ message: 'Invalid field types' });
    }
    next();
  }

module.exports = {
    validateRequiredFields,
    validateFieldTypes
};