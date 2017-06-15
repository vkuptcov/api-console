const builder = require('api-console-builder');

builder({
  src: 'https://github.com/mulesoft/api-console/archive/release/4.0.0.zip',
  dest: 'build',
  raml: 'https://cdn.rawgit.com/advanced-rest-client/drive-raml-api-v2/1f85d308/api.raml',
  verbose: true,
  useJson: true,
  inlineJson: true,
  noOptimization: true
})
.then(() => console.log('Build complete'))
.catch((cause) => console.log('Build error', cause.message));
