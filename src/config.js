const config = {
  STRIPE_KEY: 'pk_test_CtdVJXEImW0qIAqORmdbAzzM',
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'mg-notes-app-uploads-2',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://zi128t5kjk.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_ftk6T3o9s',
    APP_CLIENT_ID: '3k161t5lvvirdapvtv9i3m9mfi',
    IDENTITY_POOL_ID: 'us-east-1:f987de8c-cfc2-4b53-9b0d-ce1d1226aed5',
  },
};

export default config;
