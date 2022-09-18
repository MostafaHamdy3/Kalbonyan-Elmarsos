const config = {
  STRIPE_KEY:
    "pk_test_51Lix0vL6fQPnD05Wajbu4BwCZaJz29UuGv2jizN82dzB5etYeXFYm7u3Ul7wv6PGkyDxRCiSCHwUmDnrF0wVZHkb00xTQPPr5K",
  MAX_ATTACHMENT_SIZE: 5000000,
  SENTRY_DSN:
    "https://efd6e0a0d9504c3ab0d22b3f45c1e94c@o1415880.ingest.sentry.io/6756848",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
