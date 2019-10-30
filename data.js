const defaults = require('./constants');

function generateData(count = defaults.COUNT, seed = defaults.SEED) {
  const faker = require('faker');

  faker.seed(seed);

  // Users
  const users = [];

  for (let id = 1; id < count; id++) {
    const lastName = faker.name.lastName();
    const firstName = faker.name.firstName();
    const email = faker.internet.email().toLowerCase();
    const phone = faker.phone.phoneNumber('(###) ###-####');

    const address = {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
      countryCode: faker.address.countryCode(),
      streetAddress: faker.address.streetAddress()
    };

    const profileImage = faker.image.avatar();

    users.push({
      id,
      email,
      phone,
      address,
      lastName,
      firstName,
      profileImage
    });
  }

  // Locations
  const locations = [];

  for (let id = 1; id < count; id++) {
    const address = {
      id,
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      countryCode: faker.address.countryCode(),
      streetAddress: faker.address.streetAddress(),
    };

    locations.push(address);
  }

  return { users, locations };
}

module.exports = generateData;
