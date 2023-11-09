## Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresess

Headers :
- Authorization : token

Request Body :
```json
    {
        "street"        : "Jalan apa",
        "city"          : "Kota apa",
        "province"      : "Provinsi apa",
        "country"       : "Negara apa",
        "postal_code"   : "Kode pos apa"
    }
```

Response Body Success : 
```json
    {
        "data" : {
            "id"            : 1,
            "street"        : "Jalan apa",
            "city"          : "Kota apa",
            "province"      : "Provinsi apa",
            "country"       : "Negara apa",
            "postal_code"   : "Kode pos apa"
        }
    }
``` 

Response Body Error : 
```json
    {
        "errors" : "Country is required"
    }
```


## Updtae Address API

Endpoint : PUT /api/contacts/:contactId/addresess/:addressId

Headers :
- Authorization : token

Request Body :
```json
    {
        "street"        : "Jalan apa",
        "city"          : "Kota apa",
        "province"      : "Provinsi apa",
        "country"       : "Negara apa",
        "postal_code"   : "Kode pos apa"
    }
```

Response Body Success : 
```json
    {
        "data" : {
            "id"            : 1,
            "street"        : "Jalan apa",
            "city"          : "Kota apa",
            "province"      : "Provinsi apa",
            "country"       : "Negara apa",
            "postal_code"   : "Kode pos apa"
        }
    }
``` 

Response Body Error : 
```json
    {
        "errors" : "Country is required"
    }
```


## Get Address API

Endpoint : GET /api/contacts/:contactId/addresess/addressId

Headers :
- Authorization : token


Response Body Success : 
```json
    {
        "data" : {
            "id"            : 1,
            "street"        : "Jalan apa",
            "city"          : "Kota apa",
            "province"      : "Provinsi apa",
            "country"       : "Negara apa",
            "postal_code"   : "Kode pos apa"
        }
    }
``` 

Response Body Error : 
```json
    {
        "errors" : "contact is not found."
    }
```


## List Addresses API

Endpoint : GET /api/contacts/:contactId/addresess

Headers :
- Authorization : token


Response Body Success : 
```json
    {
        "data" : [
            {
                "id"            : 1,
                "street"        : "Jalan apa 1",
                "city"          : "Kota apa 1",
                "province"      : "Provinsi apa 1",
                "country"       : "Negara apa 1",
                "postal_code"   : "Kode pos apa 1"
            },
            {
                "id"            : 2,
                "street"        : "Jalan apa 2",
                "city"          : "Kota apa 2",
                "province"      : "Provinsi apa 2",
                "country"       : "Negara apa 2",
                "postal_code"   : "Kode pos apa 2"
            }
        ]
    }
``` 

Response Body Error : 
```json
    {
        "errors" : "contact is not found."
    }
```


## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresess/:addressId

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
        "errors" : "contact is not found."
    }
```
