



if (Meteor.users.find().count() == 0) {
  try{
 Accounts.createUser({
    profile: {
      name: 'Emiliano Macias'
    },
    username: "admin",
    email: "macias@mail.com",
    password: "macias",
  });


}
catch(e){
  console.log(e);
}finally{
 var adminId  = Meteor.users.findOne({profile:{name: 'Emiliano Macias'}})._id;
Roles.setUserRoles( adminId ,  ["admin"] );
console.log("Se creo el usuario " + adminId);
}




}




