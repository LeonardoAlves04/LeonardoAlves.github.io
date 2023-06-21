module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      settings: {
        cors: {
          enabled: true,
          origin: ["https://ecommerce-react-woad.vercel.app"], // Adicione aqui o domínio do seu aplicativo React
        },
      },
      origin: 'https://ecommerce-react-woad.vercel.app',
      expose: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 31536000,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Origin',
        'X-Requested-With',
        'Accept',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
