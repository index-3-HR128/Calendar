## Server API

### Get place info
  * GET `/api/place/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `200`

**Returns:** JSON of information of the ID's place

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
        "max_capacity": "Number"
    }
```

### Add bookings to user.
  * POST `/api/user/:id`

**Path Parameters:**
  * `id` user id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "guests": {
        "adults": "Number",
        "children": "Number",
        "infants": "Number"
      },
      "placeid": "Number",
      "checkin": "string",
      "checkout": "String"
    }
```

### Update booking info
  * PATCH `/api/user/:userid/booking/:bookingid`

**Path Parameters:**
  * `userid` user id
  * `bookingid` booking id

**Success Status Code:** `202`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "guests": {
        "adults": "Number",
        "children": "Number",
        "infants": "Number"
      },
      "placeid": "Number",
      "checkin": "string",
      "checkout": "String"
    }
```

### Delete booking info
  * DELETE `/api/user/:userid/booking/:bookingid`

**Path Parameters:**
  * `userid` user id
  * `bookingid` booking id

**Success Status Code:** `202`

### Get user info
  * GET `/api/user/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `200`

**Returns:** JSON of information of the ID's place

```json
    {
        "id": "Number",
        "name": "String",
        "bookings": []
    }
```

















