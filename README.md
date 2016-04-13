# Fender Digital Platform Engineering Challenge

## Description

This API supports the following endpoints. Requests and responses are **JSON**. Currnet endpoiunt is version at /v1 as follows

GET '/v1/users'

DELETE '/v1/users/:id'

POST '/v1/login'

POST '/v1/users/register'

POST '/v1/logout'

Code base is wrriten in Node.js becasue it's performant while allowing for reusable "pieces" of code. Easily updated and familiar with developers.

## Goals
Keep it simple. Try and stay close to the Node API. Limit dependencies. No tricks.

## How to run this app?
Simple. Grab the source code form this repo then.
```
cd platform-test
npm install
npm start
```

In that order and you should have a running app. Most endpoints are protected so remeber to visit '/login' first with valid creds to get a token.

## Notes

Login requires a valid username and pasword in the request as follows
```javascript
{"name":"Sam",
 "password":"746952796540762876!@&@%^$!9E038410",
 "id": 55
```

Once logged in the requester will recieve a valid token. (access_token). This token is requred for additinal requests to protected endpoints. Tokens expire in 1 hour. Refresh tokens in responses are just placeholder at this time.

DELETE '/v1/users/:id'

POST '/v1/users/register'

POST '/v1/logout'

**NOTE  GET '/users' is unprotected intentially for easy testing in this demo.**

## Data
To make it easier to run this application I have not included a traditional database but instead handle most of the data manipulation in memory in the DataActions object. This is only for this test and becasue the data is very limited.
Cache of logged out token are also handled in app memeory but should really be independent in a memstore.


**Additional Info**

TODO refresh tokens should be issued.
TODO Validate JOSN middleware


