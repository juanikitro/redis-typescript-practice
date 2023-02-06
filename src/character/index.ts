import axios from 'axios'
import express from 'express'
import * as redis from 'redis'
require('dotenv').config()
export const charactersRouter = express.Router()

const client = redis.createClient({
	socket: { host: 'localhost', port: 6379 },
	password: process.env.REDIS_PASSWORD,
})

const todayEnd = new Date().setHours(23, 59, 59, 999)

charactersRouter.get('/', async (req, res) => {
	try {
		await client.connect()

		const redisData = await client.get(req.originalUrl)

		if (!redisData) {
			const apiResponse = await axios.get(
				'https://rickandmortyapi.com/api/character'
			)

			await client.set(req.originalUrl, JSON.stringify(apiResponse.data))
			await client.expireAt(req.originalUrl, todayEnd)
			await client.quit()

			return res.json(apiResponse.data)
		}

		await client.quit()

		return res.json(JSON.parse(redisData))
	} catch (error) {
		console.error(error)

		return res.status(500).json(error)
	}
})

charactersRouter.get('/:id', async (req, res) => {
	try {
		await client.connect()

		const redisData = await client.get(req.originalUrl)

		if (!redisData) {
			const apiResponse = await axios.get(
				`https://rickandmortyapi.com/api/character/${req.params.id}`
			)

			await client.set(req.originalUrl, JSON.stringify(apiResponse.data))
			await client.expireAt(req.originalUrl, todayEnd)
			await client.quit()

			return res.json(apiResponse.data)
		}

		await client.quit()

		return res.json(JSON.parse(redisData))
	} catch (error) {
		if (client.isOpen) {
			await client.quit()
		}

		console.error(error)

		return res.status(500).json(error)
	}
})
