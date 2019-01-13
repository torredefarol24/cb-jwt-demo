import jwtDemoApp from './main/jwtDemo'

const app_port = process.env.PORT || 5000
const listenCallback = console.log(`Listening on port ${app_port}`)

jwtDemoApp.listen(app_port, () => listenCallback)