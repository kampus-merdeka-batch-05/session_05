function checkShoes(req, res, next) {
  if (req.query.shoes === "yes") {
    next()
  } else {
    res.send("Unauthorized")
  }
}

module.exports = checkShoes