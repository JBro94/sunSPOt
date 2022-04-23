This project is named sunSPOt or the Solar Panel Optimization application. 

the purposes of this project was to create a web base map designed to show ideal locations for solar powered EV charging ports and offer routing assistance and charge reccomendation for a Rivian R1t (by default).  

the project consisted of 3 steps: Data Collection, Coding the UI, calculating the route and RCT ( reccomended charge time ).  

Data collection was accomplished by digitizing parkinglots in Bloomington-Normal area on Google Earth. The parkinglots chosen matched criteria that would be useful to both solar panels and the placement of current 240V EV charging ports.  then the KMZ file of the locations was exported and converted into a arcgis shapefile, and geojson for use in the project later.  With the centroids of the polygons created a test run of the routing analysis was completed in ArcGIS Pro where the optimal path (in this instance shortest distance between two locations) was calculated. This was done in order to get a baseline of what to expect in later analysis.  Links to understand arcGIS routing analysis is provided below: 

https://pro.arcgis.com/en/pro-app/2.8/help/analysis/networks/route-analysis-layer.htm

With an idea of what routing and the distances between any of the given locations an UI/basemap was created using the JavaScript libraries React and MapBox.  These resouces provided an easy to design and implementation for use among several platforms and is ready as a deployable map base. 

Layers in this map include a base map, ev icons indicating the charging locations, and header where a user can select the locations they wish to travel between and a button to make the call to the API.  

The button activates the method that calls the mapbox directions API and returns a layer represented by a geojson object or a blue line on the map.  A modal will also appear with the calculated distance in miles between the two locations and how long the EV will need to charge at the start postion to reach the second location, assuming the EV has a 0% charge at the start of the trip.  


