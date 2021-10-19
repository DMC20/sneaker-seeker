const db = require('./connection');
const { User, Product, Brand } = require('../models');

db.once('open', async () => {
  await Brand.deleteMany();

  const brands = await Brand.insertMany([
    { name: 'Adidas' },
    { name: '' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '',
      description:
        '',
      image: 'cookie-tin.jpg',
      brand: brands[0]._id,
      price: 2.99,
      quantity: 500
    },
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Spencer',
    lastName: 'Berkebile',
    email: 'spencer@test.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Daniel',
    lastName: 'Carazo',
    email: 'daniel@test.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Karla',
    lastName: 'Romero',
    email: 'karla@test.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Shane',
    lastName: 'Cristomo',
    email: 'shane@test.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
