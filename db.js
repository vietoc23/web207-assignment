const faker = require('Faker');

module.exports = () => {
  const data = { trips: [] };

  for (let i = 0; i < 10; i++) {
    data.trips.push({
      id: i,
      package_name: faker.lorem.sentence(),
      start_date: new Date(faker.date.future()).toLocaleDateString(),
      start_location: faker.address.country(),
      trip_length: faker.random.number(40),
      desc: faker.lorem.paragraph(10),
      image: `https://picsum.photos/seed/${i}/600/400`
    })
  }
  return data;
}
