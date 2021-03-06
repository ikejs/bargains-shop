module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://api.bargains.ike.dev",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '629d5781cc30b2e58050e690bc5f3c43'),
    },
  },
});
