'use strict';
const { Model } = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'user_id'
		},
		pname: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pname'
		}
	}, {
		tableName: 'users'
		
	});
};
