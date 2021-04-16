const users = [{
    id: 1,
    name: "n1",
    email: "e1",
},
{
    id: 2,
    name: "n2",
    email: "e2",
},
];


const router = app => {
    app.get('/', (request, response) => {
        response.send({users});
    });
}

module.exports = router;

