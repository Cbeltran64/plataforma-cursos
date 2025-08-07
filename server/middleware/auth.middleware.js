const jwt = require('jsonwebtoken');

module.exports = function (roles = []) {
  if (typeof roles === 'string') roles = [roles];

  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Token inválido' });
      if (roles.length && !roles.includes(decoded.role))
        return res.status(403).json({ message: 'Sin permisos' });

      req.user = decoded;
      next();
    });
  };
};