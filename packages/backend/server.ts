import express from 'express'
import * as http from 'http'
import cookieParser from 'cookie-parser'
import pino from 'express-pino-logger'
import bodyParser from 'body-parser'

const createServer = (sessionSecret = 'secret', reqLimit = '100kb') => {
    const app = express()

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false, limit: reqLimit }))
    // parse application/json
    app.use(bodyParser.json({ limit: reqLimit }))
    app.use(cookieParser(sessionSecret))
    // Rest logger
    app.use(pino())

    app.get('/', (req, res) => {
        res.send('hello world')
    })

    const server = http.createServer(app)
    return server
}

export default createServer
