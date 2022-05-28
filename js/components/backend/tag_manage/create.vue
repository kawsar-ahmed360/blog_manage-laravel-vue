<template>
    <div>
         <div class="row">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <div class="card">
                     <div class="card-body">
                         <h3 style="text-align:center;text-decoration:underline">Create Tag</h3>
                         <router-link to="tag_manage" style="float:right" class="btn btn-success btn-sm">Manage Tag</router-link>
                       
                         <form @submit.prevent="TagManageSumit">
                              
                        <div class="row">
                            <div class="col-md-12">
                                <label for="">Tag Name</label>
                                <input type="text" class="form-control" v-model="form.tag_name" name="tag_name" placeholder="enter color name">
                                <div style="color:red" v-if="form.errors.has('tag_name')" v-html="form.errors.get('tag_name')" />
                            </div>

                              <div class="col-md-12">
                                <label for="">Tag Image</label>
                                <input type="file" class="form-control"  @change="PreviewImage" name="image" placeholder="enter color name">
                             <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>

                               <div class="col-md-12">
                                <label for="">Preview Tag Image</label>
                                <img style="width:100px"  :src="form.image" alt="">
                            </div>


                           <div class="col-md-12">
                                <label for="">Tag multi Image</label>
                               <input type="file" class="form-control" multiple accept="image/jpeg" @change="uploadImage"/>
                             <!-- <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" /> -->
                            </div>
                              <input type="hidden" v-model="form.gallery"  name="gallery[]">

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
    name:'create',

    data() {
        return {
                multi_images: [],
            form:new Form({
                tag_name:'',
                image:'',
                status:'',
                gallery:[],
               
               
           
                 
            })
        }
    },

    methods: {

 uploadImageView(event) {
            var selectedFiles = event.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                let img = {
                    src: URL.createObjectURL(selectedFiles[i]),
                    file: selectedFiles[i],
                }
                this.multi_images.push(img);
               
               
            }
        },


        uploadImage(event){
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

         
            
        },

      
        TagManageSumit(){
           this.form.post('/admin/tag-store')
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
                    this.$router.push({name:"tag_manage"})
           }).catch((err) => {
               
           });
        },

        PreviewImage(event){

            let file = event.target.files[0];
            if(file.size>120000000){
                console.log('file is long!!');
                return false;

            }else{

                let reader = new FileReader();
                reader.onload=event=>{
                    this.form.image = event.target.result;
                }

                reader.readAsDataURL(file);
            }
        }
    },
    
}
</script>