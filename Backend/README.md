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
### Example Success Response
# Captain Routes
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "65b234c567890d1efg234567",
    "fullname": {
      "firstname": "James",
      "lastname": "Smith"
    },
    "email": "james.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "KA01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketID": null,
    "isAvailable": true,
    "currentLocation": {
      "type": "Point",
      "coordinates": [0, 0]
    }
  }
}
```

### Error Response Examples

#### Validation Error (400)
```json
{
  "errors": [
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    },
    {
      "msg": "Vehicle capacity must be at least 1",
      "param": "vehicle.capacity",
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

## Register Captain
Register a new captain in the system.

- **Route:** POST /api/captains/register
- **Access:** Public
- **Description:** Creates a new captain account

### Request Body
| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| email | String | Captain's email address | Must be valid email format |
| fullname.firstname | String | Captain's first name | Minimum 3 characters |
| password | String | Account password | Minimum 6 characters |
| vehicle.color | String | Vehicle color | Minimum 3 characters |
| vehicle.plate | String | Vehicle plate number | Minimum 3 characters |
| vehicle.capacity | Number | Vehicle passenger capacity | Minimum 1 |
| vehicle.vehicleType | String | Type of vehicle | Must be 'car', 'motorcycle' or 'auto' |

### Success Response
- **Code:** 200
- **Content:** Returns created captain object

### Error Response
- **Code:** 400
- **Content:** Validation errors if any fields don't meet requirements

### Sample Request
## Get Fare Estimate
Endpoint for calculating estimated fare for a ride.

### Endpoint
```
GET /api/rides/get-fare
```

### Query Parameters
| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| pickup    | object | Pickup location coordinates    |
| dropoff   | object | Dropoff location coordinates   |
| type      | string | Vehicle type (car/auto/bike)   |

### Response Codes
| Status | Description                                |
|--------|--------------------------------------------|
| 200    | Fare calculation successful                |
| 400    | Bad request (invalid parameters)           |
| 500    | Internal server error                      |

### Example Request
```
GET /api/rides/get-fare?pickup[lat]=12.9716&pickup[lng]=77.5946&dropoff[lat]=13.0827&dropoff[lng]=77.5877&type=car
```

### Example Response
```json
{
  "estimatedFare": 250,
  "distance": "8.5 km",
  "duration": "25 mins"
}
```