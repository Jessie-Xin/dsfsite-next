import { generateService } from '@zeusjs/openapi';

generateService({
  // schemaPath: 'http://localhost:5228/swagger/v1/swagger.json',
  schemaPath: 'https://fss.staging.wizmacau.com/swagger/v1/swagger.json',
  outputPath: `${__dirname}/src/services`,
  namespace: 'FSS',
  projectName: 'fss',
  requestImportStatement: `import { request } from '@/lib/request';`
});
