
export default {
    state: {
        categoryData: [],
        brandData: [],
        AllSize:[],
        AllColor:[],
        AllTag:[],
        AllProduct:[],
       
       
    },
    getters: {
        getCategory(state) {
            return state.categoryData;
        },

        getBrand(state) {
            return state.brandData;
        },

        getAllSize(state){
         return state.AllSize;
        },

        getAllColor(state){

            return state.AllColor;
        },

        getAllTag(state){
            return state.AllTag;
        },

        getAllProduct(state){
            return state.AllProduct;
        },


       
    },

    actions: {
        getCategoris(data) {
            axios.get('/admin/category-index')
                .then((result) => {
                    data.commit("Categoris", result.data['cat']);
                }).catch((err) => {

                });

        },

        AllBrands(data) {
            axios.get('/admin/brand-all')
                .then((result) => {
                    // return result.data['brand'];
                    data.commit("Brands", result.data['brand']);
                }).catch((err) => {

                });
        },


        GetAllSize(data){
            axios.get('/admin/size-all')
            .then((result) => {
                // return this.state.AllSize = result.data['size'];
                data.commit("GetSize",result.data['size']);
               
            }).catch((err) => {
                
            });
        },

        GetAllColor(data){
            axios.get('/admin/color-all')
            .then((result) => {

                data.commit("GetColor",result.data['color']);
                
            }).catch((err) => {
                
            });
        },

        GetAllTag(data){
            axios.get('/admin/tag-all')
            .then((result) => {
                data.commit("GetTag",result.data.tag);

            
            }).catch((err) => {
                
            });
        },


        GetAllProduct(data){
            axios.get('/admin/product-all')
            .then((result) => {
                data.commit("GetProduct",result.data['product']);

            
            }).catch((err) => {
                
            });
        },


    
 

    },
    mutations: {
        Categoris(state, data) {
            return state.categoryData = data;
        },

        Brands(state, data) {
            return state.brandData = data;
        },

        GetSize(state,data){
            return state.AllSize = data;
        },

        GetColor(state,data){
            return state.AllColor = data;
        },

        GetTag(state,data){
            return state.AllTag = data;
        },

        GetProduct(state,data){
            return state.AllProduct = data;
        },     
        
        
       
    },
    modules: {},
}
