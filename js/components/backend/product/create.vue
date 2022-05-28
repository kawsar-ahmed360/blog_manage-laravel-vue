<template>
    <div>
         <div class="row">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <div class="card">
                     <div class="card-body">
                         <h3 style="text-align:center;text-decoration:underline">Create Product  <router-link to="color_manage" style="float:right" class="btn btn-success btn-sm">Manage Product</router-link></h3>
                        
                       
                         <form @submit.prevent="productSubmit">
                              
                        <div class="row">

                            <div class="col-md-12">
                                <label for="">Product Name</label>
                                <input type="text" class="form-control" v-model="form.product_name" name="product_name" placeholder="enter product name">
                                <div style="color:red" v-if="form.errors.has('product_name')" v-html="form.errors.get('product_name')" />
                            </div>


                             <div class="col-md-12">
                                <label for="">Select Category</label>
                                <select name="cat_id" v-model="form.cat_id" class="form-control" id="">
                                    <option disabled selected>--Select Once-</option>
                                    <option v-for="AllCategory in AllCategorys" :key="AllCategory.id" :value="AllCategory.id" >{{AllCategory.name}}</option>
                                </select>
                                  <div style="color:red" v-if="form.errors.has('cat_id')" v-html="form.errors.get('cat_id')" />
                            </div>

                              <div class="col-md-6">
                                <label for="">Select Brand</label>
                                <select name="brand_id" v-model="form.brand_id" class="form-control" id="">
                                    <option disabled selected>--Select Once-</option>
                                     <option v-for="(AllBrand,index) in AllBrands" :key="AllBrand.id" :value="AllBrand.id">{{AllBrand.name}}</option>
                                </select>
                                 <div style="color:red" v-if="form.errors.has('brand_id')" v-html="form.errors.get('brand_id')" />
                            </div>

                              <div class="col-md-6">
                                <label for="">Select Size</label>
                                <select name="size_id" v-model="form.size_id" class="form-control" id="">
                                    <option disabled selected>--Select Once-</option>
                                    <option v-for="(AllSize,index) in AllSizes" :key="AllSize.id" :value="AllSize.id">{{AllSize.size}}</option>
                                </select>
                                 <div style="color:red" v-if="form.errors.has('size_id')" v-html="form.errors.get('size_id')" />
                            </div>

                             <div class="col-md-6">
                                <label for="">Select Color</label>
                                <select name="color_id" v-model="form.color_id" class="form-control" id="">
                                    <option disabled selected>--Select Once-</option>
                                    <option v-for="(AllColor,index) in AllColors" :key="AllColor.id" :value="AllColor.id">{{AllColor.color_name}}</option>
                                </select>
                                 <div style="color:red" v-if="form.errors.has('color_id')" v-html="form.errors.get('color_id')" />
                            </div>

                             <div class="col-md-6">
                                <label for="">Select Tag</label>
                                <select name="tag_id" v-model="form.tag_id" class="form-control" id="">
                                    <option disabled selected>--Select Once-</option>
                                    <option v-for="(AllTag,index) in AllTags" :key="AllTag.id" :value="AllTag.id">{{AllTag.tag_name}}</option>
                                </select>
                                 <div style="color:red" v-if="form.errors.has('tag_id')" v-html="form.errors.get('tag_id')" />
                            </div>



                              <div class="col-md-12">
                                <label for="">Short Summary</label>
                                 <vue-editor  v-model="form.short_summary"></vue-editor>
                               <!-- <textarea name="short_summary" v-model="form.short_summary" class="form-control" id="" cols="3" rows="4" placeholder="Enter short"></textarea> -->
                                <div style="color:red" v-if="form.errors.has('short_summary')" v-html="form.errors.get('short_summary')" />
                            </div>

                             <div class="col-md-12">
                                <label for="">Description</label>
                                <vue-editor  v-model="form.description"></vue-editor>
                               <!-- <textarea name="description" v-model="form.description"  class="form-control" id="" cols="3" rows="4" placeholder="Enter short"></textarea> -->
                                <div style="color:red" v-if="form.errors.has('description')" v-html="form.errors.get('description')" />
                            </div>


                              <div class="col-md-12">
                                <label for="">Product Image</label>
                                <input type="file" class="form-control" @change="PreviewImage"  name="image" placeholder="enter color name">
                                 <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>

                              <div class="col-md-12">
                                <label for="">preview Image</label>
                               <img style="width:100px" :src="form.image" alt="">
                            </div>


                            
                              <div class="col-md-12">
                                <label for="">Product Gallery Image</label>
                                <input type="file" class="form-control" multiple name="gallery" @change="multigallery" placeholder="enter color name">
                                 <div style="color:red" v-if="form.errors.has('gallery')" v-html="form.errors.get('gallery')" />
                            </div>
                                <input type="hidden" v-model="form.gallery"  name="gallery[]">

                              <div class="col-md-12">
                                <label for="">preview Gallery Image</label>
                                <div class="row">
                                    <div class="col-md-4"  v-for="(imagess, key) in multi_images" :key="key">
                                <img :src="imagess.src" class="preview" style="width:200px;"/>
                                {{ imagess.file.name }}
                                </div>
                                </div>
                            </div>

                              <div class="col-md-12">
                                <label for="">Product Status</label>
                                Active <input type="radio" v-model="form.status" name="status" :value="1" placeholder="enter color name">
                                Deactive <input type="radio" v-model="form.status" name="status" :value="0" placeholder="enter color name">
                                 <div style="color:red" v-if="form.errors.has('status')" v-html="form.errors.get('status')" />
                            </div>

                            
                              <div class="col-md-12">
                               
                                <button type="submit" class="btn btn-success btn-sm">Submit</button>
                            </div>
                        </div>
                         </form>

                     </div>
                 </div>
             </div>
             <div class="col-md-2"></div>
         </div>
    </div>
</template>


<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
    VueEditor
  },
    name:'product_add',

    mounted() {
        this.AllViewData();
    },

    data() {
        return {
            AllCategorys:[],
            AllColors:[],
            AllTags:[],
            AllSizes:[],
            AllBrands:[],
            multi_images:[],
            form:new Form({
                product_name:"",
                short_summary:"",
                description:"",
                image:"",
                gallery:[],
                cat_id:"",
                tag_id:"",
                color_id:"",
                brand_id:"",
                size_id:"",
                status:""

            })
        }
    },

    methods: {

        productSubmit(){
         this.form.post('/admin/product-store')
         .then((result) => {
             const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    })

                    Toast.fire({
                    icon: 'success',
                    title: 'Successfully Store'
                    })
                    this.$router.push({name:"product_manage"})
             
         }).catch((err) => {
             
         });
        },

        AllViewData(){
            axios.get('/admin/product-view-all-data')
            .then((result) => {
                this.AllCategorys = result.data['category'];
                this.AllColors = result.data['color'];
                this.AllTags = result.data['tag'];
                this.AllSizes = result.data['size'];
                this.AllBrands = result.data['brand'];
            }).catch((err) => {
                
            });
        },

        PreviewImage(event){
            let file = event.target.files[0];
            if(file.size>1200000){
                alert('image very long!!');
                return false;
            }else{
                let reader = new FileReader();
                reader.onload=event=>{
                   this.form.image = event.target.result;
                }

                reader.readAsDataURL(file);
            }
        },

        uploadImageView(event){
          var selectedFiles = event.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                let img = {
                    src: URL.createObjectURL(selectedFiles[i]),
                    file: selectedFiles[i],
                }
                this.multi_images.push(img);
               
               
            }
        },

        multigallery(event){
                let file = event.target.files;
          this.uploadImageView(event);
           for (let i = 0; i < file.length; i++) {
                // console.log(file[i].size);

                 let reader = new FileReader();
               
                reader.onload=event=>{
                    
                    // var newar = ['kawsra','hamid','samim'];
                //    return this.form.gallery.push(event.target.result);
                //    return this.multi_images.push(event.target.result);

                  this.form.gallery.push(event.target.result);
                    
                  
                 
                }

                reader.readAsDataURL(file[i]);

           }

        }
    },
}
</script>