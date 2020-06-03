import server from './server'

const port = process.env.PORT || 3000
server().listen(port, () =>
    console.log(`App is listening on localhost:${port}`)
)
