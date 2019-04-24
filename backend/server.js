const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const knex = require('knex');

const app = express()
const port = 2000

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

app.post('/addItem/', (req, res) => {
	const {list, item} = req.body

	if(item){
		db(list)
		.insert({
			name: item
		})
		.then(res.json('success'))
		.catch(err => {
			console.log(err)
			res.status(400).json('an error occurred')
		})
	}else{
		res.status(400).json('an error occurred')
	}

	
})

app.post('/delItem/', (req, res) => {
	const {list, item} = req.body

	db(list)
		.where('name', item)
		.del()
		.then(res.json('success'))
		.catch(err => {
			console.log(err)
			res.status(400).json('an error occurred')
		})
})

app.put('/checkItem/', (req, res) => {
	const {name, list, checkState} = req.body

	console.log(list)

	db(list)
		.where('name', '=', name)
		.update({
			isChecked: checkState
		})
		.then(res.json('success'))
		.catch(err => res.status(400).json('an error occurred'))
})

app.post('/getList/', (req, res) => {
	const {list} = req.body

	db(list)
		.orderBy('id')
		.returning('list')
		.then(data => res.json(data))
		.catch(err => res.status(400).json('an error occurred'))
})

app.post('/getAllLists/', (req, res) => {
	db.select('*')
		.from('lists')
		.then(data => res.json(data))
})

app.post('/addList/', (req, res) => {
	
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
		.then(res.json("success"))
		.catch(trx.rollback)
	})
})

app.post('/delList/', (req, res) => {

	const {name} = req.body

	db('lists')
		.where('name', name)
		.del()
		.then(data => {
			if(data == 1){
				res.json("Deleted " + data + " list")
			}
			else{
				res.json("Deleted " + data + " lists")	
			}
		})

	db.schema.dropTable(name)
		.then(data => console.log(data.command + " '" + name + "' "))

})

app.listen(port, () => console.log(`This server is listening on port ${port}`))

