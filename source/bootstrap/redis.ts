import redis from 'redis'

const redisClient = redis.createClient()
const connectCallback = () => console.log('Redis client connected ' + new Date())

redisClient.on('connect', connectCallback)
export default redisClient