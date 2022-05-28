<template>
  <div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card">
        <div class="card-body">
            <h3 style="text-align:center;text-decoration:underline">Color Manage</h3>
            <router-link to="color_create" style="float:right" class="btn btn-success btn-sm">Add Color</router-link>
          <table class="table table-striped">
            <thead>
              <tr>
                  <th><input type="checkbox" @click="selectAlles" v-model="selectAll"></th>
                <th>Sl</th>
                <th>Color Name</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(GetAllColor,index) in GetAllColors" :key="GetAllColor.id">
                  <td><input type="checkbox" v-model="selected" :value="GetAllColor.id"></td>
                <td>{{index+1}}</td>
                <td>{{GetAllColor.color_name}}</td>
                <td><img style="width:50px" :src="'upload/color/'+GetAllColor.image" alt=""></td>
                <td><i class="badge" :class="GetColorNameStatus(GetAllColor.status)" >{{GetColorStatus(GetAllColor.status)}}</i></td>
                <td>
                    <a @click="Delete(GetAllColor.id)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a>
                    <router-link :to="`color_edit/${GetAllColor.id}`" class="btn btn-success btn-sm"><i class="fa fa-edit"></i></router-link>
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
                         <button type="button" class="dropdown-item" @click="MultiDeactive(selected)">Deactive</button>
                      </div>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style lang="">
    
</style>

<script>
export default {
    name:"index",

     mounted() {
         return this.$store.dispatch('GetAllColor');
     },

    data() {
        return {
          selected:[], 
          selectAll:false, 
          isSelected:false
        }
    },

    watch:{

      selected(selected){
        this.isSelected = (selected.length>0);
        this.selectAll = (selected.length==this.GetAllColors.length)
      }
    },

    computed:{
        GetAllColors(){
            return this.$store.getters.getAllColor
        }
    },

    methods: {

      MultiDeactive(selected){
         axios.post('/admin/color-multideactive',{data:selected})
         .then((result) => {
              this.selected = [];
             this.$store.dispatch("GetAllColor");
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
                    })
         }).catch((err) => {
           
         });
      },

      MultiActive(selected){
          axios.post('/admin/color-multiactive',{data:selected})
          .then((result) => {
            this.selected = [];
             this.$store.dispatch("GetAllColor");
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
                    })
          }).catch((err) => {
            
          });
      },

      MultiDelete(selected){
            axios.post('/admin/color-multidelete',{data:selected})
            .then((result) => {
              this.selected = [];

              this.$store.dispatch("GetAllColor");
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

            }).catch((err) => {
              
            });
      },

        GetColorStatus(status){
            let data = {
                0:'deactive',
                1:'active'
            }

            return data[status];
        },  
        
         GetColorNameStatus(status){
            let data = {
                0:'badge-danger',
                1:'badge-success'
            }

            return data[status];
        },

        Delete(id){
            axios.get('/admin/color-delete/'+id)
            .then((result) => {
                
                this.$store.dispatch("GetAllColor");
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

            }).catch((err) => {
                
            });
        },

        selectAlles(event){
           

            if(event.target.checked==false){
                this.selected = [];
            }else{

              this.GetAllColors.forEach(cate => {
                  this.selected.push(cate.id);
              });

            }
        }
        
    },
}
</script>