<template>
    <div>
          <header class="header-style-1">

            <!-- ============================================== TOP MENU : END ============================================== -->
            <div class="main-header">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-3 logo-holder">
                            <!-- ============================================================= LOGO ============================================================= -->
                            <div class="logo">
                                <router-link to="/">
                                    <img src="images/logo.png" alt="">
                                </router-link>
                            </div><!-- /.logo -->
                            <!-- ============================================================= LOGO : END ============================================================= -->
                        </div><!-- /.logo-holder -->

                        <div class="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                            <!-- /.contact-row -->
                            <!-- ============================================================= SEARCH AREA ============================================================= -->
                            <div class="search-area">
                                <!-- <form @submit.prevent="SearchFilter"> -->
                                    <div class="control-group">

                                       

                                        <input class="search-field" v-model="searchString" placeholder="Search here..." />

                                        <router-link style="background: orange;border: none;padding: 13px;float: right;color: white;font-weight: 700;font-size: 13px;" :to="'/search/'+searchString" tag="button">search</router-link>

                                    </div>
                                <!-- </form> -->
                            </div><!-- /.search-area -->
                            <!-- ============================================================= SEARCH AREA : END ============================================================= -->
                        </div><!-- /.top-search-holder -->

                        
                    </div><!-- /.row -->

                </div><!-- /.container -->

            </div><!-- /.main-header -->

            <!-- ============================================== NAVBAR ============================================== -->
            <div class="header-nav animate-dropdown">
                <div class="container">
                    <div class="yamm navbar navbar-default" role="navigation">
                        <div class="navbar-header">
                            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse"
                                class="navbar-toggle collapsed" type="button">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="nav-bg-class">
                            <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                <div class="nav-outer">
                                    <ul class="nav navbar-nav">
                                        <li class="active dropdown yamm-fw">
                                            <router-link to="/" data-hover="dropdown" class="dropdown-toggle"
                                                data-toggle="dropdown">Home</router-link>
                                        </li>

                                        <li class="dropdown yamm-fw" v-for="(AllActiveCategory,index) in AllActiveCategorys" :key="AllActiveCategory.id">
                                            <router-link :to="`/category_post/${AllActiveCategory.id}`" data-hover="dropdown" class="dropdown-toggle"
                                                data-toggle="dropdown">{{AllActiveCategory.name}}</router-link>
                                        </li>

                                    


                                    </ul><!-- /.navbar-nav -->
                                    <div class="clearfix"></div>
                                </div><!-- /.nav-outer -->
                            </div><!-- /.navbar-collapse -->


                        </div><!-- /.nav-bg-class -->
                    </div><!-- /.navbar-default -->
                </div><!-- /.container-class -->

            </div><!-- /.header-nav -->
        
        </header>
        
    </div>
</template>


<script>
export default {
    name:'header',

    mounted() {
        this.$store.dispatch('GetAllActiveCategory');
    },

    data() {
        return {
          searchString:'',
           form:{
               search:''
           }
        }
    },

    watch:{
        
    },

    computed:{
       AllActiveCategorys(){
           return this.$store.getters.getAllActiveCategory;
       }
    },

    methods: {
        firstClient(){
            this.searchString='';
        }
    },
    
}
</script>