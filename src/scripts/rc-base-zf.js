// import external dependencies
import 'jquery';
import 'foundation-sites';
import 'webicon/jquery-webicon';

jQuery(document).ready($ => {

  $(document).foundation();

  $(document).webicons({
    svgSet: {
      'fi': '../dist/images/webicon.svg',
    },
  });
});
