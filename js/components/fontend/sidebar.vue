<template>
    <div>
         <div class="sidebar-module-container">


                                <div class="home-banner outer-top-n outer-bottom-xs">
                                    <img :src="'../images/banners/LHS-banner.jpg'" alt="Image">
                                </div>
                          
                                <div class="sidebar-widget outer-bottom-xs wow fadeInUp">
                                    <h3 class="section-title">Category</h3>
                                    <div class="sidebar-widget-body m-t-10">
                                        <div class="accordion">
                                            <div class="accordion-group">
                                                <div class="accordion-heading" v-for="(AllActiveCategory,index) in AllActiveCategorys" :key="AllActiveCategory.id">
                                                    <router-link :to="`/category_post/${AllActiveCategory.id}`" data-toggle="collapse"
                                                        class="accordion-toggle collapsed">
                                                        {{AllActiveCategory.name}}
                                                    </router-link>
                                                </div>
                                                
                                            </div>





                                        </div>
                                    </div>
                                </div>


                                 <div class="sidebar-widget outer-bottom-xs wow fadeInUp">
                                    <h3 class="section-title">Brand</h3>
                                    <div class="sidebar-widget-body m-t-10">
                                        <div class="accordion">
                                            <div class="accordion-group">
                                                <div class="accordion-heading" v-for="(AllActiveCategory,index) in AllActiveBrands" :key="AllActiveCategory.id">
                                                    <router-link :to="`/brand_post/${AllActiveCategory.id}`" data-toggle="collapse"
                                                        class="accordion-toggle collapsed">
                                                        {{AllActiveCategory.name}}
                                                    </router-link>
                                                </div>
                                                
                                            </div>





                                        </div>
                                    </div>
                                </div>



                              
                            </div>
    </div>
</template>


<script>
export default {
    name:'sidebar',

    mounted() {
        this.$store.dispatch('GetAllActiveCategory');
        this.$store.dispatch('GetAllActiveBrand');
       
    },

    watch:{
        
    },

    data() {
        return {
           
        }
    },

    computed:{
       AllActiveCategorys(){
           return this.$store.getters.getAllActiveCategory;
          
       }, 

       AllActiveBrands(){
           
           return this.$store.getters.getAllActiveBrand;
       }, 
       
    },

    methods: {
      
    },
}
</script>