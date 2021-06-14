const express = require("express")
const morgan = require("morgan")
const storeRouter = require("./routes/store")

const app = express()
app.use(express.json())
app.use("/store", storeRouter)
// app.use("/gift-exchange", giftExchange)

app.use(morgan("tiny"))
app.get("/", async (req, res, next) => {
  res.status(200).json({ping: "pong"})
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})

