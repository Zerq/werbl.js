This work is licensed under the lgpl
https://opensource.org/license/lgpl-3-0
Werbl.js is a frontend library that focused on low dependecny and being a tight easy fit with dotnet 

with frameworks like nextjs etc you get a node backend along with everything else and its kinda messy... you also get the typical dependecny hell with a bazilion diffrent dependencies..

This project is avalible in two templat flavores.. plain and webpack... 
the plain one just uses the build in module loader but it wont play nice if you need any npm dependedcies 
beyond webpack for that flavor there are no dependecies  only dev dependecies like typescript and react (for typing) and and gulp for moving some files about.


the library basically comsists of a custom JSX factory, a router and a component object oriented component model previous attemps at this i did used webcomponents and my model is inspired by that 
webcomponent messes with tab ordering and focus and stuff which is less then ideal for accessability and none of the major framworks/libaries use them.

Oh and i also have a IOC container that uses abstact classes as psudo interfaces (you can treat a class like an interface with the upshot that it has a constructor that persists beyond transpilation i.e you can use the constructor name for a reference)

