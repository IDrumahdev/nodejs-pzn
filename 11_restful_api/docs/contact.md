# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
    {
        "first_name"    : "Heri",
        "last_name"     : "Purwanto",
        "email"         : "ibnudirsan@gmail.com",
        "phone"         : "081800808"
    }
```

Response Body Success :

```json
    {
        "data" : {
            "id"            : 1,
            "first_name"    : "Heri",
            "last_name"     : "Purwanto",
            "email"         : "ibnudirsan@gmail.com",
            "phone"         : "081800808"
        } 
    }
```

Response Body Error :

```json
    {
        "errors" : "Email is not valid format"
    }
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
    {
        "first_name"    : "Heri",
        "last_name"     : "Purwanto",
        "email"         : "ibnudirsan@gmail.com",
        "phone"         : "081800808"
    }
```

Response Body Success :

```json
{
    "data" : {
        "id"            : 1,
        "first_name"    : "Heri",
        "last_name"     : "Purwanto",
        "email"         : "ibnudirsan@gmail.com",
        "phone"         : "081800808"
    }
}
```

Response Body Error :

```json
    {
        "errors" : "Email is not valid format."
    }
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token


Response Body Success :

```json
    {
        "data" : {
            "id"            : 1,
            "first_name"    : "Heri",
            "last_name"     : "Purwanto",
            "email"         : "ibnudirsan@gmail.com",
            "phone"         : "081800808"
        }
    }
```

Response Body Error :

```json
    {
        "errors" : "Contact is not found."
    }
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Query Params :
- name      : Search by first_name or last_name using like query (Optional)
- email     : Search by email using like query (Optional)
- phone     : Search by phone using like query (Optional)
- page      : number of page, default 1
- size      : size per page, default 10

Response Body Success :

```json
    {
        "data"  : [
            {
                "id"            : 1,
                "first_name"    : "Heri",
                "last_name"     : "Purwanto",
                "email"         : "ibnudirsan@gmail.com",
                "phone"         : "081800808"
            },
            {
                "id"            : 2,
                "first_name"    : "Ibnudirsan",
                "last_name"     : "Purwanto",
                "email"         : "purwanto@gmail.com",
                "phone"         : "081700708"
            }   
        ],
        "paging" : {
            "page" : 1,
            "total_page" : 15,
            "total_item" : 35
        }
    }
```

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

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
        "errors" : "Contact is not found."
    }
```