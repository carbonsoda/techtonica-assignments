/**
 * 
 * PAIR ACTIVITY:
 * https://github.com/Techtonica/curriculum/blob/main/projects/mailing-list-rest-api.md
 *
 * 
 * The goal was to build an REST API 
 * for a mailing-list Express app
 * 
 * Collaborated with @aedward8
 */

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});


/*
 * ROUTES
 */

app.route('/lists').get((req, res) => {
    // intended output -> ["staff", "cohort-h1-2020"]
    const listsArray = Array.from(lists.keys());
    res.send(listsArray);
})

app.route('/lists/:name').get((req, res) => {
    let name = req.params.name;
    let status = 404;
    let response = 'Unable to fetch data! Mailing list not found';

    if (lists.has(name)) {
        status = 200;
        response = lists.get(name);
    }

    res.status(status).send(response);
}).delete((req, res) => {
    let name = req.params.name;
    let status = 404 ;
    let response = 'Unable to fetch data! Mailing list not found';

    if (lists.has(name)) {
        lists.delete(name);

        status = 200;
        response = 'Operation success';
    }

    res.status(status).send(response);

}).put((req, res) => {

    let newEmailGroup = req.body;
    let status = 201;
    let response = 'You have created a new mailing list!';

    if (lists.has(newEmailGroup.name)) {
        let status = 200;
        response = 'List updated!';
        lists.get(newEmailGroup.name).members.push(newEmailGroup.members);
    } else {
        // lists.set('volunteers', {name: '})
        lists.set(`${newEmailGroup.name}`, newEmailGroup);
    }

    res.status(status).send(response);
})


// Sample data
let lists = new Map();

lists.set('staff', { name: 'staff', members: ["talea@techtonica.org", "michelle@techtonica.org"] });

lists.set('cohort-h1-2021', { name: 'cohort-h1-2021', members: ['avery@gmail.com', 'abby@gmail.com'] });

