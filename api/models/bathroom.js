'use strict';
const { Model } = require('sequelize');



module.exports = (sequelize, DataTypes) => {
	class Bathroom extends Model {}
	
	Bathroom.init({
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'address'
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'latitude'
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'longitude'
		},
		category: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: 'private',
			field: 'category'
		},
		average_rating: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			field: 'average_rating'
		}
	}, {
	  // PUT THE NAME OF THE CLASS BELOW 
	  sequelize,
	  modelName: 'bathroom'
	});
  
	// Bathroom.associate = (models) => {
	//   // associations can be defined here
  
	//   // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
	//   models.Actor.belongsToMany(models.Movie, {through: 'MovieActor'});
	// };
  
	return Bathroom;
  };