
module.exports = function (sequelize, DataTypes) {

  var Components = sequelize.define("Components", {

    item_name: {
      type: DataTypes.STRING,
      allowNull: false
      },

    item_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    item_img: {
      type: DataTypes.STRING,
      allowNull: false
    },

    item_tier: {
      type: DataTypes.STRING,
      allowNull: false
    },

    item_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    item_stock: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  },
  {
    timestamps: false,    
  });
  return Components;
};
  
