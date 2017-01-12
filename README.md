# Muber API
  Create some apis for a map app which shows drivers location like uber did.
  
  CURD method
  
  and geoNear from Mongoose 
  
  Model.geoNear(GeoJSON, options, [callback])
  
  > var point = { type : "Point", coordinates : [9,9] };

  > Model.geoNear(point, { maxDistance : 5, spherical : true }, function(err, results, stats) {
   
  > console.log(results);
  
  > });
  
# Tools

1. Node/Express
2. body-parse
3. Mongoose
4. Nodemon 
5. mocha
6. supertest // for testing


# Usage

> npm install

> nodemon index.js

or

> npm run test


