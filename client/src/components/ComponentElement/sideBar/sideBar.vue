<template>
    <div>
            <div class="ui very wide sidebar visible inverted vertical menu">
                <router-link class="item" to="/Main/newProduct">
                    <i class="plus square outline icon"></i>
                    Create new Product
                </router-link>
                <router-link class="item" to="/Main/products">
                    <i class="th list icon"></i>
                    Product List
                </router-link>
            </div>
            <div class="pusher">
                <!-- Site content !-->
            </div>
    </div>
</template>

<script>
    export default {}
</script>
