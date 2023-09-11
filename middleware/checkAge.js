function checkAge(req, res, next) {
  if (req.query.age >= 17) {
    next()
  } else {
    res.send("Unauthorized")
  }
}

module.exports = checkAge