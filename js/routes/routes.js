let home = require('../components/backend/home.vue').default;

//----------------Category Component------

let CategoryManage = require('../components/backend/category/manage.vue').default;
let CategoryCreate = require('../components/backend/category/create.vue').default;
let CategoryEdit = require('../components/backend/category/edit.vue').default;

//--------------------brand manage-----------

let BrandCreate = require('../components/backend/brand/create.vue').default;
let BrandManage = require('../components/backend/brand/manage.vue').default;
let BrandEdit = require('../components/backend/brand/edit.vue').default;


//--------------------Size manage-----------
let SizeCreate = require('../components/backend/size/create.vue').default;
let SizeManage = require('../components/backend/size/manage.vue').default;
let SizeEdit = require('../components/backend/size/edit.vue').default;

//--------------------Color manage-----------
let ColorCreate = require('../components/backend/color/create.vue').default;
let ColorManage = require('../components/backend/color/index.vue').default;
let ColorEdit = require('../components/backend/color/edit.vue').default;

//--------------------Tag manage-----------
let TagCreate = require('../components/backend/tag_manage/create.vue').default;
let TagManage = require('../components/backend/tag_manage/index.vue').default;
let TagEdit = require('../components/backend/tag_manage/edit.vue').default;

//--------------------Product manage-----------
let ProductCreate = require('../components/backend/product/create.vue').default;
let ProductManage = require('../components/backend/product/index.vue').default;
let ProductEdit = require('../components/backend/product/edit.vue').default;


//------------Client Site ----------

let client = require('../components/fontend/home.vue').default;
let about = require('../components/fontend/about.vue').default;
let contact = require('../components/fontend/contact.vue').default;
let categoryPost = require('../components/fontend/category_post.vue').default;
let BrandPost = require('../components/fontend/brand_post.vue').default;
let post_details = require('../components/fontend/post_details.vue').default;
let SearchPage = require('../components/fontend/search.vue').default;

//------------------Common Page------------------

let myAccount = require('../components/fontend/common/my_account.vue').default;
let OrderHistory = require('../components/fontend/common/order_history.vue').default;
let Faq = require('../components/fontend/common/faq.vue').default;
let Spacial = require('../components/fontend/common/spacial.vue').default;
let helpCenter = require('../components/fontend/common/help_center.vue').default;
let customeService = require('../components/fontend/common/customer_service.vue').default;
let Company = require('../components/fontend/common/company.vue').default;
let Relatoin = require('../components/fontend/common/relation.vue').default;
let AdvanceSearch = require('../components/fontend/common/advance_search.vue').default;
let Shopping = require('../components/fontend/common/shopping.vue').default;
let Blog = require('../components/fontend/common/blog.vue').default;

export const routes = [
    { path: '/home', component: home, name:'home' },

    //------------Category Manage--------
     { path: '/category_manage', component: CategoryManage, name:'category_manage' },
     { path: '/category_create', component: CategoryCreate, name:'category_create' },
     { path: '/category_edit/:id', component: CategoryEdit, name:'category_edit' },

     //--------------brand manage-----------

     { path: '/brand_manage', component: BrandManage, name:'brand_manage' },
     { path: '/brand_create', component: BrandCreate, name:'brand_create' },
     { path: '/brand_edit/:id', component: BrandEdit, name:'brand_edit' },

     //--------------size manage-----------
     { path: '/size_manage', component: SizeManage, name:'size_manage' },
     { path: '/size_create', component: SizeCreate, name:'size_create' },
     { path: '/size_edit/:id', component: SizeEdit, name:'size_edit' },

     //--------------color manage-----------
     { path: '/color_manage', component: ColorManage, name:'color_manage' },
     { path: '/color_create', component: ColorCreate, name:'color_create' },
     { path: '/color_edit/:id', component: ColorEdit, name:'color_edit' },

      //--------------Tag manage-----------
      { path: '/tag_manage', component: TagManage, name:'tag_manage' },
      { path: '/tag_create', component: TagCreate, name:'tag_create' },
      { path: '/tag_edit/:id', component: TagEdit, name:'tag_edit' },

       //--------------product manage-----------
       { path: '/product_manage', component: ProductManage, name:'product_manage' },
       { path: '/product_create', component: ProductCreate, name:'product_create' },
       { path: '/product_edit/:id', component: ProductEdit, name:'product_edit' },

    // { path: '/bar', component: Bar }

    //------------Client Site ----------

    { path: '/', component: client, name:'/' },
    { path: '/about', component: about, name:'about' },
    { path: '/contact', component: contact, name:'contact' },
    { path: '/search/:searchString', component: SearchPage, name:'sear', props: true },
    { path: '/category_post/:id', component: categoryPost, name:'category_post' },
    { path: '/brand_post/:id', component: BrandPost, name:'brand_post' },
    { path: '/post_details/:id', component: post_details, name:'post_details' },

    //-----------------Common Page------------
    { path: '/my_account', component: myAccount, name:'my_account' },
    { path: '/order-history', component: OrderHistory, name:'order-history' },
    { path: '/faq', component: Faq, name:'faq' },
    { path: '/spacial', component: Spacial, name:'spacial' },
    { path: '/help_center', component: helpCenter, name:'help_center' },
    { path: '/customer_service', component: customeService, name:'customer_service' },
    { path: '/company', component: Company, name:'company' },
    { path: '/relation', component: Relatoin, name:'relation' },
    { path: '/advance_search', component: AdvanceSearch, name:'advance_search' },
    { path: '/shopping', component: Shopping, name:'shopping' },
    { path: '/blog', component: Blog, name:'blog' },

  ]


