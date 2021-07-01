# MELI
Tienda virtual - Catalogo de productos -  Javascript - React - HTML -CSS

## Author: Juan Carlos De Jesus

This repopsitory contains two folder:
1. MiTiendaVirtual (React APP)
2. MiTiendaVirtualAPI (Restful Api / Express Node.j APP)

## Installation and configuration:
1. npm i (in order to install all the dependencies). should be applied inside each given folder (MiTiendaVirtual, MiTiendaVirtualAPI)
2. MiTiendaVirtual: usually runs on port 8080. 
#  NPM RUN START:DEV
3. MiTiendaVirtualAPI: All services by default are configured to localhost:8080. 
#  NPM START.

## Considerations:
MiTiendaVirtual and MiTiendaVirtualAPI were built and configured manually using webpack and babel (not using react-scripts, etc)
There are no testing or automated test. (By the time this app was built, I hadn't had much time to work on it);


## Architecture
1. MiTiendaVirtual:
   * Containers: keeps all "high level" components which contain other components
   * Components: basic or small components. Are the main core for others components
   * Services: contains code to retrieve remote data using http. Axios is the main library.
   * Routes:  code for routing. React Router is the library in charge of routing.
   * Helpers: generic and reusable code. i.e functions to manipulate decimals.
   * Styles: global styles.
   * Constants: static values

2. MiTiendaVirtualAPI:
   * Controllers: responsible for businnes logic.
   * Routes: code which are linked to a given URL.
   * Utilities: generic and reusable code. i.e functions to manipulate decimals.
   * Services: code to retrieve remote data using http. Axios is the main library.
   * server.js: application ENTRY POINT.




Thanks for visiting it !!! Enjoy it !!
