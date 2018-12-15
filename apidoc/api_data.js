define({ "api": [
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
    "url": "users/:id",
    "title": "Get current user",
    "name": "GetCurrentUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
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
            "type": "String",
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
            "type": "String",
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
            "type": "String",
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
            "type": "String",
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
  }
] });
