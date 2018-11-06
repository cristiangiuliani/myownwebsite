const Joi = require('joi');
const express = require('express');
const app = express();
const courses = [
	{id: 1, name: 'html'},
	{id: 2, name: 'css'},
	{id: 3, name: 'javascript'}
]

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello!!!!');
});
app.get('/courses', (req, res) => {
	res.send(course);
});

app.post('/courses',(req, res) => {
	const { error } = validateCourse(req.body);
	if(error) return res.status(400).send(error.details[0].message);
		
	const course = {
			id: courses.length + 1,
			name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/courses/:id', (req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) return res.status(404).send('Not found');

	// const result = validateCourse(req.body);
	// Object destructuring get result.error
	const { error } = validateCourse(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	course.name = req.body.name;
	res.send(course);
});

app.delete('/courses/:id', (req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) return res.status(404).send('Not found');

	const index = courses.indexOf(course);
	courses.splice(index,1);

	res.send(course);
});

app.get('/courses/:id',(req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) return res.status(404).send('Not found');
	res.send(course)
});
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening port ${port}...`))


function validateCourse(course){
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}