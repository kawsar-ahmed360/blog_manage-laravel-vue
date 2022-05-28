<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h3 style="text-align: center">Size Manage</h3>
              <h4>
                <router-link
                  to="size_create"
                  style="float: right"
                  class="btn btn-success btn-sm"
                  >Add Size</router-link
                >
              </h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th><input :disabled="EmptyData()" type="checkbox" @click="selectAll" v-model="selectedAll" /></th>
                    <th>Sl</th>
                    <th>Size Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(GetAllSize, index) in GetAllSizes"
                    :key="GetAllSize.id"
                  >
                    <td><input type="checkbox" :value="GetAllSize.id" v-model="selected" /></td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ GetAllSize.size }}</td>
                    <td>
                      <img
                        style="width: 70px"
                        :src="'upload/size/' + GetAllSize.image"
                        alt=""
                      />
                    </td>
                    <td>
                      <span
                        class="badge"
                        :class="StatusColor(GetAllSize.status)"
                        >{{ StatusName(GetAllSize.status) }}</span
                      >
                    </td>
                    <td>
                      <a
                        class="btn btn-danger btn-sm"
                        @click="DeleteSize(GetAllSize.id)"
                        ><i class="fa fa-trash"></i
                      ></a>
                      <router-link
                        :to="`/size_edit/${GetAllSize.id}`"
                        class="btn btn-success btn-sm"
                      >
                        <i class="fa fa-edit"></i>
                      </router-link>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="6">
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
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>


<script>
export default {
  name: "manage",

  mounted() {
    return this.$store.dispatch("GetAllSize");
  },

  watch:{
    selected(selected){
        this.isSelected = (selected.length>0);
       this.selectedAll = (selected.length==this.GetAllSizes.length);

    }
  },

  data() {
    return {
      selected:[],
      isSelected:false,
      selectedAll:false
    };
  },



  computed: {
    GetAllSizes() {
      return this.$store.getters.getAllSize;
    },
  },

  methods: {

    MultiDelete(selected){
     axios.post('/admin/size-multidelete',{data:selected})
     .then((result) => {
       this.$store.dispatch("GetAllSize");
          this.selected = [];
          this.isSelected = false;
          this.selectedAll = false;
     }).catch((err) => {
       
     });
    },

    MultiActive(selected){
      axios.post('/admin/size-multiactive',{data:selected})
      .then((result) => {
         this.$store.dispatch("GetAllSize");
         this.selected=[];
      }).catch((err) => {
        
      });
    },

    MultiDeActive(selected){
       axios.post('/admin/size-multideactive',{data:selected})
       .then((result) => {
           this.$store.dispatch("GetAllSize");
         this.selected=[];
       }).catch((err) => {
         
       });
    },

    EmptyData(){
       return (this.GetAllSizes.length<1);
    },

    selectAll(event){
       if(event.target.checked==false){
          this.selected = [];
       }else{
         this.GetAllSizes.forEach(size => {
            this.selected.push(size.id);
         });
       }
    },
    StatusName(status) {
      let data = {
        0: "inactive",
        1: "active",
      };

      return data[status];
    },

    StatusColor(status) {
      let data = {
        0: "badge-danger",
        1: "badge-success",
      };

      return data[status];
    },

    DeleteSize(id) {
      axios
        .get("/admin/size-delete/" + id)
        .then((result) => {
          this.$store.dispatch("GetAllSize");
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "successfully delete",
          });
        })
        .catch((err) => {});
    },
  },
};
</script>