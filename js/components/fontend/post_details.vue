<template>
    <div>
   

	<div class="body-content">
		<div class="container">
			<div class="row">
				<div class="blog-page">
					<div class="col-md-9">
						<div class="blog-post wow fadeInUp">
							<img class="img-responsive" :src="'../upload/product/'+SinglePostdata.image" alt="">
							<h1>{{SinglePostdata.product_name}}</h1>
							<span class="author">Kawsar</span>
							<span class=""><b>Brand:</b> {{SinglePostdata.brand.name}}</span>
							<span class=""><b>Category:</b> {{SinglePostdata.category.name}}</span>
							<p v-html="SinglePostdata.description"></p>

							<div class="social-media">
								 <div class="row">
                                     <div class="col-md-2" v-for="(Gallery,index) in SinglePostdata.gallery" :key="Gallery.id">
                                     <img :src="'../upload/product_gallery/'+Gallery.gallery" alt="">
                                 </div>
                                 </div>
							</div>
						</div>



					</div>
					<div class="col-md-3 sidebar">


                     <side-bar></side-bar>

						<!-- ============================================== PRODUCT TAGS : END ============================================== -->
					</div>
				</div>
			</div>
		</div>
	</div>

    </div>
</template>


<script>
export default {
    name:'header',

    mounted() {
        this.SinglePost();
    },

    data() {
        return {
            SinglePostdata:'',
        }
    },

    computed:{
      
    },

    methods: {
        SinglePost(){
            axios.get('/single_post/'+this.$route.params.id)
            .then((result) => {
                this.SinglePostdata = result.data['single'];
            }).catch((err) => {
                
            });
        }
    },
}
</script>