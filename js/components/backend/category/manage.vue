<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4
                style="
                  font-family: cursive;
                  text-align: center;
                  text-decoration: underline;
                "
              >
                Category Manage
                <router-link
                  style="float: right"
                  class="btn btn-success btn-sm"
                  to="/category_create"
                  >Add Category</router-link
                >
              </h4>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" v-model="selectedAll" @click="selectedAllFn" />
                    </th>
                    <th>Sl</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(GetCategory, index) in GetCategorys"
                    :key="GetCategory.id"
                  >
                    <td>
                      <input
                        type="checkbox"
                        :value="GetCategory.id"
                        v-model="selected"
                      />
                    </td>
                    <td>{{ ++index }}</td>
                    <td>{{ GetCategory.name }}</td>
                    <td>
                      <span
                        class="badge"
                        :class="StatusColor(GetCategory.status)"
                        >{{ StatusName(GetCategory.status) }}</span
                      >
                    </td>
                    <td>
                      <router-link
                        :to="`/category_edit/${GetCategory.id}`"
                        class="btn btn-success btn-sm"
                        >Edit</router-link
                      >
                      <a
                        class="btn btn-danger btn-sm"
                        @click="Remove(GetCategory.id)"
                        >delete</a
                      >
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

                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
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
  name: "manage",
  created() {},
  data() {
    return {
      selected: [],
      isSelected: false,
      selectedAll: false,
    };
  },

  mounted() {
    this.$store.dispatch("getCategoris");
  },

  watch: {
    selected: function (selected) {
      this.isSelected = selected.length > 0;
      this.selectedAll = selected.length == this.GetCategorys.length;
    },
  },

  computed: {
    GetCategorys() {
      return this.$store.getters.getCategory;
    },
  },

  methods: {
    StatusName(status) {
      let data = {
        0: "Inactive",
        1: "Active",
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

    Remove(id) {
      axios
        .get("/admin/category-delete/" + id)
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
          this.$store.dispatch("getCategoris");
        })
        .catch((err) => {});
    },

    selectedAllFn: function (e) {
      if (e.target.checked == false) {
        this.selected = [];
      } else {
        this.GetCategorys.forEach((cat) => {
          this.selected.push(cat.id);
        });
      }
    },

    RemoveAll: function (AllId) {
      axios
        .post("/admin/category-multi-delete", { data: AllId })
        .then((result) => {
          this.selected = [];
          this.isSelected = false;
          this.selectedAll = false;
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
          this.$store.dispatch("getCategoris");
        })
        .catch((err) => {});
    },

    ActiveAll(selected) {
      axios
        .post("/admin/category-multi-active/", { data: selected })
        .then((result) => {
          this.selected = [];
          this.isSelected = false;
          this.selectedAll = false;
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
            title: "successfully Active",
          });
          this.$store.dispatch("getCategoris");
        })
        .catch((err) => {});
    },

    DeactiveAll(selected) {
      axios
        .post("/admin/category-multi-deactive/", { data: selected })
        .then((result) => {
          this.selected = [];
          this.isSelected = false;
          this.selectedAll = false;
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
            title: "successfully Deactive",
          });
          this.$store.dispatch("getCategoris");
        })
        .catch((err) => {});
    },
  },
};
</script>
