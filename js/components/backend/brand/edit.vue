<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 style="font-family: cursive;text-align: center;text-decoration: underline;">Brand Edit <router-link style="float: right;" class="btn btn-success btn-sm" to="/brand_manage">All Brand</router-link></h4>
                <form @submit.prevent="BrandUpdate">

                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Brand Name</label>
                            <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Enter Category Name">
                            <div style="color:red" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>


                       <div class="row">
                        <div class="col-md-12">
                            <label for="">Brand Image</label>
                            <input type="file" class="form-control" @change="imagePreview"  name="image" placeholder="Enter Category Name">
                            <div style="color:red" v-if="form.errors.has('image')" v-html="form.errors.get('image')" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Preview Image</label> <br>
                            <img :src="form.Newimage" style="width:100px" alt="">
                         
                           
                        </div>
                    </div>

                     <div class="row" style="margin-top:10px">
                        <div class="col-md-12">
                            <label for="">Status</label>
                           Active <input type="radio" value="1" v-model="form.status" placeholder="Enter Category Name">
                           Draft <input type="radio"  value="0" v-model="form.status"  placeholder="Enter Category Name">
                          <div style="color:red" v-if="form.errors.has('status')" v-html="form.errors.get('status')" />
                        </div>
                    </div>


                    <div class="row" style="margin-top:10px">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-success btn-sm">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
    name:"edit",
    mounted() {
        this.EditBrand();
    },

    data() {
        return {
           form: new Form({
                name: '',
                status: '',
                image:'',
                Newimage:'',
                id:this.$route.params.id,
                })
        }
    },

    methods:{

        EditBrand(){
           let EditId = this.$route.params.id;
            axios.get('/admin/brand-edit/'+EditId)
            .then((result) => {
                this.form.fill(result.data['edit']);
            }).catch((err) => {
                
            });
        },
        imagePreview(event){
            let file = event.target.files[0];
            if(file.size>1400000){
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
               reader.onload = event=>{
                   this.form.Newimage = event.target.result;
               }

               reader.readAsDataURL(file);
           }
        },

        BrandUpdate(){
    
            this.form.post('/admin/brand-update')
            .then((result) => {
                this.$router.push({name:'brand_manage'})
            }).catch((err) => {
                
            });
        }
    }
}
</script>