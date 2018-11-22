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
    role: "5bdda1fe66c7e619987328a3" - role id
```

### Response 200 (application/json)
    returns above sent user with hashed password


## POST api/users/login
### Login a user
### Request (application/json)
```javascript    
    email: "perop@gmail.com" // string, valid email
    password: "pero1234" - string, 6-30 chars
```

### Response 200 (application/json)
```javascript    
    success: true
    token: "Bearer " + token - jwt
```

## GET api/users/hours
### Calculate hours for all users

### Response 200 (application/json)
```javascript    
    message: "Work hours calculated!"
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
    role: "5bdda1fe66c7e619987328a3" - role id
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
    role: "5bdda1fe66c7e619987328a3" - role id
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
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
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
    id: "Shift to delete not found"
```

## PATCH api/shifts/:id
### Update a shift
### Request (application/json)
```javascript    
    id: shift id
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
```

### Response 200 (application/json)
```javascript    
    success: true
```

### Response 400 (application/json)
```javascript    
    id: "Shift to update not found"
```

## GET api/shifts/:id
### Get shift
### Request (application/json)
```javascript    
    id: shift id
```

### Response 200 (application/json)
```javascript    
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
```

### Response 400 (application/json)
```javascript    
    noshiftfound: "No shift was found"
```

## GET api/shifts
### Get all shifts

### Response 200 (application/json)
```javascript    
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
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

# Permissions
## POST api/permissions
### Add a permission
### Request (application/json)
```javascript
    {
      name: "lider", - string, 3-30 chars
      view: "1", - number, 0-1
      insert: "1", - number, 0-1
      update: "1", - number, 0-1
      delete: "1", - number, 0-1
      request: "1" - number, 0-1
    }
```
### Response 200 (application/json)
  returns above sent permission

### Response 400 (application/json)
```javascript
    name: "Permission already exists"
```
## DELETE api/permissions/:id
### Remove a permission by id
### Request (application/json)
```javascript
    id: "..." - permission id
```
### Response 200 (application/json)
```javascript
    success: "true"
```
### Response 404 (application/json)
```javascript
    id: "Permission to delete not found"
```

## PATCH api/permissions/:id
### Update a permission by id
### Request (application/json)
```javascript
    id: "..." - permission id
```
### Response 200 (application/json)
  returns the updated above sent permission

### Response 404 (application/json)
```javascript
    _id: "Permission to update not found"
```

## GET api/permissions/:id
### Get permission by id
### Request (application/json)
```javascript
    id: "..." - permission id
```
### Response 200 (application/json)
```javascript
    {
      _id: "..." - permission id
      name: "permission name",
      view: "1",
      insert: "1",
      update: "0",
      delete: "1",
      request: "1"
    }
```


### Response 404 (application/json)
```javascript
    nopermissionsfound: "No permissions were found"
```
## GET api/permissions
### Get all permissions
### Response 200 (application/json)
```javascript
    [{
      _id: "..." - permission id
      name: "permission name",
      view: "1",
      insert: "1",
      update: "0",
      delete: "1",
      request: "1"
    }]
```
### Response 404 (application/json)
```javascript
    nopermissionsfound: "No permissions were found"
```

# Schedules
## POST api/schedules
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

## PATCH api/schedules/:id
### Update a schedule
### Request (application/json)
```javascript
    id: "..." - schedule id

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


## DELETE api/schedules/:id
### Remove a schedule by id
### Request (application/json)
```javascript
    id: "..." - schedule id
```
### Response 200 (application/json)
```javascript
    success: "true"
```
### Response 404 (application/json)
```javascript
    id: "Schedule to delete not found"
```


## DELETE api/schedules/
### Remove all schedules
