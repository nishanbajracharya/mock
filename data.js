const faker = require('faker');

const seed = 314;

faker.seed(seed);

const count = 100;

function generateData() {
  const users = [];

  for (let id = 1; id < count; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber('(###) ###-####');

    const address = {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
      countryCode: faker.address.countryCode(),
      streetAddress: faker.address.streetAddress(),
    }

    const profileImage = faker.image.avatar();

    users.push({
      id,
      email,
      phone,
      address,
      lastName,
      firstName,
      profileImage,
    });
  }

  return { users };
};

module.exports = generateData();
