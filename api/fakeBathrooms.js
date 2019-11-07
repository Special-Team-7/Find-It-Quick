var faker = require('faker');
var uuid = require('uuid');

//To Do: Use faker to generate fake bathroom data to populate database 

const bathrooms = [
    {id:1, business_name:'Starbucks',location:'Lat:81 Long:32', rating:'9', tag:'coffee place', review:"Really good", url:"https://www.gannett-cdn.com/presto/2019/01/28/PPHX/1c95ae4d-fa6e-428a-99e5-75fd8ae6f957-bathroom.jpg?width=540&height=&fit=bounds&auto=webp"},
    {id:2, business_name:'MC Donalds',location:'Lat:86 Long:42', rating:'1', tag:'Fast-Food', review: "Okay", url:"https://ggwash.org/images/made/images/posts/_resized/bathroom_750_422_90.jpg"},
    {id:3, business_name:'Park 101',location:'Lat:41 Long:62', rating:'4', tag:'public park', review:"Not bad", url:"https://www.facilitiesnet.com/resources/editorial/2018/071618a41785-Restroom.jpg"},
    {id:4, business_name:'Hilton Hotel', location:'Lat:41 Long:67', rating:'6.7', tag:'Hotel', review:'Very fancy!', url:'https://tinyurl.com/yyod2cr6'},
    {id:5, business_name:faker.company.companyName(), location:'Lat:41 Long:62', rating:Math.abs(faker.random.number()/5), review:faker.lorem.sentence(), url:faker.image.imageUrl()}
  ];

//To do: Faker works. make sure that when generating the image URL that it ends with .jpp or .png so the image loads. Next make a whole batch of fake bathrooms. 

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