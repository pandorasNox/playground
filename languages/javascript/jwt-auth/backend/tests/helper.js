
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

process.env.NODE_ENV = 'test';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test';

const config = {
  connection: null,
};

function connect() {
  return new Promise((resolve, reject) => {
    if (config.connection) {
      return resolve();
    }

    mongoose.Promise = Promise;

    const options = {
      auto_reconnect: true,
      reconnectTries: 1000 || Number.MAX_VALUE,
      reconnectInterval: 1000,
    };

    mongoose.connect(MONGO_URL, options);

    config.connection = mongoose.connection;

    config.connection
        .once('open', resolve)
        .on('error', e => {
            if (e.message.code === 'ETIMEDOUT') {
                console.log(e);

                mongoose.connect(MONGO_URL, options);
            }

            console.log(e);
            reject(e);
        })
    ;
  });
}

function teardown () {
    return new Promise((resolve, reject) => {
        mongoose.disconnect();
    });
}


// export function getContext(context) {
//   const dataloaders = Object.keys(loaders).reduce(
//     (dataloaders, loaderKey) => ({
//       ...dataloaders,
//       [loaderKey]: loaders[loaderKey].getLoader(),
//     }),
//     {},
//   );

//   return {
//     ...context,
//     req: {},
//     dataloaders,
//   };
// }

// export async function setupTest() {
//   await connect();
// //   await clearDatabase();
// }

// export async function teardownTest() {
//     await teardown();
//   //   await clearDatabase();
// }

module.exports = {
    setupTest: async function() {
        await connect();
    },
    teardown: async function() {
        await teardown();
    },
}
