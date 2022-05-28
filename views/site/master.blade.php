<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from www.themesground.com/flipmart-demo/HTML/blog.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 19 May 2022 14:10:01 GMT -->

<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="MediaCenter, Template, eCommerce">
    <meta name="robots" content="all">

    <title>Blog</title>

    <!-- Bootstrap Core CSS -->

    <link rel="stylesheet" href="{{ mix('css/style.css') }}">


    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800'
        rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>


</head>

<body class="cnt-home">
    <div id="content">
        <!-- ============================================== HEADER ============================================== -->
        <top-header></top-header>

        <!-- ============================================== HEADER : END ============================================== -->
        <div class="breadcrumb">
            <div class="container">
                <div class="breadcrumb-inner">
                    <ul class="list-inline list-unstyled">
                        <li><a href="#">Home</a></li>
                        {{-- <li class='active'>Blog</li> --}}
                    </ul>
                </div><!-- /.breadcrumb-inner -->
            </div><!-- /.container -->
        </div><!-- /.breadcrumb -->

        <div class="body-content">
            <div class="container">


                {{-- <router-view></router-view> --}}

                <public-master></public-master> 

            </div>

        </div>
        <!-- ============================================================= FOOTER ============================================================= -->
        <footer id="footer" class="footer color-bg">


            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h4 class="module-title">Contact Us</h4>
                            </div><!-- /.module-heading -->

                            <div class="module-body">
                                <ul class="toggle-footer" style="">
                                    <li class="media">
                                        <div class="pull-left">
                                            <span class="icon fa-stack fa-lg">
                                                <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                                        </div>
                                    </li>

                                    <li class="media">
                                        <div class="pull-left">
                                            <span class="icon fa-stack fa-lg">
                                                <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <p>+(888) 123-4567<br>+(888) 456-7890</p>
                                        </div>
                                    </li>

                                    <li class="media">
                                        <div class="pull-left">
                                            <span class="icon fa-stack fa-lg">
                                                <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <span><a href="#">flipmart@themesground.com</a></span>
                                        </div>
                                    </li>

                                </ul>
                            </div><!-- /.module-body -->
                        </div><!-- /.col -->

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h4 class="module-title">Customer Service</h4>
                            </div><!-- /.module-heading -->

                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><router-link to="/my_account" title="Contact us">My Account</router-link></li>
                                    <li><router-link to="/order-history" title="About us">Order History</router-link></li>
                                    <li><router-link to="/faq" title="faq">FAQ</router-link></li>
                                    <li><router-link to="/spacial" title="Popular Searches">Specials</router-link></li>
                                    <li class="last"><router-link to="/help_center" title="Where is my order?">Help Center</router-link>
                                    </li>
                                </ul>
                            </div><!-- /.module-body -->
                        </div><!-- /.col -->

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h4 class="module-title">Corporation</h4>
                            </div><!-- /.module-heading -->

                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><router-link title="Your Account" to="/about">About us</router-link></li>
                                    <li><router-link title="Information" to="/customer_service">Customer Service</router-link></li>
                                    <li><router-link to="company">Company</router-link></li>
                                    <li><router-link to="relation">Relations</router-li></li>
                                    <li class="last"><router-link title="Orders History" to="advance_search">Advanced Search</router-link>
                                    </li>
                                </ul>
                            </div><!-- /.module-body -->
                        </div><!-- /.col -->

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h4 class="module-title">Why Choose Us</h4>
                            </div><!-- /.module-heading -->

                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><router-link to="shopping" title="About us">Shopping Guide</router-link></li>
                                    <li><router-link to="blog" title="Blog">Blog</router-link></li>
                                    <li><router-link to="company" title="Company">Company</router-link></li>
                                    <li><router-link to="relation" title="Investor Relations">Relations</router-link></li>
                                    <li class=" last"><router-link to="contact" title="Suppliers">Contact
                                            Us</router-link>
                                    </li>
                                </ul>
                            </div><!-- /.module-body -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright-bar">
                <div class="container">
                    <div class="col-xs-12 col-sm-6 no-padding social">
                        <ul class="link">
                            <li class="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook"></a>
                            </li>
                            <li class="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a>
                            </li>
                            <li class="googleplus pull-left"><a target="_blank" rel="nofollow" href="#"
                                    title="GooglePlus"></a></li>
                            <li class="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
                            <li class="pintrest pull-left"><a target="_blank" rel="nofollow" href="#"
                                    title="PInterest"></a></li>
                            <li class="linkedin pull-left"><a target="_blank" rel="nofollow" href="#"
                                    title="Linkedin"></a>
                            </li>
                            <li class="youtube pull-left"><a target="_blank" rel="nofollow" href="#"
                                    title="Youtube"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 no-padding">
                        <div class="clearfix payment-methods">
                            <ul>
                                <li><img src="images/payments/1.png" alt=""></li>
                                <li><img src="images/payments/2.png" alt=""></li>
                                <li><img src="images/payments/3.png" alt=""></li>
                                <li><img src="images/payments/4.png" alt=""></li>
                                <li><img src="images/payments/5.png" alt=""></li>
                            </ul>
                        </div><!-- /.payment-methods -->
                    </div>
                </div>
            </div>
        </footer>
        <!-- ============================================================= FOOTER : END============================================================= -->


        <!-- For demo purposes – can be removed on production -->


        <!-- For demo purposes – can be removed on production : End -->

        <!-- JavaScripts placed at the end of the document so the pages load faster -->





    </div>
    <script src="{{ mix('js/app2.js') }}"></script>
    <script src="{{ mix('js/app3.js') }}"></script>

    

</body>

<!-- Mirrored from www.themesground.com/flipmart-demo/HTML/blog.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 19 May 2022 14:11:11 GMT -->

</html>
