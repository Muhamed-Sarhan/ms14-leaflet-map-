const { faker } = require("@faker-js/faker");
const DATA_LENGTH = 10000;

const data = {};

const spawnData = () => {
  for (let i = 0; i < DATA_LENGTH; i++) {
    const uuid = createUUID();

    data[uuid] = {
      id: uuid,
      name: faker.fake(
        `{{name.firstName}} {{name.lastName}}: {{vehicle.vehicle}} {{vehicle.manufacturer}} {{vehicle.model}}`
      ),
      long: Number(randomNumber(30.75, 31.25).toFixed(4)),
      lat: Number(randomNumber(30.45, 30.85).toFixed(4)),
    };
  }
};

//create  manuel UUID

const createUUID = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const randomNumber = (min, max) => Math.random() * (max - min) + min;

const getData = () => data;

module.exports = {
  getData,
  spawnData,
};
