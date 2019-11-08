'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class User extends Model {}
  
	User.init({
		name: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pname'
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pname'
		},
	}, {
	  // PUT THE NAME OF THE CLASS BELOW 
	  sequelize,
	  modelName: 'user'
	});
	return User;
  };
