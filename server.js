const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())

/**
 * 200 - OK
 * 201 - created
 * 401 - Unauthorized
 * 404 - Page Not found
 * 500 - Internal Server Error
 */

app.get('/', function(request, response) {
    // response.send('hello')
    const x = {
        "message" : "hello"
    }
    response.status(200).json(x)
})

app.post('/validate-user', function(request, response) {
    if(request.body.user_name === 'abcd' && request.body.password === '0000') {
        response.status(200).json({
            "message" : "valid user"
        })
    } else {
        response.status(401).json({
            "message" : "invalid user"
        })
    }
})

// get, post, put, patch, delete

app.listen(5500, function() {
    console.log('Listening on port 5500...')
})
