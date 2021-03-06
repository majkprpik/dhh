define({ "api": [
  {
    "type": "delete",
    "url": "ruleroleshift/:id",
    "title": "Delete rule",
    "name": "DeleteRule",
    "group": "RuleRoleShift",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Rule id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Rule deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Rule to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/ruleroleshift.js",
    "groupTitle": "RuleRoleShift"
  },
  {
    "type": "get",
    "url": "ruleroleshift/:id",
    "title": "Get rules",
    "name": "GetRules",
    "group": "RuleRoleShift",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No rules where found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/ruleroleshift.js",
    "groupTitle": "RuleRoleShift",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_role",
            "defaultValue": "5bdda1fe66c7e619987328a3",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_shift",
            "defaultValue": "5bdda62c5af0de0b4c94a49c",
            "description": "<p>Shift id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "ruleroleshift/",
    "title": "Post rule",
    "name": "PostRule",
    "group": "RuleRoleShift",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_shift",
            "description": "<p>Shift id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Rule already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/ruleroleshift.js",
    "groupTitle": "RuleRoleShift",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_role",
            "defaultValue": "5bdda1fe66c7e619987328a3",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_shift",
            "defaultValue": "5bdda62c5af0de0b4c94a49c",
            "description": "<p>Shift id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "ruleroleshift/:id",
    "title": "Update rule",
    "name": "UpdateRule",
    "group": "RuleRoleShift",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Rule id</p>"
          },
          {
            "group": "Parameter",
            "type": "Body",
            "optional": false,
            "field": "body",
            "description": "<p>Cijeli rule body, da ne ponavljam dva puta, identicno je bodyu koji se vrati na success (osim sto ne saljete _id nego id, kako sto je difinirano tu u parametrima)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Rule to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/ruleroleshift.js",
    "groupTitle": "RuleRoleShift",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_role",
            "defaultValue": "5bdda1fe66c7e619987328a3",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_shift",
            "defaultValue": "5bdda62c5af0de0b4c94a49c",
            "description": "<p>Shift id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "schedules/:id",
    "title": "Delete a schedule",
    "name": "DeleteSchedule",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Schedule removed",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Schedule to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/schedules.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "delete",
    "url": "schedules/:id",
    "title": "Delete all schedules",
    "name": "DeleteSchedules",
    "group": "Schedule",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Schedules removed",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/schedules.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "schedules/genereate/year",
    "title": "Generate schedule",
    "name": "GenerateSchedules",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "2018"
            ],
            "optional": false,
            "field": "year",
            "description": "<p>Schedule year</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Schedules added",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/schedules.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "schedules/",
    "title": "Get schedules",
    "name": "GetSchedules",
    "group": "Schedule",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No schedules where found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/schedules.js",
    "groupTitle": "Schedule",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "defaultValue": "01/2018",
            "description": "<p>Schedule month</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "days",
            "description": "<p>Schedule days</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.day",
            "defaultValue": "02",
            "description": "<p>Days day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.type",
            "defaultValue": "R",
            "description": "<p>Days type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.dayOfWeek",
            "defaultValue": "PO",
            "description": "<p>Days day of week</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts",
            "description": "<p>Days shifts</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts._shift",
            "description": "<p>Shift id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts._user",
            "description": "<p>User id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "schedules/:id",
    "title": "Update a schedule",
    "name": "PatchSchedule",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Body",
            "optional": false,
            "field": "body",
            "description": "<p>Cijeli schedule body, da ne ponavljam dva puta, identicno je bodyu koji se vrati na success (osim sto ne saljete _id nego id, kako sto je difinirano tu u parametrima)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Schedule to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/schedules.js",
    "groupTitle": "Schedule",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "defaultValue": "01/2018",
            "description": "<p>Schedule month</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "days",
            "description": "<p>Schedule days</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.day",
            "defaultValue": "02",
            "description": "<p>Days day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.type",
            "defaultValue": "R",
            "description": "<p>Days type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.dayOfWeek",
            "defaultValue": "PO",
            "description": "<p>Days day of week</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts",
            "description": "<p>Days shifts</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts._shift",
            "description": "<p>Shift id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shifts._user",
            "description": "<p>User id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "User deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "User to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "users/login/current",
    "title": "Get current user",
    "name": "GetCurrentUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "users/hours",
    "title": "Calculate work hours for all users",
    "name": "GetHours",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Work hours calculated!",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "users/:id",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No user was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "vacationDays",
            "description": "<p>User vacationDays</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours",
            "description": "<p>User number of hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.month",
            "defaultValue": "01/2018",
            "description": "<p>Month</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.numberOfHours",
            "description": "<p>Number of hours</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "users/:id",
    "title": "Get users",
    "name": "GetUsers",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No users were found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "vacationDays",
            "description": "<p>User vacationDays</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours",
            "description": "<p>User number of hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.month",
            "defaultValue": "01/2018",
            "description": "<p>Month</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.numberOfHours",
            "description": "<p>Number of hours</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "users/vacation",
    "title": "Calculate vacation days for all users",
    "name": "GetVacation",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Vacation days calculated!",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "users/login",
    "title": "Login a user",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6-30",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Token",
            "optional": false,
            "field": "token",
            "defaultValue": "'Bearer' + token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "User not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "users/logout",
    "title": "Logout",
    "name": "LogoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Successfully logged out",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "users/:id",
    "title": "Update a user",
    "name": "PatchUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "vacationDays",
            "description": "<p>User vacationDays</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "User to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "users/:id",
    "title": "Update users password",
    "name": "PatchUsersPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwrod",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Password changed!",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "users/",
    "title": "Register a user",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6-30",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Email already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "vacationDays",
            "description": "<p>User vacationDays</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_role",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours",
            "description": "<p>User number of hours</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.month",
            "defaultValue": "01/2018",
            "description": "<p>Month</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "monthlyNumberOfHours.numberOfHours",
            "description": "<p>Number of hours</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "vacations/",
    "title": "Get vacations",
    "name": "GetVacations",
    "group": "Vacation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Vacation request not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/vacations.js",
    "groupTitle": "Vacation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Vacation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Vacation start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>Vacation start end</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "allowedValues": [
              "\"Odbijen/Prihvaćen/U tijeku\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Vacation status</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "vacations/:id",
    "title": "Get vacations for a user",
    "name": "GetVacationsUser",
    "group": "Vacation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Vacation request not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/vacations.js",
    "groupTitle": "Vacation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Vacation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Vacation start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>Vacation start end</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "allowedValues": [
              "\"Odbijen/Prihvaćen/U tijeku\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Vacation status</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "vacations/:id",
    "title": "Approve or deny vacation",
    "name": "PatchVacation",
    "group": "Vacation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Vacation id</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "allowedValues": [
              "\"Odbijen/Prihvaćen\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Vacation status</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Vacation request not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/vacations.js",
    "groupTitle": "Vacation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Vacation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Vacation start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>Vacation start end</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "allowedValues": [
              "\"Odbijen/Prihvaćen/U tijeku\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Vacation status</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "vacations/",
    "title": "Add a vacation request",
    "name": "PostVacation",
    "group": "Vacation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "\"2019-01-01\""
            ],
            "optional": false,
            "field": "start",
            "description": "<p>Vacation start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "\"2019-01-01\""
            ],
            "optional": false,
            "field": "end",
            "description": "<p>Vacation start end</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Vacation request already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/vacations.js",
    "groupTitle": "Vacation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_id",
            "description": "<p>Vacation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Vacation start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>Vacation start end</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "allowedValues": [
              "\"Odbijen/Prihvaćen/U tijeku\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Vacation status</p>"
          }
        ]
      }
    }
  }
] });
