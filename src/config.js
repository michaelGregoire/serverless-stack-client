const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'mg-notes-app-uploads',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://lfkfj0z2nc.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_HEzubOlae',
    APP_CLIENT_ID: '5hbq82mnpdo4cvcahkcnu4aqb8',
    IDENTITY_POOL_ID: 'us-east-1:bf4d81e0-559b-4eb1-8b56-2ee4dab60be3',
  },
};

export default config;
