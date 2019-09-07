const fetch = require('node-fetch')

const resolvers = {
  Query: {
    getNotes: () =>
      fetch('http://localhost:8001/notes')
        .then(res => res.json())
        .then(data => data),

    getUsers:() =>
      fetch('http://localhost:8001/users')
        .then(res => res.json())
        .then(data => data),
  },
  Mutation: {
    createNote: function (_, args) {
      fetch('http://localhost:8001/notes', {
        method: "post",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: args.title,
          content: args.content,
          author: args.author,
          place: args.place
        })
      }).then((res) => {
      }).catch(err => console.log("err", err));
    },
    
    createUser: function (_, args) {
      fetch('http://localhost:8001/users', {
        method: "post",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: args.name,  
          age: args.age,
          email: args.email,
          password: args.password
        })
      }).then((res) => {
      }).catch(err => console.log("err", err));
    },
    
    updateNote: function (_, args) {
      fetch('http://localhost:8001/notes', {
        method: "post",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: args.title,
          content: args.content,
          author: args.author,
          place: args.place
        })
      }).then((res) => {
      }).catch(err => console.log("err", err));
    },

    deleteNote : function (_ ,args) {
      const noteId = args._id;
      console.log("This is the noteId------->>>>>>>",args._id);
      fetch('http://localhost:8001/notes/'+noteId,{
        method: "delete",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      }).then((res) => {
      }).catch(err => console.log("Error",err));
    },

    userLogin : function(_,args) {
      const username = args.name;
      const password = args.password;
      console.log("Username --------------------",username);
      console.log("Password------------------, ",password);
      fetch('http://localhost:8001/user/login', {
        method: "post",
        headers:{ 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name : username,
          password: password,
        })
      }).then((res) => { console.log(res);
      }).catch(err => console.log("error-----------------------------",err));
    }
  },
};

module.exports = resolvers;