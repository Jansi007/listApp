const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const knex = require('knex');

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(cors());

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'Titaom50$',
		database: 'listsAppDb'
	}
});

db.select('*').from('lists').then(data => console.log(data))

app.get('/', (req, res) => {
	res.json('Server is running!')
})

app.get('/addItem/', (req, res) => {

})

app.get('/delItem/', (req, res) => {
	
})

app.get('/getList', (req, res) => {
	
})

app.get('/addList/', (req, res) => {
	
})

app.get('/delList/', (req, res) => {
	
})

app.listen(port, () => console.log(`This server is listening on port ${port}`))