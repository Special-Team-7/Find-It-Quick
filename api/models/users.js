'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class User extends Model {}
  
	User.init({
		id: {
			type: DataTypes.TEXT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		}, 
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: true,
			unique: true,
			field: 'email'
		},
	}, {
	  // PUT THE NAME OF THE CLASS BELOW 
	  sequelize,
	  modelName: 'user'
	});
	return User;
  };
