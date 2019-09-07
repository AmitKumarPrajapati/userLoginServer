const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Students {
      name: String
      age: String
  }

  type Users {
    name: String
    age: String
    email: String
    password: String
  }

  type Colleges {
    name: String
    city: String
    seats: Int
  }

  type Notes {
    _id: String
    title: String
    content: String
    author: String
    place: String
  }

  type Query {
    getStudents: [Students]
    getColleges: [Colleges]
    getMessage: Message
    getNotes: [Notes]
    getNote: Notes
    getUsers: [Users]
  }

  input MessageInput {
    content: String
    author: String
  }
  
  type Message {
    content: String
    author: String
  }

  type LoginUser {
    name : String
    password : String
  }

  type Mutation {
    createNote(title: String!,content:String!,author:String!,place:String!): Notes
    updateNote(title: String!,content:String!,author:String!,place:String!): Notes
    createUser(name:String!,age:String!,email:String!,password: String!): Users
    deleteNote(_id : String!): Notes
    userLogin(name: String!,password: String!) : LoginUser
  }
`;
module.exports = typeDefs;