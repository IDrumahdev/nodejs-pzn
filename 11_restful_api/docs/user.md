# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :
```json
    {
        "username" : "rumahdev",
        "password" : "rahasia",
        "name"     : "ibnudirsan"
    }
```

Response Body Success :

```json
    {
        "data" : {
            "username"  : "rumahdev",
            "name"      : "ibnudirsan"
        }
    }
```

Response Body Error
```json
    {
        "error" : "Username already registered"
    }
```

## Login User API

Endpoint : POST /api/users/login

Request Body : 
```json
{
    "username" : "rumahdev",
    "password" : "rahasia"
}
```

Response Body Success :
```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :

```json
{
    "error" : "username or password wrong."
}
```

## Update User API

Endpoint    : PATCH /api/users/current

Headers     :
- Authorization : token 

Request Body :
```json
{
    "name"      : "Heri Ibnudirsan", // optional
    "password"  : "change-password"  // optional
}
```

Response Body Success :
```json
{
    "data" : {
        "username"  : "rumahdev",
        "name"      : "Heri Ibnudirsan"
    }
}
```

Response Body Error :
```josn
    {
        "errors" : "Name length max 100"
    }
```

## Get User API
Endpoint    : GET /api/users/current 

Headers     :
- Authorization : token

Response Body Success:
```json
    {
        "data" : {
            "username"  : "rumahdev",
            "name"      : "Heri Ibnudirsan"
        }
    }
```

Response Body Error :
```json
    {
        "errors" : "Unauthorized"
    }
```
## Logout User API

Endpoint : DELETE /api/users/logout

Headers     :
- Authorization : token

Response Body Success :
```json
    {
        "data" : "OK"
    }
```

Response Body Error :
```json
{
    "errors" : "Unauthorized"
}
```