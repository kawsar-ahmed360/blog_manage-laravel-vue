<template>
    <div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="SizeUpdate">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="text-align:center">Edit Size</h2>
                            </div>
                            <div class="col-md-12">
                                <label for="">Size name</label>
                                <input type="text" class="form-control" v-model="form.size" name="size" id="" placeholder="Enter Size Name">
                                 <div style="color:red" v-if="form.errors.has('size')" v-html="form.errors.get('size')" />
                            </div>

                             <div class="col-md-12">
                                <label for="">Image</label>
                                <input type="file" @change="NewpreviewImage" class="form-control" name="image" id="">
                                 <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            </div>

                            <div class="col-md-12">
                                <label for="">Preview Image</label><br>
                                <img style="width:100px" :src="form.newImage" alt="">
                                
                            </div>


                            <div class="col-md-12">
                                <label for="">Status:</label> 
                                Deactive <input type="radio" v-model="form.status" name="status" :value="0" id="">
                                Active <input type="radio" v-model="form.status" name="status" :value="1" id="">

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

<style>

</style>

<script>
export default {
    name:"edit",

    mounted() {
        this.EditSize();
    },

    data() {
        return {
            form: new Form({
                size:"",
                image:'',
                newImage:'',
                status:'',
                id:this.$route.params.id,
            })

         
        }
    },

    computed:{

    },

    methods: {

        SizeUpdate(){
         this.form.post('/admin/size-update')
         .then((result) => {
             this.$router.push({name:'size_manage'});
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
                title: 'Successfully Updated'
                })
         }).catch((err) => {
             
         });
        },

        NewpreviewImage(event){
         let file =event.target.files[0];
         if(file.size>12000000){
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
                icon: 'error',
                title: 'Image Size Long!!!'
                })
         }else{

          let reader = new FileReader();
          reader.onload=event=>{
              this.form.newImage = event.target.result;
          }
          reader.readAsDataURL(file);
         }
        },

        EditSize(){
          axios.get('/admin/size-edit/'+this.$route.params.id)
          .then((result) => {
              this.form.fill(result.data['edit']);
          }).catch((err) => {
              
          });
        }
        
    },


}
</script>