import apiApp from './main/app'

const app_port = process.env.PORT || 5000
const listenCallback = () => console.log(`Listening on port ${app_port}`)

apiApp.listen(app_port, listenCallback)