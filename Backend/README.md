# User Registration API Documentation

## Register User
Endpoint for creating a new user account.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Required Fields
| Field              | Type   | Description                    |
|-------------------|--------|--------------------------------|
| fullname.firstname| string | User's first name (min 3 chars)|
| fullname.lastname | string | User's last name (min 3 chars) |
| email            | string | User's email address           |
| password         | string | User's password (min 6 chars)  |

### Response Codes
| Status | Description                                      |
|--------|------------------------------------------------|
| 201    | User successfully created                       |
| 400    | Bad request (missing or invalid fields)         |
| 409    | Conflict (email already exists)                 |
| 500    | Internal server error                           |

### Example Responses

#### Successful Registration (201)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65a123b456789c0def123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Validation Error (400)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Firstname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

#### Email Already Exists (409)
```json
{
  "status": "error",
  "message": "Email already registered"
}
```

#### Server Error (500)
```json
{
  "status": "error",
  "message": "Internal server error"
}
```
