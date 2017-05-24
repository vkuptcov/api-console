#!/bin/bash

api-console build https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/52560d3f-c37a-409d-9887-79e0a9a9ecff/public/apis/7782/versions/7918/files/api.raml --verbose
cp -R build/. .
rm -rf build/
