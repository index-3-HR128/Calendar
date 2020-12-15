 # FyreBooking

![](https://media.giphy.com/media/p6GCEH7BRaEbpmozvU/giphy.gif)

### Description

The calendar and reservations component for a travel accommodations service.

### Requirements

- npm v8.12.x
- MongoDB v4.2.x

### Installation

1. Install project dependencies
```sh
npm install
```

2. Start up your MongoDB server, then seed the database:
```sh
npm run db:setup
```

3. Create a client bundle
```sh
npm run webpack-prod
```

4. To start the server, run
```sh
npm start
```

5. To see the fruit of your labors, go to `localhost:3001/calendar/`

### Testing

```sh
npm test
```