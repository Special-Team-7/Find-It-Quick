/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bathroom', {
		bathId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'bath_id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		location: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'location'
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '1',
			field: 'rating'
		}
	}, {
		tableName: 'bathroom'
	});
};
