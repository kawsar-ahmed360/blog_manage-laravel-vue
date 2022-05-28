<template>
  <div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8" style="background: white">
        <h4
          style="
            font-family: cursive;
            text-align: center;
            text-decoration: underline;
          "
        >
          Brand Manage
          <router-link
            style="float: right"
            class="btn btn-success btn-sm"
            to="/brand_create"
            >Add Brand</router-link
          >
        </h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" @click="selectAl" v-model="selectAll" />
              </th>
              <th>Sl</th>
              <th>Name</th>
              <th>Status</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(AllBrand, index) in AllBrands" :key="AllBrand.id">
              <td>
                <input
                  type="checkbox"
                  :value="AllBrand.id"
                  v-model="selected"
                />
              </td>
              <td>{{ ++index }}</td>
              <td>{{ AllBrand.name }}</td>
              <td>
                <span class="badge" :class="StatusColor(AllBrand.status)">{{
                  StatusName(AllBrand.status)
                }}</span>
              </td>
              <td>
                <img
                  :src="'upload/brand/' + AllBrand.image"
                  style="width: 100px"
                  alt=""
                />
              </td>
              <td>
                <router-link
                  class="btn btn-success btn-sm"
                  :to="`brand_edit/${AllBrand.id}`"
                >
                  <i class="fa fa-edit"></i>
                </router-link>
                <a
                  @click="BrandDelete(AllBrand.id)"
                  class="btn btn-danger btn-sm"
                  ><i class="fa fa-trash"></i
                ></a>
              </td>
            </tr>
          </tbody>

          <tr>
            <td colspan="4">
              <div class="dropdown show">
                <a
                  class="btn btn-warning dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <button
                    :disabled="!isSelected"
                    @click="RemoveAll(selected)"
                    class="dropdown-item"
                  >
                    RemoveAll
                  </button>
                  <button
                    :disabled="!isSelected"
                    class="dropdown-item"
                    @click="ActiveAll(selected)"
                  >
                    Active
                  </button>
                  <a
                    :disabled="!isSelected"
                    class="dropdown-item"
                    @click="DeactiveAll(selected)"
                    >Deactive</a
                  >
                </div>
              </div>
              <!-- <button :disabled="!isSelected" @click="RemoveAll(selected)" class="btn btn-danger btn-sm">All Delete</button> -->
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>


<style scoped>
</style>

<script>
export default {
  name: "manage",

  mounted() {
    this.$store.dispatch("AllBrands");
  },

  data() {
    return {
      selected: [],
      selectAll: false,
      isSelected: false,
    };
  },

  watch: {
    selected(selected) {
      this.isSelected = selected.length > 0;
      this.selectAll = selected.length == this.AllBrands.length;
    },
  },

  computed: {
    AllBrands() {
      return this.$store.getters.getBrand;
    },
  },

  methods: {
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

    selectAl(e) {
      if (e.target.checked == false) {
        this.selected = [];
      } else {
        this.AllBrands.forEach((cat) => {
          this.selected.push(cat.id);
        });
      }
    },

    BrandDelete(Id) {
      axios
        .get("/admin/brand-delete/" + Id)
        .then((result) => {
          this.$store.dispatch("AllBrands");
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
            title: "successfully Deleted",
          });
        })
        .catch((err) => {});
    },

    RemoveAll(AllId) {
      axios
        .post("/admin/brand-multidelete", { data: AllId })
        .then((result) => {
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
            title: "successfully Deleted",
          });
          (this.selected = []), this.$store.dispatch("AllBrands");
        })
        .catch((err) => {});
    },
  },
};
</script>