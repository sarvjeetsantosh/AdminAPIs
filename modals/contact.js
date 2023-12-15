const Contact = sequelize.define('contacts', {
  // Model attributes are defined here
  Address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CurrentAdress: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here

});

  
  // `sequelize.define` also returns the model
  console.log(Contact === sequelize.models.Contact); // true

  module.exports=Contact;