mkdir -p build
cp src/index.js build/
cd build
zip -r ../lambda.zip .
cd ..
ls -lh lambda.zip
