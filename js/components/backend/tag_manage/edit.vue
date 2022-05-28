<template>
    <div>
         <div class="row">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <div class="card">
                     <div class="card-body">
                         <h3 style="text-align:center;text-decoration:underline">Edit Tag</h3>
                         <router-link to="tag_manage" style="float:right" class="btn btn-success btn-sm">Manage Tag</router-link>
                       
                         <form @submit.prevent="UpdateTagImage">
                              
                        <div class="row">
                            <div class="col-md-12">
                                <label for="">Tag Name</label>
                                <input type="text" class="form-control" v-model="form.tag_name" name="tag_name" placeholder="enter color name">
                                <div style="color:red" v-if="form.errors.has('tag_name')" v-html="form.errors.get('tag_name')" />
                            </div>

                              <div class="col-md-12">
                                <label for="">Tag Image</label>
                                <input type="file" class="form-control" @change="UpdatePreviewImage"  name="image" placeholder="enter color name">
                             <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>

                               <div class="col-md-12">
                                <label for="">Preview Tag Image</label>
                                <img style="width:100px"  :src="form.Updateimage" alt="">
                            </div>

                               <div class="col-md-12">
                                <label for="">Old Tag Image</label>
                                <img style="width:100px;height:100px"  :src="'http://127.0.0.1:8000/upload/Tag/'+form.image" alt="">
                            </div>

                            <div class="col-md-12">
                                <label for="">Old Tag Gallery </label>
                                 <div v-for="galleryes in GalleryEdits[0]" :key="galleryes.id">
                                     <p></p>
                              <img style="width:70px;margin-top:5px" :src="'http://127.0.0.1:8000/upload/tag_gallery/'+galleryes.gallery" alt="">
                           </div>
                              
                            </div>


                            
                           <div class="col-md-12">
                                <label for="">Tag multi Image</label>
                               <input type="file" class="form-control" multiple accept="image/jpeg" @change="uploadImageGall"/>
                             <!-- <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" /> -->
                            </div>
                              <input type="hidden" v-model="form.UpdateGallery"  name="UpdateGallery[]">

                              <div class="col-md-12">
                                  
                              <div  v-for="(imagess, key) in multi_images" :key="key">
                                <img :src="imagess.src" class="preview" style="width:200px;"/>
                                {{ imagess.file.name }}
                            
                                
                            </div>
                            </div>


                           

                              <div class="col-md-12">
                                <label for="">Tag Status</label>
                                Active <input type="radio" name="status" :value="1" v-model="form.status" placeholder="enter color name">
                                Deactive <input type="radio" name="status" :value="0" v-model="form.status" placeholder="enter color name">
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

<style scoped>

</style>

<script>
export default {
    name:"edit",

    mounted(){
     this.EditTag();
    },

    data() {
        return {
             EditGallery:[],
             multi_images: [],
            
          
            form:new Form({
                id:this.$route.params.id,
                tag_name:'',
                image:'',
                Updateimage:'',
                status:'',
                gallery:[],
                UpdateGallery:[],

                
            })
        }
    },

    computed:{

        GalleryEdits(){
            return this.EditGallery;
        }
        
    },

    methods: {

 uploadImageViewss(event) {
            var selectedFiles = event.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                let img = {
                    src: URL.createObjectURL(selectedFiles[i]),
                    file: selectedFiles[i],
                }
                this.multi_images.push(img);
               
               
            }
        },

      uploadImageGall(event){
      
          
            let files = event.target.files;
          this.uploadImageViewss(event);
           for (let i=0; i<files.length; i++) {
            
                 let reader_es = new FileReader();
                reader_es.onload=event=>{  
                      
                this.form.UpdateGallery.push(event.target.result);
                    
                }

                reader_es.readAsDataURL(files[i]);

           }
      },


         fileLink(name){
           return 'upload/Tag/'+name;
         },
        
        EditTag(){
            let Id = this.$route.params.id;
          axios.get('/admin/tag-edit/'+Id)
          .then((result) => {
              this.form.fill(result.data.edit);
              this.form.UpdateGallery=[];
              
              this.EditGallery.push(result.data.gallery);
             
          }).catch((err) => {
              
          });
        },

        UpdatePreviewImage(event){
            let file = event.target.files[0];
           if(file.size>10000000){
               alert('this file is very long!!!');
               return false;
           }else{
               let reader = new FileReader();
               reader.onload=event=>{
                   this.form.Updateimage = event.target.result;
               }
               reader.readAsDataURL(file);
           }
        },

        UpdateTagImage(){
            this.form.post('/admin/tag-update')
            .then((result) => {

                this.$router.push({name:"tag_manage"})
                
            }).catch((err) => {
                
            });
        }
    },
}
</script>