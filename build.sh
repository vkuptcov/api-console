#!/bin/bash

api-console build https://cdn.rawgit.com/advanced-rest-client/drive-raml-api-v2/1f85d308/api.raml --json --inline-json --verbose
cp -R build/. .
rm -rf build/
