<template>
    <div>
        <nav class=" navbar navbar-expand-lg navbar-primary navbar-dark">
            <!-- Left navbar links -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item pl-5 pt-2 text-light">
                        <a href="/" class="text-light">
                            <h5>Ultimate Inventory with POS</h5>
                        </a>   
                    </li>
                    <!-- <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">POS</a>
                    </li> -->
                    <li class="nav-item pl-3">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="fa fa-list text-yellow"></i>
                            Sales List
                        </a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="fa fa-calculator text-yellow "></i>
                            New Invoice
                        </a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="fa  fa-cubes text-yellow "></i>
                            Item List
                        </a>
                    </li>
                </ul>
                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">         
                    <!--Start  Modal -->
                        <!-- Button trigger modal -->
                        <a class="btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal">
                            <i class="fa fa-laptop"></i>
                            Hold List
                            <span class="badge badge-danger">0</span>
                        </a>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Hold List</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-bordered">
                                        <thead class="thead bg-primary">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Ref:ID</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <p class="text-danger">Not Found</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    <!--End  Modal -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="fa fa-dashboard"></i>
                            Dashboard
                        </a>
                    </li>


                    <li class="dropdown user user-menu open mt-2 ml-2">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <img src="@/assets/Img/admin.png" class="user-image" alt="User Image">
                        <span class="hidden-xs text-light">Admin</span>
                        </a>

                        <ul class="dropdown-menu bg-gradient-navy rounded">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="@/assets/Img/admin.png" class="img-circle img-fluid" alt="User Image">
                                <p>Admin<small>Year 2021</small> </p>
                        </li>
                        <!-- Menu Body -->
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                            <a href="#" class="btn btn-primary btn-flat">Profile</a>
                            </div>
                            <div class="pull-right">
                            <a href="Logout.html" class="btn btn-danger btn-flat">Sign out</a>
                            </div>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>   

<!-- //////////////////----End Navbar----//////////////////  -->
        <main>
 <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-md-7">
                    <div class="container-fluid pt-2">
                        <div class="card border-top border-primary">
                            <div class="card-header">                                                                      
                                <h5 class="">
                                    <i class="box-title text-primary fa fa-shopping-cart text-aqua"></i>
                                    Sales Invoice
                                </h5>
                                <div class="border-top">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user input-group-text"></i>
                                                </div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Walk-in-Customer</option>
                                                    <option value="">John p</option>
                                                    <option value="">Chris Moris</option>   
                                                    <option value="">Joe Root</option>
                                                    <option value="">John p</option>
                                                    <option value="">Chris Moris</option>   
                                                    <option value="">Joe Root</option>
                                                </select>
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user-plus text-primary fa-lg input-group-text"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-barcode input-group-text"></i>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Item name/Barcode/Itemcode">
                                            </div>
                                        </div>
                                    </div>
                                        <div class="box-body mt-4 border border-primary" style="width:100%; height:300px">
                                            <div class="table-responsive p-1" style="width: 100%">
                                                <div class="col-sm-12" style="overflow-y: auto;height: 291px;">
                                                    <table class="table table-bordered table-striped table-responsive">
                                                        <thead class="bg-primary">
                                                            <tr>
                                                                <th width="30%">Item Name</th>
                                                                <th width="10%">Stock</th>
                                                                <th width="25%">Quantity</th>
                                                                <th width="15%">Price</th>
                                                                <!-- <th width="10%">Discount</th> -->
                                                                <th width="10%">Tax</th>
                                                                <th width="15%">Subtotal</th>
                                                                <th width="5%"><i class="fa fa-close"></i></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style="font-size: 16px;font-weight: bold;overflow: scroll;">
                                                            <!-- body code -->
                                                            <tr v-for="(content , index) in tableRows" v-bind:key="content.id">
                                                                <td>
                                                                    <button class="fa fa-edit pointer" @click="edit = !edit">
                                                                        &nbsp;
                                                                        <a title="" class="pointer text-bold">Rado Watch </a> 
                                                                    </button>
                                                                    </td>
                                                                <td>54.00</td>
                                                                <td>
                                                                    <div class="input-group input-group-sm">
                                                                        <span class="input-group-btn">
                                                                            <button  type="button" class="btn btn-default btn-flat" @click="ProRem">
                                                                            <i class="fa fa-minus text-danger"></i>
                                                                            </button>
                                                                        </span>
                                                                        <!-- start count result -->
                                                                        <!-- <input type="" class="form-control"> -->
                                                                        <input type="text" v-model="incre"  class="form-control no-padding text-center" style="padding:18px">
                                                                        <!--end count result -->
                                                                        <span class="input-group-btn">
                                                                            <button type="button" class="btn btn-default btn-flat" @click="ProAdd">
                                                                                <i class="fa fa-plus text-success"></i>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td class="text-right"  name="Price">
                                                                    <input  type="text" class="form-control no-padding min_width" value="20768.00">
                                                                </td>
                                                                <td>
                                                                    <input  title="" type="text" class="form-control no-padding pointer">
                                                                </td>
                                                                <td  class="text-right">
                                                                    <input type="text" class="form-control no-padding pointer">
                                                                </td>
                                                                <td @click='deleteTableRow(index)' >
                                                                    <a class="fa fa-fw fa-trash-o text-red" style="cursor: pointer;font-size: 20px;"></a>
                                                                </td>
                                                            </tr> 
                                                        </tbody>        
                                                    </table>
                                                </div>
                                            </div>
                                        </div>  
                                    <div class="row mt-4">
                                        <div class="col-md-1 col-6">
                                            <!-- <div class="d-flex align-items-center mx-auto"> -->
                                                <input type="checkbox" disabled name="" class="form-control" id="check">
                                            <!-- </div> -->
                                        </div>
                                        <div class="col-md-4 col-6 pt-2">
                                            <label for="check">Send SMS to Customer <i class="fa fa-info-circle text-maroon text-black hover-q"></i></label>
                                        </div>
                                        <div class="offset-md-3 col-6 col-md-2 pt-2">
                                            <label for="#check">Other Charges*</label>
                                        </div>
                                        <div class="col-md-2 col-6">
                                             <input type="text" name="" placeholder="0.00" class="text-right form-control" id="check">
                                        </div>
                                    </div>
                                    <div class="mt-4 bg-light p-2 cost">
                                        <div class="row">
                                            <div class="col-md-4 text-right">
                                                <b>Quantity:</b>
                                                <br>
                                                 <span class="text-primary text-bold">0</span>
                                            </div>
                                            <div class="col-md-4 text-right">
                                                <b>Total Amount:</b>
                                                <br>
                                                <span class="text-primary text-bold">0.00</span>
                                            </div>    
                                            <!-- <div class="col-md-3 text-right">
                                                <b>Total Discount:</b>
                                                <br>
                                                <span class="text-primary text-bold">0.00</span>
                                            </div>     -->
                                            <div class="col-md-4 text-right">
                                                <b>Grand Total:</b>
                                                <br>
                                                <span class="text-primary text-bold">0.00</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn bg-maroon btn-block btn-flat btn-lg"> <i class="fa fa-hand-paper-o"></i> Hold</button>
                                            </div>
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-primary btn-block btn-flat btn-lg"> <i class="fa fa-credit-card"></i> Multiple</button>
                                            </div>
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-success btn-block btn-flat btn-lg"> <i class="fa fa-money"></i> Cash</button>
                                            </div>
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn bg-purple btn-block btn-flat btn-lg"> <i class="fa fa-money"></i> PayAll</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="container-fluid pt-2">
                        <div class="card border-top border-primary">
                            <div class="card-header">                                                                      
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <select name="" id="" class="form-control">
                                                    <option value="">All Categories</option>
                                                    <option value="">Watches</option>
                                                    <option value="">Adidas</option>
                                                    <option value="">Nike</option>
                                                    <option value="">Watches</option>
                                                    <option value="">Adidas</option>
                                                    <option value="">Nike</option>
                                                    <option value="">Watches</option>
                                                    <option value="">Adidas</option>
                                                    <option value="">Nike</option>
                                                    <option value="">Watches</option>
                                                    <option value="">Adidas</option>
                                                    <option value="">Nike</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <input type="text" class="form-control" placeholder=" Filters Items">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-primary">All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="overflow-y: scroll;min-height: 100px;height: 600px; overflow-x:hidden">
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>$ 20,00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Armani Jacket
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border rounded">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;" @click='addTableRow()'>
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;">
                                                <div class="box box-default bg-success border rounded" >
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-6" style="cursor: pointer;">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/logo2.png" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="cursor: pointer; color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableRows:[],
            counter:0,
            incre:0,
            edit : true

        }
    },
    
    methods: {
            addTableRow: function () { 
            this.counter++;
            this.tableRows.push("Table Row "+this.counter);
            },
            // alert('Vue js')
            deleteTableRow: function (idx) { 
                this.counter--;
                this.tableRows.splice(idx, 1);      
            },
            ProAdd(){
                this.incre++;
            },

    }
    
}
</script>
<style scoped>
    @media(max-width: 360px){
        .navbar-nav li{
            text-align: center;
            padding: 10px;
        }
        .user-image{
            display:none;
        }
        .cost .row{
            text-align: center !important;
            clear: none;
        }
    }
</style>