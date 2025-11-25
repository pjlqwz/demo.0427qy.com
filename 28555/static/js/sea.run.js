seajs.config({
  paths: {
    'path': website.root+"/js"
  },
  alias: {
    "jquery": "/public/js/jquery-1.11.0.min.js",
    "lazyload": "/public/js/jquery.lazyload.min.js",
    "jqcookie": "/public/js/jquery.cookie.min.js",
    "jqform": "/public/js/jquery.form.min.js",
    "jqjson": "/public/js/jquery.json.min.js",
    "functions": "/public/js/functions.js",
    "validator": "/public/js/jquery.validator.min.js",
    "owlcarousel": "/public/js/owl.carousel.min.js",
    "owlcarouselcss": "/public/css/owl.carousel.css",
    "imagesloaded": "/public/js/jquery.imagesloaded.min.js",
    "fastclick": "/public/js/fastclick.min.js",
    "datepicker": "/public/js/jquery-ui.datepicker.min.js",
    "echarts": "/public/echarts/echarts-all.js",
    "bdmapapi": "http://api.map.baidu.com/getscript?v=1.1&ak=&services=true&t=20130716024058",
    "bdmapcss": "http://api.map.baidu.com/res/11/bmap.css",
    "bdmap": "/public/js/baidumap.js",
    "signin": "/public/js/signin.js",
    "singletextscroll": "/public/js/singleTextScroll.min.js",
    "msgdialog": "/public/js/lm.msgdialog.min.js",
    "laypage": "/public/js/laypage.js",
    "lmselect": "/public/js/selectBeautify.min.js",
    "verticalscroll": "/public/js/lmVerticalScroll.min.js"
  }
});
seajs.use("path/main");