const express = require("express")
const morgan = require("morgan")
const storeRouter = require("./routes/store")
// const cors = require("cors")

const app = express()
app.use(express.json())
app.use("/store", storeRouter)
// app.use(cors())

app.use(morgan("tiny"))
app.get("/", async (req, res, next) => {
  res.status(200).json({ping:"pong"})
})

// Will handle all 404 errors - where end point doesn't exist 
app.use((req,res,next) => {
  return next(new NotFoundError())
})


// Generic error handler 
app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message 
  return res.status(status).json({
      error: {message, status}
  })
})



const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})