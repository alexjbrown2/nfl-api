/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rushing', {
    rk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    player: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    g: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    att: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yds: {
      type: DataTypes.STRING,
      allowNull: true
    },
    td: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lng: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ypa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ypg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fmb: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rushing'
  });
};
