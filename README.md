# Fender Digital Platform Engineering Challenge

## Description

This API supports the following endpoints: 
- Requests and responses are **JSON** 
- Current endpoint is versioned as /v1
- Provide a Content-type header on each request "Content-Type" : "application/json"

GET '/v1/users'

DELETE '/v1/users/:id'

PUT '/v1/users/:id'

POST '/v1/login'

POST '/v1/users/register'

POST '/v1/logout'

Code base is wrriten in Node.js because it is concurrent and allows for reusable "snippets" of code. It is easy to update and familiar to developers.

## Goals
Simplicity. Maximum utilization of the Node API. Limit dependencies. No tricks.

## How to run this app?
STEP 1:
Grab the source code from this repo.

STEP 2:
```
cd platform-test
npm install
npm start
```
Most endpoints are protected. Login at '/login' with valid credentials to receive a token.

## Notes
Login requires a valid username and password in the following format:
```
javascript
{"name":"Sam",
 "password":"746952796540762876!@&@%^$!9E038410",
 "id": "55"
```

Once logged in the user recieves a valid token (access_token). This token is required for additional requests and it protects endpoints. Tokens expire in one hour. Refresh tokens in responses are placeholder at this time.

DELETE '/v1/users/:id'

PUT '/v1/users/:id'

POST '/v1/users/register'

POST '/v1/logout'

**NOTE  GET '/users' is unprotected intentionally. This provides a method to simplify testing in this demo.**

## Data
 In order to provide the simplicity desired, data manipulation is handled in memory via the DataActions object. Since the data required for this test is limited, this method is most efficient. The cache of logged out tokens are currently handled in app memory but would ideally be independently handled in a memstore.

## Example requests
POST '/v1/login'
```
{"name":"Sam",
 "password":"746952796540762876!@&@%^$!9E038410",
 "id": "55"
}
```
DELETE '/v1/users/:id'
```
{"name":"Trudy",
 "password":"mypassword",
 "email": "someil@someemail.com"
}
```
POST '/v1/users/register'
```
{"name":"Emanual",
 "password":"mypassword",
 "email": "someil@someemail.com"
}
```
PUT '/v1/users/:id'
```
{"name":"heather",
 "password":"746952796540762876!@&@%^$!9E038410",
 "id": "55"
}
```
POST '/v1/logout'  --  This demonstrates revoking a token. Currently, it does not consider valid versus invalid users.
```
{"name":"Emanual",
 "password":"mypassword",
 "email": "someil@someemail.com"
}
```

**Additional Info**

TODO: 
- Issue refresh tokens
- Validate JSON middleware


