export default {
    state: {
        AllActiveCategory:[],
        AllActiveBrand:[],
        laravelData:[],
       
    },

    getters: {
        getAllActiveCategory(state){
            return state.AllActiveCategory;
        },

        getAllActiveBrand(state){
            return state.AllActiveBrand;
        },

        getAllPostViewClientSite(state){
            return state.laravelData;
        },
        

        
    },

    actions: {
        GetAllActiveCategory(data){
            axios.get('/active-category-view')
            .then((result) => {
               
                data.commit("GetActiveCategory",result.data['cat']);

            
            }).catch((err) => {
                
            });
        },

        GetAllActiveBrand(data){
            axios.get('/active-brand-view')
            .then((result) => {
               
                data.commit("GetActiveBrand",result.data['cat']);

            
            }).catch((err) => {
                
            });
        },

        GetAllPostViewClientSite(data,currentPage){
            axios.get('/all-post-client-site?page=' + currentPage)
            .then((result) => {
                
                data.commit("GetAllPostClientSite",result.data['post']);

            
            }).catch((err) => {
                
            });
        },

      


    },

    mutations: {
        GetActiveCategory(state,data){
            return state.AllActiveCategory = data;
        },
        
        GetActiveBrand(state,data){
            return state.AllActiveBrand = data;
        },
        
        GetAllPostClientSite(state,data){
            return state.laravelData = data;
        }, 
        
        
    }
}