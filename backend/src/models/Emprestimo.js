const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Emprestimo = sequelize.define('Emprestimo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  livro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'livros', 
      key: 'id',       
    }
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios', 
      key: 'id',
    }
  },
  data_devolucao_prevista: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_devolucao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'emprestimos',
  timestamps: true,
  underscored: false,
});

module.exports = Emprestimo;
