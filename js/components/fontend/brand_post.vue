<template>
    <div>
            <div class="container">
                <div class="row">

                    <div class="blog-page"> 

                        <div class="col-md-9">

                          <div class="row">
                              
                               <span v-if="TotalCount>=1">

                                <div style="margin-top:10px" class="blog-post col-md-6 wow fadeInUp" v-for="(AllPost,index) in AllPosts" :key="AllPost.id">
                                <router-link :to="`/post_details/${AllPost.id}`"><img class="img-responsive"
                                        :src="'../upload/product/'+AllPost.image" alt=""></router-link>
                                <h1><router-link :to="`/post_details/${AllPost.id}`">{{AllPost.product_name}}</router-link>
                                </h1>
                                <span class="author">kawsar</span>
                                <span class=""><b>Brand:</b> {{AllPost.brand.name}}</span>
                                <span class=""><b>Category:</b> {{AllPost.category.name}}</span>
                                <p>{{AllPost.short_summary}}</p>
                                <router-link :to="`/post_details/${AllPost.id}`" class="btn btn-upper btn-primary read-more">read more</router-link>
                              </div>
                               </span>

                               <span v-else="">
                                   <h3 style="text-align:center;color:red;font-size:30px">Not Found</h3>
                               </span>
                              

                          </div>
                            


                        </div>
                        <div class="col-md-3 sidebar">

                           <side-bar></side-bar>

                           



                        </div>
                    </div>
                </div>
               
                <div id="brands-carousel" class="logo-slider wow fadeInUp">

                    <div class="logo-slider-inner">
                        <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
                            <div class="item m-t-15">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand1.png"
                                        src="images/blank.gif" alt="">
                                </a>
                            </div>
                            

                            <div class="item m-t-10">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand2.png"
                                        src="images/blank.gif" alt="">
                                </a>
                            </div>
                         

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand3.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                          

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand4.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                           

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand5.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                           

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand6.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                         

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand2.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                           

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand4.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                           

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand1.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                            

                            <div class="item">
                                <a href="#" class="image">
                                    <img data-echo="images/brands/brand5.png" src="images/blank.gif"
                                        alt="">
                                </a>
                            </div>
                            
                        </div>
                    </div>

                </div>
               
            </div>
    </div>
</template>

<script>
export default {
    name:"brand",

    mounted() {
        this.AllPostsView();
    },

    watch:{
         $route(){
             this.AllPostsView();
             this.TotalCount();
         }
    },

    computed:{
     TotalCount(){
         for(var i=0; i<this.AllPosts.length; i++){
               return this.AllPosts.length;
           }
     }
    },

    data() {
        return {
              AllPosts:{},
        }
    },

    methods: {
        AllPostsView(){
            axios.get('/brand_wise_post_view/'+this.$route.params.id)
            .then((result) => {
                this.AllPosts = result.data['post'];
            }).catch((err) => {
                
            });
        }
    },
}
</script>