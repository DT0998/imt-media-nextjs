module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7c9d12c46e012fff9f6065346ffa50f2'),
  },
});
