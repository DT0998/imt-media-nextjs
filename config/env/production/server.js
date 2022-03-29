module.exports = ({ env }) => ({
    url: env('https://polar-cove-66597.herokuapp.com/'),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS"),
    },
  });