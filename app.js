const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const checkAge = require("./middleware/checkAge")
const checkShoes = require("./middleware/checkShoes")

app.use("/public", express.static(path.join(__dirname, "public")))

// ======== STATIC FILE ==========

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/home.html"))
})

app.get("/about", (req, res) => {
  res.sendFile("./public/pages/about.html", { root: __dirname})
})

app.get("/detail", (req, res) => {
  res.sendFile("./public/pages/detail.html", { root: __dirname})
})

// ======== MIDDLWWARE ===========
// // middleware check sepatu
// app.use("/", (req, res, next) => {
//   if (req.query.shoes === "yes") {
//     next()
//   } else {
//     res.send("Unauthorized")
//   }
// })

// Bisa masuk cafe jika pakai sepatu
app.get("/cafe", checkShoes, (req, res) => {
  res.send("Welcome to cafe abcd!")
})

// Bisa masuk bar, jika pakai sepatu dan umurnya +17
app.get("/bar", checkAge, (req, res) => {
  res.send("Welcome to bar abcd!")
})


app.listen(PORT, () => {
  console.log("This app running on port: ", PORT);
})