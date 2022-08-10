## About this application

#### How to start the local server

1. Clone the repository. Or, download the zip
2. cd rick-and-morty
3. Run local at <http://localhost:3000>:
   command: npm run start
4. Run tests: npm run test

#### Highlights

1. Techstack - React, TypeScript, GraphQl, React-Query, HTML and CSS

2. Network Performance
   - Fetching only the required attributes for characterList and characterDetail component (GraphQl)
   - Fetching only 1 image sprite, reduce the no of calls to fetch multiple error screens

3. Rendering performance:
   - Lazy load of images for characters List
   - focus on css class naming strategy

3. JS Performance:
   - Focus on reusability of components e.g: refer common components
   - In characterDetail, showing certain no of episodes,
     and showing remaining episodes on click of show more, parsing html and scripting time improvement.

4. UX
   - Graceful error handling for jsErrors using react-error-boundary and 404 for page not found errors.
   - Loading state, error state gracefully handled
   - Mobile & Desktop friendly

5. Accessbility
   - aria label and alt tags provided for html elements

6. Resuability, Scalability, Maintainablity
   - All the components are reusable, and can be scaled on demand.
   - All functions are being created, with seperations of concerns in mind
   - Tests are added for some of the components (as instructed in test case)
     these tests helps in maintaing the application in good state, and allows scalabilty too without fear of any bugs
   - Folder structure is well defined, seperation of concerns
   - Code is well documented.
