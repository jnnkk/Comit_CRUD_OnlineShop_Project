
# Online Shopping Mall with CRUD Functionality

## Implementation Stack

- Node.js
- Express.js
- HTML
- CSS
- ejs Template Engine
- MySQL

## MVC Pattern

### Model

#### PRODUCT
- ID: primary key, int
- Name: varchar(255)
- Price: int
- Image URL: varchar(255)
- Product Summary Description: text (for longer sentences)
- Stock: int
- Category: varchar(255)

#### CART
- User ID: varchar(255)
- Product Object ID: primary key, int
- Product Object Name: varchar(255)
- Product Object Price: int
- Product Object Quantity: int

#### USER
- User ID: varchar(255)
- User Password: varchar(255)
- User Name: varchar(255)
- isAdmin: boolean

### View

#### Main Page
- It's the main page.
- Displays product listings.
- Shows categories.
- Allows immediate purchase or adding products to the cart.

#### Admin Page
- Visible when admin logs in.
- Window for adding products.
- Window for modifying and deleting products.

#### Product Addition Page
- Allows adding products.
- Image upload to be implemented.
