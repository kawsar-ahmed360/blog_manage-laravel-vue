<template>
    <div>
         <div class="row">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <div class="card">
                     <div class="card-body">
                         <h3 style="text-align:center;text-decoration:underline">Create Color</h3>
                         <router-link to="color_manage" style="float:right" class="btn btn-success btn-sm">Manage Color</router-link>
                       
                         <form @submit.prevent="ColorSubmit">
                              
                        <div class="row">
                            <div class="col-md-12">
                                <label for="">Color Name</label>
                                <input type="text" class="form-control" v-model="form.color_name" name="color_name" placeholder="enter color name">
                              <div style="color:red" v-if="form.errors.has('color_name')" v-html="form.errors.get('color_name')" />
                            </div>

                              <div class="col-md-12">
                                <label for="">Color Image</label>
                                <input type="file" class="form-control" @change="PreviewImage" name="image" placeholder="enter color name">
                          
                             <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>

                                <div class="col-md-12">
                                <label for="">Preview Image</label>
                                <img style="width:100px" :src="form.image" alt="">
                            </div>

                              <div class="col-md-12">
                                <label for="">Color Status</label>
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

<style scoped>

</style>

<script>
export default {
    name:"create",

    data() {
        return {
        form:new Form({
            color_name:"",
            image:"",
            status:"",

          }),
        }
    },

    methods: {


       PreviewImage(event){
          let file = event.target.files[0];
          if(file.size>120000000){
           alert('image is very long');
           return false;
          }else{

              let reader = new FileReader();
              reader.onload=event=>{
                  this.form.image = event.target.result
              }

              reader.readAsDataURL(file);

          }
       },

     ColorSubmit(){
           this.form.post('/admin/color-store')
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

               this.$router.push({name:'color_manage'});
               
           }).catch((err) => {
               
           });
        }
    },
}
</script>