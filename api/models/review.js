/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('review', {
		revId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'rev_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'user_id'
			},
			field: 'user_id'
		},
		bathId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'bathroom',
				key: 'bath_id'
			},
			field: 'bath_id'
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'rating'
		}
	}, {
		tableName: 'review'
	});
};
