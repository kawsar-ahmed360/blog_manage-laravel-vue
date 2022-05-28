<template>
  <div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card">
        <div class="card-body">
            <h3 style="text-align:center;text-decoration:underline">Product Manage  <router-link to="product_create" style="float:right" class="btn btn-success btn-sm">Add Product</router-link></h3>
           
          <table class="table table-striped">
            <thead>
              <tr>
                <th><input type="checkbox" v-model="selectAll" @change="selectAlls"></th>
                <th>Sl</th>
                <th>Product Name</th>
                <th>Category Name</th>
                <th>Brand Name</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(AllProduct,index) in AllProducts" :key="AllProduct.id">
                <td><input type="checkbox" :value="AllProduct.id" v-model="selected"></td>
                <td>{{index+1}}</td>
                <td>{{AllProduct.product_name}}</td>
                <td>{{AllProduct.category['name']}}</td>
                <td>{{AllProduct.brand['name']}}</td>
                <td><img style="width:60px" :src="'upload/product/'+AllProduct.image" alt=""></td>
                <td><span class="badge" :class="StatusColor(AllProduct.status)">{{StatusName(AllProduct.status)}}</span></td>
                <td>
                   <a class="btn btn-danger btn-sm" @click="deleteProduct(AllProduct.id)"><i class="fa fa-trash"></i></a>
                  <router-link class="btn btn-success btn-sm" :to="`product_edit/${AllProduct.id}`"><i class="fa fa-edit"></i></router-link>
                </td>
              </tr>

               <tr>
                    <td colspan="7">
                      <div class="dropdown">
                      <button class="btn btn-info dropdown-toggle" :disabled="!isSelected" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" class="dropdown-item" @click="MultiDelete(selected)">Delete</button>
                         <button type="button" class="dropdown-item" @click="MultiActive(selected)">Active</button>
                         <button type="button" class="dropdown-item" @click="MultiDeActive(selected)">Deactive</button>
                      </div>
                    </div>
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"all product",
  mounted() {
    this.$store.dispatch('GetAllProduct');
  },
  data() {
    return {
      selectAll:false,
      isSelected:false,
      selected:[]
    }
  },

  watch:{
 selected(selected){
       this.selectAll= (selected.length==this.AllProducts.length);
       this.isSelected = (this.AllProducts.length>0);
    },

  },

  computed:{

   
    AllProducts(){
      return this.$store.getters.getAllProduct;
    }

  },

  methods: {

    MultiDelete(){
       axios.post('/admin/product-multidelete',{data:selected})
       .then((result) => {
            this.$store.dispatch('GetAllProduct');
         this.selected =[];
         this.selectAll =false;
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
                    title: 'Successfully Delete'
                    });
       }).catch((err) => {
         
       });
    },

    MultiDeActive(selected){
     axios.post('/admin/product-multideactive',{data:selected})
     .then((result) => {
         this.$store.dispatch('GetAllProduct');
         this.selected =[];
         this.selectAll =false;
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
                    title: 'Successfully Deactive'
                    });
     }).catch((err) => {
       
     });
    },

    MultiActive(selected){
      axios.post('/admin/product-multiactive',{data:selected})
      .then((result) => {
         this.selected =[];
         this.selectAll =false;
         this.$store.dispatch('GetAllProduct');
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
                    title: 'Successfully Active'
                    });
        
        
      }).catch((err) => {
        
      });
    },

      selectAlls(event){
          if(event.target.checked==false){
             this.selected=[];
          }else{

            this.AllProducts.forEach(pro_id => {
              this.selected.push(pro_id.id);
            });

          }
      },

    StatusName(status){
      let data = {
          0:"Deactive",
          1:"Active"
      }

      return data[status];
    },
    StatusColor(status){
      let data ={
        0:'badge-danger',
        1:'badge-success'
      }

      return data[status];
    },

    deleteProduct(id){
      axios.get('/admin/product-delete/'+id)
      .then((result) => {
        this.$store.dispatch('GetAllProduct');
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
                    });
        
      }).catch((err) => {
        
      });
    }
  },
}
</script>