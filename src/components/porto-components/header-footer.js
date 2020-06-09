// This is just a middle file, to import components from header.js and import style for these components
// I could import components directly in App.js but this would require me to import all the theme shit into App.js
// which will cause mess in App.js and with many components there would by many useless imports in App.js

// custom imports for Porto theme to work
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'magnific-popup/dist/magnific-popup.css'

import '../../porto-assets/css/theme.css'
import '../../porto-assets/css/theme-elements.css'
import '../../porto-assets/css/theme-blog.css'
import '../../porto-assets/css/theme-shop.css'

import '../../porto-assets/vendor-others/rs-plugin/css/settings.css'
import '../../porto-assets/vendor-others/rs-plugin/css/layers.css'
import '../../porto-assets/vendor-others/rs-plugin/css/navigation.css'
import '../../porto-assets/vendor-others/circle-flip-slideshow/css/component.css'

import '../../porto-assets/css/skins/default.css'
import '../../porto-assets/css/custom.css'

import {Footer, JustButtonByEmad, PortoHeader} from './header'

export {Footer, PortoHeader, JustButtonByEmad}
