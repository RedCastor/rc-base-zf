// import external dependencies
import 'jquery';
import 'foundation-sites';
import 'webicon/jquery-webicon';

jQuery(document).ready($ => {

  $(document).foundation();

  $(document).webicons({
    svgSet: {
      'rc-base': '../dist/images/webicon.svg',
    },
    alias: {
      fi: 'rc-base',
    },
  });
});
