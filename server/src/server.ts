import "dotenv/config"
import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { CLIENT_URL, PORT } from "./config/getEnv"
import authRoutes from "./routes/auth.routes"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}))

app.get("/api/healthcheck", (req, res) => {
  res.send({ status: "OK" })
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
