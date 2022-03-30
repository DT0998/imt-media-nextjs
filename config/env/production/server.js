module.exports = ({ env }) => ({
    url: env('https://strapimovie.herokuapp.com/'),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS"),
    },
  });