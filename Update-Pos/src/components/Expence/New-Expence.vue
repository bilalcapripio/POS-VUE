<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2 mb-5">
                            
                                <!---Start Third card shop-->
                                <h2 class="text-md ml-4 pt-3"><span class="text-lg"> Expence</span>   Add/ <small class="text-gray text-sm"><span>Update Expence</span></small></h2>
                                <!-- alert start -->
                                <div class="content-header">
                                    <div class="container-fluid">
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true" class="text-white">&times;</span>
                                        </button>
                                    </div>
                                    </div>
                                </div>                  
                                <!-- alert end -->
                                <!---Start  Print Card -->
                                <div class="container-fluid">
                                    <div class="card">
                                        <form @submit.prevent="postData">
                                        <div class="card-header display-5">
                                            Please Enter Valid Data
                                        </div>
                                        <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-7 p-4">
                                                    <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Expense Date*</label>
                                                    <div class="col-sm-10">
                                                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                                            <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                            </div>
                                                            <input type="date" class="form-control pull-right datepicker" id="expense_date" name="expense_date" v-model="posts.date">                                     
                                                            </div>  
                                                    </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Category*</label>
                                                        <div class="col-sm-10">
                                                                <select v-model="posts.category" class="form-control select2 select2-hidden-accessible" id="category_id" name="category_id" style="width: 100%;">
                                                                    <option value="">-Select-</option>
                                                                    <option :value="data.id" v-for="data in categoryData" v-bind:key="data.id">
                                                                        {{data.category_name}}
                                                                    </option>
                                                                </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Expense for*</label>
                                                        <div class="col-sm-10">
                                                        <input type="text" class="form-control" v-model="posts.expence_for" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Amount*</label>
                                                        <div class="col-sm-10">
                                                        <input type="text" class="form-control" v-model="posts.amount" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                            <div class="col-md-5 p-4">
                                           
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Refrence No</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" v-model="posts.refNo" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Note</label>
                                                        <div class="col-sm-10">
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="posts.note" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="group d-flex justify-content-center align-items-center mx-auto">
                                                <button class="btn btn-success w-25">Save</button>
                                                &nbsp;
                                                <button class="btn btn-warning w-25">Close</button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                    
                                </div>

                                <!--End  Print Card-->
                        
                        </div>
                    <!-- /.content-wrapper -->
                        <Footer/>
                        <Sidebar/>

            </div>
        </body>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'
import axios from 'axios'

export default {
    name:'',
    data(){
        return{
            categoryData:[],
            posts:{
                date:'',
                category:'',
                expence_for:'',
                amount:'',
                refNo:'',
                note:'',
                created_by:'admin'
            }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        this.getcategoryData()
    },
    methods:{
            getcategoryData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/expence_category")
                // return promise
            .then((res)=>{
                this.categoryData=res.data;
                console.log(res.data);
            })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },

        postData: function(e){
            confirm('Do You Wants to Save Record ?')
            const formdata = new FormData();
            formdata.append('date',this.posts.date),
            formdata.append('category',this.posts.category),
            formdata.append('expense_for',this.posts.expence_for),
            formdata.append('amount',this.posts.amount),
            formdata.append('reference_no',this.posts.refNo),
            formdata.append('description',this.posts.note),
            formdata.append('created_by',this.posts.created_by),
                // this.formdata = { headers: { 'Content-Type': 'multipart/formdata' } }
            axios.post("http://192.168.100.9/Project_Laravel/public/api/expence",formdata)
                // return promise
            .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
                // show data [testing]
            console.table(this.posts);
                // submit data without page reload 
            e.preventDefault();
        },
    },

    

}
</script>