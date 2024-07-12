#API DOCUMENTATION

## Users

###End Point
GET /users

Header : - Authorization: Bearer Token

Request Body:

```json
{
  "username": "string",
  "email": "email",
  "password": "123"
}
```

Response Body Success:

```json
{
  "data": {
    "username": "string",
    "email": "email",
    "password": "123"
  }
}
```

Response Error:

```json
{
  "message": "string {error}",
  "statusCode": "400"
}
```
