
module.exports = function (sequelize, DataTypes) {

var Tiers = sequelize.define("Tiers", {

  tier_name: {

    type: DataTypes.STRING,
    allowNull: false
  },

  tier_image: {

    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false,    
  });
  
  return Tiers;
};