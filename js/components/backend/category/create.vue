<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 style="font-family: cursive;text-align: center;text-decoration: underline;">Category Create <router-link style="float: right;" class="btn btn-success btn-sm" to="/category_manage">All Category</router-link></h4>
                <form @submit.prevent="SubmiCategory">

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
  name: "create",

//   data: () => ({
//     form: new Form({
//       name: "",
//       status: 0,
//     }),
//   }),
   data() {
        return {
            form: new Form({
                name: '',
                status: '',

                })
        }
    },

  methods: {
    SubmiCategory() {
      this.form.post("/admin/category-store")
        // axios.post('/admin/category-store',this.form)
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
            title: 'successfully Created'
            })
        })
        .catch((err) => {});
    },
  },
};
</script>
