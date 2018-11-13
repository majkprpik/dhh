# Table of contents
1. [Users](#Users)
2. [Shift](#Shifts)
3. [Roles](#Roles)
4. [Schedules](#Schedules)
5. [Permissions](#Permissions)

# Users

## POST api/users  
### Add/Register a user 
### Request (application/json)
```javascript    
    username: "perop" - string, 4-30 chars  
    password: "pero1234" - string, 6-30 chars  
    email: "perop@gmail.com" - string, valid email  
    name: "Pero"
    surname: "Peric"
    role: "/" - role id
```

### Response 200 (application/json)
    returns above sent user with hashed password


## POST api/users/login
### Login a user
### Request (application/json)
```javascript    
    email: "perop@gmail.com" - string, valid email
    password: "pero1234" - string, 6-30 chars
```

### Response 200 (application/json)
```javascript    
    success: true
    token: "Bearer " + token - jwt
```

## DELETE api/users/:id
### Delete a user
### Request (application/json)
```javascript    
    id: user id
```

### Response 200 (application/json)
```javascript    
    success: true
```

## GET api/users/:id
### Get user
### Request (application/json)
```javascript    
    id: user id
```

### Response 200 (application/json)
```javascript    
    username: "perop" - string, 4-30 chars
    password: "pero1234" - string, 6-30 chars
    email: "perop@gmail.com" - string, valid email
    name: "Pero"
    surname: "Peric"
    role: "/" - role id
    totalNumberOfHours: 250 - number
    monthlyNumberOfHours: [
        month: "Jan" - string
        numberOfHours: 100 - number
    ]
```

## GET api/users
### Get all users

### Response 200 (application/json)
```javascript    
    username: "perop" - string, 4-30 chars
    password: "pero1234" - string, 6-30 chars
    email: "perop@gmail.com" - string, valid email
    name: "Pero"
    surname: "Peric"
    role: "/" - role id
    totalNumberOfHours: 250 - number
    monthlyNumberOfHours: [
        month: "Jan" - string
        numberOfHours: 100 - number
    ]
```

## GET api/users/current
### Returns current user
### Request (application/json)
```javascript    
    header{
        token: "Bearer " + token - jwt
    }
```

### Response 200 (application/json)
```javascript
    username: "perop" - string
    name: "Pero" - string
    email: "perop@gmail.com" - string, valid email
```


# Shifts
## POST api/shifts
### Add a shift
### Request (application/json)
```javascript    
    start: "8" - number
    duration: "8" - number
```

### Response 200 (application/json)
    returns above sent shift

### Response 400 (application/json)
```javascript    
    name: "Shift already exists"
```

## DELETE api/shifts/:id
### Remove a shift
### Public
### Request (application/json)
```javascript    
    id: shift id
```

### Response 200 (application/json)
```javascript    
    success: true
```

### Response 400 (application/json)
```javascript    
    _id: "Shift to delete not found"
```

## PATCH api/shifts/:id
### Update a shift
### Request (application/json)
```javascript    
    id: shift id
    start: "8" - number
    duration: "8" - number
```

### Response 200 (application/json)
```javascript    
    success: true
```

### Response 400 (application/json)
```javascript    
    _id: "Shift to update not found"
```

## GET api/shifts/:id
### Get shift
### Request (application/json)
```javascript    
    id: shift id
```

### Response 200 (application/json)
```javascript    
    start: "8" - number
    duration: "8" - number
```

### Response 400 (application/json)
```javascript    
    noshiftfound: "No shift was found"
```

## GET api/shifts
### Get all shifts

### Response 200 (application/json)
```javascript    
    start: "8" - number
    duration: "8" - number
```

### Response 400 (application/json)
```javascript    
    noshiftsfound: "No shifts was found"
```


# Roles
## POST api/roles/add
### Add a role
### Request (application/json)
```javascript    
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id
```

### Response 200 (application/json)
    returns above sent role

### Response 400 (application/json)
```javascript    
    name: "Role already exists"
```

## POST api/roles/remove
### Remove a role
### Request (application/json)
```javascript    
    _id: role id
```

### Response 200 (application/json)
```javascript    
    success: true
```

### Response 400 (application/json)
```javascript    
    _id: "Role to delete not found"
```


## PUT api/roles/update
### Update a role
### Request (application/json)
```javascript    
    _id: role id
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id
```

### Response 200 (application/json)
```javascript    
    success: true
```

### Response 400 (application/json)
```javascript    
    _id: "Role to update not found"
```

## GET api/roles/get
### Get role by id
### Request (application/json)
```javascript    
    _id: role id
```

### Response 200 (application/json)
```javascript    
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id
```

### Response 400 (application/json)
```javascript    
    norolefound: "No role was found"
```

## GET api/roles
### Get all roles
### Response 200 (application/json)
```javascript
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id
```

### Response 400 (application/json)
```javascript
    norolesfound: "No roles where found"
```


# Schedules
## POST api/schedules/add
### Add a schedule
### Request (application/json)
```javascript
    month: "01/2018" - string
    days: [
        {
            day: "R" - string
            shifts: [
                {
                    shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    user: "5be2c6aefbffa72a9c2f67fb" - user id
                }
            ]
        }
    ]
```

### Response 200 (application/json)
    returns above sent schedule

### Response 400 (application/json)
```javascript
    month: "Schedule already exists"
```

## POST api/schedules/update
### Update a schedule
### Request (application/json)
```javascript
    _id: "..." - schedule id

    month: "01/2018" - string
    days: [
        {
            day: "R" - string
            shifts: [
                {
                    shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    user: "5be2c6aefbffa72a9c2f67fb" - user id
                }
            ]
        }
    ]
```

### Response 200 (application/json)
    returns above sent schedule

### Response 400 (application/json)
```javascript
    _id: "Schedule to update not found"
```

## GET api/schedules
### Returns all schedules
### Response 200 (application/json)
```javascript
    month: "01/2018" - string
    days: [
        {
            day: "R" - string
            shifts: [
                {
                    shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    user: "5be2c6aefbffa72a9c2f67fb" - user id
                }
            ]
        }
    ]
```
### Response 400 (application/json)
    norolesfound: "No schedules where found"
