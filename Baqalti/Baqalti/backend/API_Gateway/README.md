mutation {
  login(
    email: "xx@xx",
    password: "test"
  )
}

mutation {
  register(
    name: "John Doe",
    phone: 1234567890,
    email: "johndoe@example.com",
    username: "johndoe",
    password: "password123"
  )
}

query {
  viewProducts {
    name
    cost
    quantity
  }
}

query {
  profile {
    name
    username
    email
    phone
  }
}
mutation {
  addproduct(name: "Example Product", cost: 19, quantity: 10)
}
