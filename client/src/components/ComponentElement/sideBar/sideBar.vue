<template>
    <div>   
            <div class="ui sidebar inverted vertical menu push">
                <div class="ui center aligned segment">
                    <i class="huge users icon"></i>
                    <p>Welcome!</p>
                    <h2>{{username}}</h2>
                </div>
                <router-link @click.native="toggleMenu" class="item" to="/admin/newProduct">
                    <i class="plus square outline icon"></i>
                    Create new Product
                </router-link>
                <router-link @click.native="toggleMenu" class="item" to="/admin/products">
                    <i class="th list icon"></i>
                    Product List
                </router-link>
                <router-link @click.native="toggleMenu" class="item" to="/admin/Site">
                    <i class="sitemap icon"></i>
                    Manage sites
                </router-link>
            </div>
            <div></div>
    </div>
</template>

<script>
    import Site from '@/components/Site/Site.vue'
    export default {
        components:{
            Site
        },
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
        },
        computed:{
            username(){
                return this.$store.getters.user.username
            }
        }
    }
</script>
