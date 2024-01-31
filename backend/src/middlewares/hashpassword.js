const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hash = async (req, res, next) => {
  try {
    const hashed = await argon2.hash(req.body.password, hashingOptions);
    req.body.password = hashed;
    delete req.body.newPassword;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hash };
