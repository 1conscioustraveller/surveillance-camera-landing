// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
  },
}

//Alternative version with additional plugins for production optimization:
// postcss.config.js (with production optimizations)
//module.exports = {
  //plugins: {
    //'postcss-import': {}, // For importing other CSS files
    //'tailwindcss': {},
    //'autoprefixer': {},
    //...(process.env.NODE_ENV === 'production' ? {
      //'cssnano': { // Minify CSS for production
        //preset: ['default', {
          //discardComments: {
            //removeAll: true,
          //},
        //}]
      //}
    //} : {})
  //},
//}


//Another alternative with more detailed configuration:
//js
// postcss.config.js (detailed configuration)
  //module.exports = {
  //plugins: [
    //require('postcss-import')({
      //path: ['styles'], // Look for imports in styles directory
    //}),
    //require('tailwindcss')('./tailwind.config.js'), // Explicit path to config
    //require('autoprefixer')({
      // Browserlist is defined in package.json
      //flexbox: 'no-2009', // Enable CSS Grid and Flexbox prefixes
    //}),
    // Only minify in production
    //...(process.env.NODE_ENV === 'production' 
      //? [require('cssnano')({
          //preset: ['advanced', {
            //discardComments: {
              //removeAll: true,
            //},
            //reduceIdents: false, // Don't change class names
            //zindex: false, // Don't optimize z-index
          //}]
        //})]
      //: []
    //)
  //]
//


//}


//Minimal version for basic setup:
//js
// postcss.config.js (minimal)
//module.exports = {
  //plugins: [
    //'tailwindcss',
    //'autoprefixer',
  //]
//}
