const { User, Product, Brand, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// const resolvers = {
//     Query: {
//         me: async (parent, args, context) => {
//             if(context.user) {
//                 const userData = await User.findOne({ _id: context.user._id })
//                 .select('-__v -password');

//                 return userData;
//             }
            
//             throw new AuthenticationError('Not logged in');
//         }
//     },



//     Mutation: {
//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);
            
//             return { token, user };
//         },
//         login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             if(!user) {
//                 throw new AuthenticationError('Those credentials are incorrect');
//             }

//             const correctPw = await user.isCorrectPassword(password);

//             if(!correctPw) {
//                 throw new AuthenticationError('Those credentials are incorrect')
//             }

//             const token = signToken(user);
//             return { token, user };
//         },
//     }
// };

const resolvers = {
    Query: {
      brand: async () => {
        return await Brand.find();
      },
      products: async (parent, { brand, name }) => {
        const params = {};
  
        if (brand) {
          params.brand = brand;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('brand');
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('brand');
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'brand'
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'brand'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      addOrder: async (parent, { products }, context) => {
        console.log(context);
        if (context.user) {
          const order = new Order({ products });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
  
          return order;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateProduct: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };

module.exports = resolvers;