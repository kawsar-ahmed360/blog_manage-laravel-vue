<template>
    <div>
         <div class="row">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <div class="card">
                     <div class="card-body">
                         <h3 style="text-align:center;text-decoration:underline">Edit Color</h3>
                         <router-link to="color_manage" style="float:right" class="btn btn-success btn-sm">Manage Color</router-link>
                       
                         <form @submit.prevent="ColorUpdate">
                              
                        <div class="row">
                            <div class="col-md-12">
                                <label for="">Color Name</label>
                                <input type="text" class="form-control" v-model="form.color_name" name="color_name" placeholder="enter color name">
                            </div>

                              <div class="col-md-12">
                                <label for="">Color Image</label>
                                <input type="file" @change="previewNewImage" class="form-control" name="image" placeholder="enter color name">
                            </div>

                                <div class="col-md-12">
                                <label for="">PreviewImage Image</label>
                                 <img style="width:100px" :src="form.Updateimage" alt="">
                            </div>


                              <div class="col-md-12">
                                <label for="">Color Status</label>
                                Active <input type="radio" name="status" v-model="form.status" :value="1" placeholder="enter color name">
                                Deactive <input type="radio" name="status" v-model="form.status" :value="0" placeholder="enter color name">
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
    data() {
        return {
            form:new Form({
                color_name:"",
                image:"",
                status:"",
                Updateimage:"",
                id:this.$route.params.id,
            })
        }
    },

    mounted() {
        this.EditData();
    },

    methods: {
        EditData(){
            axios.get('/admin/color-edit/'+this.$route.params.id)
            .then((result) => {

                this.form.fill(result.data['color']);
                
            }).catch((err) => {
                
            });
        },

        previewNewImage(event){
            let file = event.target.files[0];
            if(file.size>120000000){
                alert('image size big please another image');
                return false;
            }else{

                let reader = new FileReader();
                reader.onload =event=>{
                    this.form.Updateimage = event.target.result;
                }

                reader.readAsDataURL(file);
            }
        },

        ColorUpdate(){
            this.form.post('/admin/color-update')
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
                    title: 'Successfully Deleted'
                    })
                  
                  this.$router.push({name:'color_manage'})
                
            }).catch((err) => {
                
            });
        }
    },
}
</script>