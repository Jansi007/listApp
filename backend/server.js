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
		user: 'jannis',
		password: 'Titaom50$',
		database: 'listappdb'
	}
});

app.get('/', (req, res) => {
	res.json('Server is running!')
})

app.get('/addItem/', (req, res) => {

})

app.get('/delItem/', (req, res) => {
	
})

app.get('/getList', (req, res) => {
	db.select('*')
		.from('lists')
		.then(data => res.json(data))
})

app.get('/addList/', (req, res) => {
	
	db('lists')
	.insert({
		name: req.body.name,
		renew: req.body.renew,
		hr: req.body.hr
	})
	.then(console.log)
	.catch(console.log)

	db.select('*').from('lists').then(data => res.json(data))

})

app.get('/delList/', (req, res) => {
	
	db('lists')
		.where('name', req.body.name)
		.del()
		.then(data => {
			if(data = 1){
				res.json("Deleted " + data + " list")
			}
			else{
				res.json("Deleted " + data + " lists")	
			}
		})


})

app.listen(port, () => console.log(`This server is listening on port ${port}`))

