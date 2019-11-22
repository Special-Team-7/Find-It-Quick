var faker = require('faker');
var uuid = require('uuid');

//To Do: Use faker to generate fake bathroom data to populate database 

const fakeBathrooms = [];

//Making 10 fake bathrooms
for(var i=0; i<10; i++) {
  const bathroom = {
    id: uuid.v4(),
    location: faker.address.streetAddress(),
    business_name: faker.company.companyName(),
    rating: Math.floor(Math.random() * 5), 
    tag: faker.address.county(), //the tag we are making is based on county
    review: faker.lorem.sentence(),
    url: faker.random.image()
  };
  fakeBathrooms.push(bathroom);
}

module.exports = fakeBathrooms;