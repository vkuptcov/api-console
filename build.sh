#!/bin/bash

api-console build https://cdn.rawgit.com/advanced-rest-client/raml-example-api/d8b474ff/api.raml --json --inline-json --verbose
cp -R build/. .
rm -rf build/
