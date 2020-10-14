import type { Serverless } from 'serverless/aws'

const serverlessConfiguration: Serverless = {
  frameworkVersion: '2',
  service: {
    name: 'api',
  },
  provider: {
    name: 'aws',
    region: 'us-west-2',
    runtime: 'nodejs12.x',
    stackName: 'api-dev-test',
    httpApi: {
      id: '1bz0r80tn0',
    },
    deploymentBucket: {
      name: 'trons-api-serveless-deploy-dev',
    },
  },
  functions: {
    ping: {
      name: 'ping',
      handler: './src/ping.handler',
      memorySize: 128,
      timeout: 1,
      events: [
        {
          httpApi: {
            method: 'GET',
            path: '/v1/ping',
          },
        },
      ],
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
}

module.exports = serverlessConfiguration
