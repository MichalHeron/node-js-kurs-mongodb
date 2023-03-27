const { MongoClient } = require('mongodb')

const client = new MongoClient(

)

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

