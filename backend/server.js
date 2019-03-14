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

app.get('/getAllLists/', (req, res) => {
	db.select('*')
		.from('lists')
		.then(data => res.json(data))
})

app.get('/addList/', (req, res) => {
	
	const {name, renew, hr} = req.body

	db.transaction(trx => {

		trx.insert({
			name: name,
			renew: renew,
			hr: hr
		})
		.into('lists')
		.returning('name')
		.then(listName => {
			return trx.schema.createTable(listName[0], table => {
					table.increments();
					table.string('name').unique();
				})
			.then(data => console.log(data[0].command + " '" + listName + "' "))
			.catch(err => {
				console.log(err)
				trx.rollback
			})

		})
		.then(trx.commit)
		.then(res.json("added list " + " '" + name + "' "))
		.catch(trx.rollback)
	})
})

app.get('/delList/', (req, res) => {
	
	db('lists')
		.where('name', req.body.name)
		.del()
		.then(data => {
			if(data == 1){
				res.json("Deleted " + data + " list")
			}
			else{
				res.json("Deleted " + data + " lists")	
			}
		})

	db.schema.dropTable(req.body.name)
		.then(data => console.log(data.command + " '" + req.body.name + "' "))

})

app.listen(port, () => console.log(`This server is listening on port ${port}`))

