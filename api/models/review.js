'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Review extends Model {}

	Review.init({
		UID: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'UID',
			references: {
				model: "users",
				key: "id"
			}
		},
		BID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'BID',
			references: {
				model: "bathrooms",
				key: "id"
			}
		},
		rating: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '1',
			field: 'rating'
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: 'no review',
			field: 'review'
		}
	}, {
	  // PUT THE NAME OF THE CLASS BELOW
	  sequelize,
	  modelName: 'review'
	});



	return Review;
  };
