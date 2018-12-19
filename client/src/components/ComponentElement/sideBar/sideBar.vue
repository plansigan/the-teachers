<template>
    <div>   
            <div class="ui sidebar inverted vertical menu push">
                <div class="ui center aligned segment">
                    <i class="huge users icon"></i>
                    <h2>Admin</h2>
                </div>
                <router-link @click.native="toggleMenu" class="item" to="/Admin/newProduct">
                    <i class="plus square outline icon"></i>
                    Create new Product
                </router-link>
                <router-link @click.native="toggleMenu" class="item" to="/Admin/products">
                    <i class="th list icon"></i>
                    Product List
                </router-link>
            </div>
    </div>
</template>

<script>
    export default {
        methods:{
            toggleMenu() {
                $('.ui.sidebar')
                .sidebar('toggle')
            },  
            toggleModalMessage(){
                $('.mini.modal')
                    .modal('show')
                ;
            }
        }
    }
</script>
