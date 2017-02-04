module.exports = {
  bundle: {
    main: {
      scripts: [
        './js/js/jquery.1.11.1.js',
        './js/bootstrap.js',
        './js/SmoothScroll.js',
        './js/nivo-lightbox.js',
        './js/jquery.isotope.js',
        './js/jqBootstrapValidation.js',
        './js/contact_me.js',
        './js/main.js',
        './js/ga.js'
      ],
      styles: './css/*.css'
    },
    vendor: {
      scripts: './bower_components/angular/angular.js'
    }
  },
  copy: './content/**/*.{png,svg}'
};
