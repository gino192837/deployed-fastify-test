export default async (fastify, options) => {
    fastify.get('/', (request, reply) => {
        reply.send({ your_ip: request.ip })
    })

    fastify.post('/', (request, reply) => {
        reply.send({ your_ip: request.ip })
    })
}