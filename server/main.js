




  if (Meteor.users.find({
  //Crea el usuario admin 
    }).count() == 0) {
  
    try{
      var userId = Accounts.createUser({
    profile: {
      name: 'Administrador'
    },
    username: "admin",
    email: "admin@mail.com",
    password: "admin",
  });
  }catch(e){

  }finally{
     var em = Meteor.users.findOne({username: 'admin'})._id;
    Roles.addUserToRoles( em,  ["admin"] );
  }
   console.log('Se agrego cuenta de administrador admin@mail.com/admin');
   }


