<template>
  <div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card">
        <div class="card-body">
            <h3 style="text-align:center;text-decoration:underline">Tag Manage </h3>
            <router-link to="tag_create" style="float:right" class="btn btn-success btn-sm">Add Tag</router-link>
          <table id="" class="table table-striped">
            <thead>
              <tr>
                <th><input type="checkbox" v-model="selectAll" @click="selectAlles"></th>
                <th>Sl</th>
                <th>Tag Name</th>
                <th>Image</th>
                <th>Gallery</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(AllTag,index) in AllTags" :key="AllTag.id">
                <td><input type="checkbox" :value="AllTag.id" v-model="selected"></td>
                <td>{{index+1}}</td>
                <td>{{AllTag.tag_name}}</td>
                <td><img style="width:70px" :src="'upload/Tag/'+AllTag.image" alt=""></td>
                <td>

                  <div v-for="galleryes in AllTag.gallery_tag" :key="galleryes.id">
                  <img style="width:70px;margin-top:5px" :src="'upload/tag_gallery/'+galleryes.gallery" alt="">
                  </div>
                  
                  </td>
                <td><span class="badge" :class="StatusColor(AllTag.status)">{{StatusName(AllTag.status)}}</span></td>
                <td>
                  <router-link :to="`tag_edit/${AllTag.id}`" class="btn btn-success btn-sm"> <i class="fa fa-edit"></i> </router-link>
                  <a @click="DeleteItem(AllTag.id)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a>
                </td>
              </tr>

           
              
            </tbody>

              <tr>
                <td colspan="7">
                    <div class="dropdown">
                      <button class="btn btn-info dropdown-toggle" :disabled="!isSelected" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" class="dropdown-item" @click="multiDelete(selected)">Delete</button>
                         <button type="button" class="dropdown-item" @click="multiActive(selected)">Active</button>
                         <button type="button" class="dropdown-item" @click="multiDeactive(selected)">Deactive</button>
                      </div>
                    </div>
                </td>
              </tr>
          </table>
        </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name:'index',
  mounted() {
     this.$store.dispatch("GetAllTag");
    // this.getResults();
  },
  data() {
    return {

      selected:[],
      selectAll:false,
      isSelected:false,
     

    }
  },

  computed:{
      AllTags(){
        return this.$store.getters.getAllTag;
      },
      
  },

  watch:{

    selected(selected){
      this.isSelected = (selected.length>0);
      this.selectAll =(selected.length==this.AllTags.length); 
    },

  
  },
  methods: {



    multiDeactive(selected){
     axios.post('/admin/tag-multideactive',{data:selected})
     .then((result) => {

        this.selected = [];
        this.$store.dispatch('GetAllTag');

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

    multiActive(selected){
      axios.post('/admin/tag-multiactive',{data:selected})
      .then((result) => {
        this.selected = [];
        this.$store.dispatch('GetAllTag');

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

    multiDelete(selected){
       axios.post('/admin/tag-multidelete',{data:selected})
       .then((result) => {

         this.selected = [];
         this.$store.dispatch("GetAllTag");

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
                    })
         
       }).catch((err) => {
         
       });
    },

    selectAlles(event){
      if(event.target.checked==true){
       this.AllTags.forEach(tag => {
         this.selected.push(tag.id);
       });
      }else{
      this.selected=[]
      }
    },

    StatusName(statue){

      let data = {
        0:'deactive',
        1:'active'
      };

     return data[statue];
    },

    StatusColor(status){
         let data = {
        0:'badge-danger',
        1:'badge-success'
      };

     return data[status];
    },

    DeleteItem(id){
      axios.get('/admin/tag-delete/'+id)
      .then((result) => {

        this.$store.dispatch("GetAllTag");

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
                    })
        
      }).catch((err) => {
        
      });
    }
    
  },
}
</script>