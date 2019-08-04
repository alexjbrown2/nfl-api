/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('passing', {
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
    cmp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    att: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cmpper: {
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
    tdper: {
      type: DataTypes.STRING,
      allowNull: true
    },
    int: {
      type: DataTypes.STRING,
      allowNull: true
    },
    intper: {
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
    aypa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ypc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ydspg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qbr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ydslost: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netydspa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avgnetydspa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skper: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fqc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gwd: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'passing'
  });
};
