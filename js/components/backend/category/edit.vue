<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 style="font-family: cursive;text-align: center;text-decoration: underline;">Category Edit <router-link style="float: right;" class="btn btn-success btn-sm" to="/category_manage">All Category</router-link></h4>
                <form @submit.prevent="CategoryUpdate">

                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Category Name</label>
                            <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Enter Category Name">
                            <div style="color:red" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>


                     <div class="row" style="margin-top:10px">
                        <div class="col-md-12">
                            <label for="">Status</label>
                           Active <input type="radio" value="1" v-model="form.status" placeholder="Enter Category Name">
                           Draft <input type="radio"  value="0" v-model="form.status"  placeholder="Enter Category Name">
                          <div style="color:red" v-if="form.errors.has('status')" v-html="form.errors.get('nstatusame')" />
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


<script>
export default {
     name: "edit",
     created(){
      this.EditCategory();
     },
  data: () => ({
    form: new Form({
        id:null,
      name: "",
      status: 0,
    }),
  }),

  methods: {
        EditCategory(){
      let id = this.$route.params.id;

      axios.get('/admin/category-edit/'+id)
      .then((result) => {
         this.form.fill(result.data['edit']);
      }).catch((err) => {

      });
  },

   CategoryUpdate(){
       this.form.post('/admin/category-update/')
       .then((result) => {
          this.$router.push({name:'category_manage'})
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
            title: 'successfully Updated'
            })
       }).catch((err) => {

       });
   }
  },
}
</script>
