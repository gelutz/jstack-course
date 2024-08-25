#! /usr/bin/env bash

cd api && vercel --prod && cd -
cd web && vercel --prod && cd -

echo "Deploy realizado com sucesso!"