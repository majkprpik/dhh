# Table of contents
1. [Users](#Users)
2. [Shift](#Shifts)
3. [Roles](#Roles)
4. [Schedules](#Schedules)
5. [Permissions](#Permissions)
6. [RuleRoleShift](#RuleRoleShift)

# Users

## POST api/users  
### Add/Register a user
### Request (application/json)
```json    
    password: "pero1234" - string, 6-30 chars  
    email: "perop@gmail.com" - string, valid email  
    firstname: "Pero"
    lastname: "Peric"
    _role: "5bdda1fe66c7e619987328a3" - role id
```

### Response 200 (application/json)
    returns above sent user with hashed password


## POST api/users/login
### Login a user
### Request (application/json)
```json    
    email: "perop@gmail.com" // string, valid email
    password: "pero1234" - string, 6-30 chars
```

### Response 200 (application/json)
```json    
    success: true
    token: "Bearer " + token - jwt
```

## GET api/users/hours
### Calculate hours for all users

### Response 200 (application/json)
```json    
    message: "Work hours calculated!"
```

## DELETE api/users/:id
### Delete a user
### Request (application/json)
```json    
    id: user id
```

### Response 200 (application/json)
```json    
    success: true
```

## GET api/users/:id
### Get user
### Request (application/json)
```json    
    id: user id
```

### Response 200 (application/json)
```json    
    password: "pero1234" - string, 6-30 chars
    email: "perop@gmail.com" - string, valid email
    firstname: "Pero"
    lastname: "Peric"
    _role: "5bdda1fe66c7e619987328a3" - role id
    monthlyNumberOfHours: [
        month: "Jan" - string
        numberOfHours: 100 - number
    ]
```

## GET api/users
### Get all users

### Response 200 (application/json)
```json    
    password: "pero1234" - string, 6-30 chars
    email: "perop@gmail.com" - string, valid email
    firstname: "Pero"
    lastname: "Peric"
    _role: "5bdda1fe66c7e619987328a3" - role id
    monthlyNumberOfHours: [
        month: "Jan" - string
        numberOfHours: 100 - number
    ]
```

## GET api/users/current
### Returns current user
### Request (application/json)
```json    
    header{
        token: "Bearer " + token - jwt
    }
```

### Response 200 (application/json)
```json
    firstname: "Pero" - string
    email: "perop@gmail.com" - string, valid email
```


# Shifts
## POST api/shifts
### Add a shift
### Request (application/json)
```json
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
    priority: "false" - boolean, not required
    roles: [] - role id, not required
```

### Response 200 (application/json)
    returns above sent shift

### Response 400 (application/json)
```json    
    name: "Shift already exists"
```

## DELETE api/shifts/:id
### Remove a shift
### Public
### Request (application/json)
```json    
    id: shift id
```

### Response 200 (application/json)
```json    
    success: true
```

### Response 400 (application/json)
```json    
    id: "Shift to delete not found"
```

## PATCH api/shifts/:id
### Update a shift
### Request (application/json)
```json
    id: shift id
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
    priority: "false" - boolean, not required
    roles: [] - role id, not required
```

### Response 200 (application/json)
```json    
    success: true
```

### Response 400 (application/json)
```json    
    id: "Shift to update not found"
```

## GET api/shifts/:id
### Get shift
### Request (application/json)
```json    
    id: shift id
```

### Response 200 (application/json)
```json
    id: shift id
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
    priority: "false" - boolean, not required
    roles: [] - role id, not required
```

### Response 400 (application/json)
```json    
    noshiftfound: "No shift was found"
```

## GET api/shifts
### Get all shifts

### Response 200 (application/json)
```json
    id: shift id
    name: "Smjena 1" - string    
    start: "8" - number
    end: "16" - number
    priority: "false" - boolean, not required
    roles: [] - role id, not required
```

### Response 400 (application/json)
```json    
    noshiftsfound: "No shifts was found"
```


# Roles
## POST api/roles/add
### Add a role
### Request (application/json)
```json    
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id, not required
```

### Response 200 (application/json)
    returns above sent role

### Response 400 (application/json)
```json    
    name: "Role already exists"
```

## POST api/roles/remove
### Remove a role
### Request (application/json)
```json    
    _id: role id
```

### Response 200 (application/json)
```json    
    success: true
```

### Response 400 (application/json)
```json    
    _id: "Role to delete not found"
```


## PUT api/roles/update
### Update a role
### Request (application/json)
```json    
    _id: role id
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id, not required
```

### Response 200 (application/json)
```json    
    success: true
```

### Response 400 (application/json)
```json    
    _id: "Role to update not found"
```

## GET api/roles/get
### Get role by id
### Request (application/json)
```json    
    _id: role id
```

### Response 200 (application/json)
```json    
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id, not required
```

### Response 400 (application/json)
```json    
    norolefound: "No role was found"
```

## GET api/roles
### Get all roles
### Response 200 (application/json)
```json
    name: "L1 agent" - string, 3-30 chars
    permission: "..." - id, not required
```

### Response 400 (application/json)
```json
    norolesfound: "No roles where found"
```

# Permissions
## POST api/permissions
### Add a permission
### Request (application/json)
```json
      name: "lider", - string, 3-30 chars
      view: "1", - number, 0-1
      insert: "1", - number, 0-1
      update: "1", - number, 0-1
      delete: "1", - number, 0-1
      request: "1" - number, 0-1
```
### Response 200 (application/json)
  returns above sent permission

### Response 400 (application/json)
```json
    name: "Permission already exists"
```
## DELETE api/permissions/:id
### Remove a permission by id
### Request (application/json)
```json
    id: "..." - permission id
```
### Response 200 (application/json)
```json
    success: "true"
```
### Response 404 (application/json)
```json
    id: "Permission to delete not found"
```

## PATCH api/permissions/:id
### Update a permission by id
### Request (application/json)
```json
    id: "..." - permission id
```
### Response 200 (application/json)
  returns the updated above sent permission

### Response 404 (application/json)
```json
    _id: "Permission to update not found"
```

## GET api/permissions/:id
### Get permission by id
### Request (application/json)
```json
    id: "..." - permission id
```
### Response 200 (application/json)
```json
      _id: "..." - permission id
      name: "permission name",
      view: "1",
      insert: "1",
      update: "0",
      delete: "1",
      request: "1"
```


### Response 404 (application/json)
```json
    nopermissionsfound: "No permissions were found"
```
## GET api/permissions
### Get all permissions
### Response 200 (application/json)
```json
      _id: "..." - permission id
      name: "permission name",
      view: "1",
      insert: "1",
      update: "0",
      delete: "1",
      request: "1"
```
### Response 404 (application/json)
```json
    nopermissionsfound: "No permissions were found"
```

# Schedules
## POST api/schedules
### Add a schedule
### Request (application/json)
```json
    month: "01/2018" - string
    days: [
        {
            day: "15" - string -> datum
            type: "R" - string -> vrsta
            dayOfWeek: "PO" - string -> dan_u_tjednu
            shifts: [
                {
                    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    _user: "5be2c6aefbffa72a9c2f67fb" - user id
                }
            ]
        }
    ]
```

### Response 200 (application/json)
    returns above sent schedule

### Response 400 (application/json)
```json
    month: "Schedule already exists"
```

## PATCH api/schedules/:id
### Update a schedule
### Request (application/json)
```json
    id: "..." - schedule id

    month: "01/2018" - string
    days: [
        {
              day: "15" - string
              type: "R" - string
              dayOfWeek: "PO" - string
            shifts: [
                {
                    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    _user: "5be2c6aefbffa72a9c2f67fb" - user id
                }
            ]
        }
    ]
```

### Response 200 (application/json)
    returns above sent schedule

### Response 400 (application/json)
```json
    _id: "Schedule to update not found"
```

## GET api/schedules
### Returns all schedules
### Response 200 (application/json)
```json
    month: "01/2018" - string
    days: [
        {
            day: "15" - string
            type: "R" - string
            dayOfWeek: "PO" - string
            shifts: [
                {
                    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
                    _user: "5be2c6aefbffa72a9c2f67fb" - user id
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
```json
    id: "..." - schedule id
```
### Response 200 (application/json)
```json
    success: "true"
```
### Response 404 (application/json)
```json
    id: "Schedule to delete not found"
```


## DELETE api/schedules/
### Remove all schedules

### Response 200 (application/json)
```json
    success: "true"
```

# RuleRoleShift
## POST api/ruleroleshift
### Add a rule
### Request (application/json)
```json
    _role: "5bdda1fe66c7e619987328a3" - role id
    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
```

### Response 200 (application/json)
    returns above sent rule

### Response 400 (application/json)
```json
    month: "Rule already exists"
```

## DELETE api/ruleroleshift/:id
### Remove a rule by id
### Request (application/json)
```json
    id: "..." - rule id
```
### Response 200 (application/json)
```json
    success: "true"
```
### Response 404 (application/json)
```json
    id: "Rule to delete not found"
```

## PATCH api/ruleroleshift/:id
### Update a rule
### Request (application/json)
```json
    _role: "5bdda1fe66c7e619987328a3" - role id
    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
```

### Response 200 (application/json)
    returns above sent rule

### Response 400 (application/json)
```json
    _id: "Rule to update not found"
```

## GET api/ruleroleshift
### Returns all rules
### Response 200 (application/json)
```json
    _role: "5bdda1fe66c7e619987328a3" - role id
    _shift: "5bdda62c5af0de0b4c94a49c" - shift id
```

### Response 400 (application/json)
```json
    norulesfound: "No rules where found"
```
