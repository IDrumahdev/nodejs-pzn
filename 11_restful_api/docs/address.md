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

Endpoint : PUT /api/contacts/:contactId/addresess/:addressID

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

Endpoint : POST /api/contacts/:id/addresess

Headers :
- Authorization : token

Request Body :
```json
    {

    }
```

Response Body Success : 
```json
    {

    }
``` 

Response Body Error : 
```json
{

}
```


## List Addresses API

Endpoint : POST /api/contacts/:id/addresess

Headers :
- Authorization : token

Request Body :
```json
    {

    }
```

Response Body Success : 
```json
    {

    }
``` 

Response Body Error : 
```json
{

}
```


## Remove Address API

Endpoint : POST /api/contacts/:id/addresess

Headers :
- Authorization : token

Request Body :
```json
    {

    }
```

Response Body Success : 
```json
    {

    }
``` 

Response Body Error : 
```json
{

}
```
