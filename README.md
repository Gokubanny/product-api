1. Register User
Create a new user account
Method: POST
URL: http://localhost:5000/api/auth/register

Headers:

Content-Type: application/json

Body:

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}



2. Login User
Authenticate and get access token

Method: POST
URL: http://localhost:5000/api/auth/login

Headers:

Content-Type: application/json

Body:

json
{
  "email": "john@example.com",
  "password": "123456"
}


3. Create Product
Add a new product for the logged-in user

Method: POST
URL: http://localhost:5000/api/products

Headers:

Content-Type: application/json

Authorization: Bearer the token from each user account

Body:

json
{
  "name": "iPhone 15",
  "description": "Latest Apple smartphone",
  "price": 999
}

4. Get User's Products
Get all products for the logged-in user

Method: GET
URL: http://localhost:5000/api/products/my-products

Headers:

Authorization: Bearer YOUR_TOKEN_HERE

Body: None


5. Get Single Product
Get a specific product by ID (must belong to user)

Method: GET
URL: http://localhost:5000/api/products/PRODUCT_ID_HERE

Headers:

Authorization: Bearer YOUR_TOKEN_HERE

Body: None


6. Update Product
Update a specific product by ID

Method: PUT
URL: http://localhost:5000/api/products/PRODUCT_ID_HERE

Headers:

Content-Type: application/json

Authorization: Bearer YOUR_TOKEN_HERE

Body:

json
{
  "name": "iPhone 15 Pro",
  "description": "Updated description",
  "price": 1199
}



7. Delete Product
Delete a specific product by ID

Method: DELETE
URL: http://localhost:5000/api/products/PRODUCT_ID_HERE

Headers:

Authorization: Bearer YOUR_TOKEN_HERE

Body: None