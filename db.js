const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://...:...@cluster0.ca8hzyg.mongodb.net/?retryWrites=true&w=majority')

async function main() {
	try {
		console.log('polaczenie rozpoczete')
		await client.connect()
		console.log('polaczenie udane')
	} catch (err) {
		console.error(err)
	}
}

main()
