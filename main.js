import apiRoute from './routes/apiRoute.js'
import f from 'fastify'

const fastify = f({ 
    logger: true ,
    ignoreTrailingSlash: true
})


fastify.register(apiRoute, { prefix: '/api' })


const start = async () => {
    try {
        const server = await fastify.listen(4594)
        console.log(`Server running on ${server}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
