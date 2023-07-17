import { registerAs } from '@nestjs/config';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const gcpProy = process.env.GCP_PROY;

export const setEnvironmentVariablesGCP = async () => {
  // GCP Secrets
  const GCP_PROJECT_ID = gcpProy;
  //Change this prefix to your project name
  const GCP_SECRET_PREFIX = 'SEED_NESTJS_';
  const enviromentVariables = [
    { name: 'DB_NAME', mandatory: true },
    { name: 'DB_USER', mandatory: true },
    { name: 'DB_PASSWORD', mandatory: true },
    { name: 'DB_HOST', mandatory: true },
    { name: 'APP_PORT', mandatory: true }
  ];

  const client = new SecretManagerServiceClient();
  for (const enviromentVariable of enviromentVariables) {
    try {
      const [version] = await client.accessSecretVersion({
        name: `projects/${GCP_PROJECT_ID}/secrets/${GCP_SECRET_PREFIX}${enviromentVariable.name}/versions/latest`
      });

      if (version?.payload?.data) {
        process.env[enviromentVariable.name] = version.payload.data.toString();
      }
    } catch (e) {
      if (!enviromentVariable.mandatory) continue;
      throw e;
    }
  }
};

export default registerAs('config', () => {
  return {
    database: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST
    },
    appPort: parseInt(process.env.APP_PORT)
  };
});
