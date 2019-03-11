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
<<<<<<< HEAD
		user: 'postgres',
		password: 'Titaom50$',
		database: 'listsAppDb'
	}
});

db.select('*').from('lists').then(data => console.log(data))

=======
		user: 'jannis',
		password: 'Titaom50$',
		database: 'listappdb'
	}
});

>>>>>>> 254d8a89ddf842d8f718736dd9fc92f4bd0d6f77
app.get('/', (req, res) => {
	res.json('Server is running!')
})

app.get('/addItem/', (req, res) => {

})

app.get('/delItem/', (req, res) => {
	
})

app.get('/getList', (req, res) => {
<<<<<<< HEAD
	
=======
	db.select('*')
		.from('lists')
		.then(data => res.json(data))
>>>>>>> 254d8a89ddf842d8f718736dd9fc92f4bd0d6f77
})

app.get('/addList/', (req, res) => {
	
<<<<<<< HEAD
=======
	db('lists')
	.insert({
		name: req.body.name,
		renew: req.body.renew,
		hr: req.body.hr
	})
	.then(console.log)
	.catch(console.log)

	db.select('*').from('lists').then(data => res.json(data))

>>>>>>> 254d8a89ddf842d8f718736dd9fc92f4bd0d6f77
})

app.get('/delList/', (req, res) => {
	
<<<<<<< HEAD
})

app.listen(port, () => console.log(`This server is listening on port ${port}`))
=======
	db('lists')
		.where('name', req.body.name)
		.del()
		.then(data => res.json("Deleted " + data + " lists"))


})

app.listen(port, () => console.log(`This server is listening on port ${port}`))

>>>>>>> 254d8a89ddf842d8f718736dd9fc92f4bd0d6f77
