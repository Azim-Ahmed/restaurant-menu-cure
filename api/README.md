# Restaurant Menu Cure – backend

## Server - Running :

If you wish to run the server, the first step is installing node environment then clone the git link. after that go to the api folder , open a terminal and run the following command:

```bash
$ npm run develop
```

**Run the project**

```
Move into the project directory: cd ~restaurant-menu-cure/api/
Run the development task: npm run develop
Starts a server running at http://localhost:1337
```

## Backend Technologies uses

- STRAPI version 4.6.0
- PostGreSql version


### Collections:

- User
- Category
- Food
- Table
- OrderStatus
- Order


**Authentication:**

Strapi provides the authentication for users along with an admin panel to manipulate the content and handle the permissions.

### API’s:

- Category
- Food
- Order
- Table

### Api: some endpoints sample

http://localhost:1337/api/auth/local -> login (POST)

http://localhost:1337/api/categories -> Categories (GET)

http://localhost:1337/api/categories/:category_id -> Single Category (GET & UPDATE)

http://localhost:1337/api/foods -> Food Create (POST)

http://localhost:1337/api/categories/:category_id?populate=foods -> Get All foods by a category (GET)

http://localhost:1337/api/orders -> Order Create (POST)

http://localhost:1337/api/orders/:order_id -> Order Create (PUT)

http://localhost:1337/api/tables -> Get All Table (GET)

http://localhost:1337/api/tables/:table_id?populate=order -> Get Table Order With Order (GET)

http://localhost:1337/api/tables/:table_id -> Update Table Order (UPDATE)
