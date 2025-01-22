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

## Login User
Endpoint for authenticating an existing user.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Required Fields
| Field    | Type   | Description                    |
|----------|--------|--------------------------------|
| email    | string | User's email address          |
| password | string | User's password (min 6 chars)  |

### Response Codes
| Status | Description                                      |
|--------|------------------------------------------------|
| 200    | Login successful                                |
| 400    | Bad request (missing or invalid fields)         |
| 401    | Unauthorized (invalid credentials)              |
| 500    | Internal server error                           |

### Example Responses

#### Successful Login (200)
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
    }
  ]
}
```

#### Invalid Credentials (401)
```json
{
  "message": "Invalid email or password"
}
```

#### Server Error (500)
```json
{
  "status": "error",
  "message": "Internal server error"
}
```

## Get User Profile
Endpoint for retrieving authenticated user's profile.

### Endpoint
```
GET /users/profile
```

### Authentication
Bearer Token required in header

### Response Codes
| Status | Description                                      |
|--------|------------------------------------------------|
| 200    | Profile retrieved successfully                  |
| 401    | Unauthorized (invalid or missing token)         |
| 500    | Internal server error                           |

### Example Responses

#### Successful Response (200)
```json
{
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

#### Unauthorized (401)
```json
{
  "message": "Unauthorized access"
}
```

## Logout User
Endpoint for logging out a user.

### Endpoint
```
POST /users/logout
```

### Description
Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication
Bearer Token required in header or cookie.

### Response Codes
| Status | Description                                      |
|--------|------------------------------------------------|
| 200    | Logout successful                               |
| 401    | Unauthorized (invalid or missing token)         |
| 500    | Internal server error                           |

### Example Responses

#### Successful Logout (200)
```json
{
  "message": "Logged out successfully"
}
```

#### Unauthorized (401)
```json
{
  "message": "Unauthorized access"
}
```