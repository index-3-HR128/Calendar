## Server API

### Get place info and bookings
  * GET `/api/:placeID`

**Path Parameters:**
  * `placeID` place id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
        "_id": "String",
        "id": "Number",
        "nightly_fee": "Number",
        "cleaning_fee": "Number",
        "occupancy_tax_rate": "Number",
        "avg_rating": "Number",
        "reviews": "Number",
        "city": "String",
        "max_capacity": "Number",
        "bookings": [
            {
                "guests": {
                    "adults": "Number",
                    "children": "Number",
                    "infants": "Number"
                },
                "_id": "String",
                "checkin": "String",
                "checkout": "String"
            }
        ],
    }
```

### Add bookings
  * POST `/api/:placeID`

**Path Parameters:**
  * `placeID` place id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "guests": {
        "adults": "Number",
        "children": "Number",
        "infants": "Number"
      },
      "checkin": "string",
      "checkout": "String"
    }
```

### Update booking info
  * PATCH `/api`

**Path Parameters:**
  * none

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "ticketID": "String",
      "adults": "String",
      "children": "String",
      "infants": "String"
    }
```

### Delete booking info
  * DELETE `/api/:placeID`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "ticketID": "String",
    }
```
















