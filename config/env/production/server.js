module.exports = ({ env }) => ({
    url: env('https://strapimovie.herokuapp.com/admin/auth/register-admin'),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS"),
    },
  });