let ProductTypeService = require('@/services/ProductTypeService');


//use this function if there's a function that's needs to be run again and again every execution
let productTypeFn = {
    getType(){
        ProductTypeService.default.fetchTypes().then((response)=>{
            state.productTypes = response.data.types
            state.filteredProducts = response.data.types
        })
    },
}


const state = {
    productTypes:[],
    newType:[],
    filterName:'',
    filteredProducts:[],
    error:''
};

const mutations = {
    'GET_TYPE'(){
        productTypeFn.getType()
    },
    'MANAGE_TYPE'(){
        $('#manageTypeModal').modal('show')
    },
    'ADD_TYPE'(state){
        if(state.newType.name == undefined){
            state.error = 'please provide a name for the type'
            return false
        } else if(!state.newType.name.replace(/\s/g, '').length){
            state.error = 'The name only contains spaces please add a proper type name.'
        } else {
            ProductTypeService.default.addTypes({
                name: state.newType.name,
            }).then(()=>{
                alert(`${state.newType.name} has been successfully added`);
                productTypeFn.getType()
            }).catch( err => alert('something went wrong with the database.',err))
        }
    },
    'FILTER_TYPE'(state){
        state.filteredProducts = state.productTypes.filter(type => {
            return type.name.toLowerCase().indexOf(state.filterName.toLowerCase()) > -1
        })
    },
    'DELETE_TYPE'(state,typeId){
        if(confirm('Are you sure you want to delete this type ?')){
            ProductTypeService.default.deleteType(typeId).then((response)=>{
                console.log(response);
                alert(response.data)
                productTypeFn.getType()
            })      
        }
    }
};

const actions = {
    getType({commit}){
        commit('GET_TYPE');
    },
    manageType({commit}){
        commit('MANAGE_TYPE');
    },
    addType({commit},newType){
        commit('ADD_TYPE')
        commit('GET_TYPE');
    },
    filterType({commit},name){
        state.filterName = name
        commit('FILTER_TYPE',name);
    },
    deleteType({commit},typeId){
        commit('DELETE_TYPE',typeId)
        
    }
};

const getters = {
    newType: state => {
        return state.newType
    },
    productTypes: state => {
        return state.productTypes;
    },
    filteredProducts: state => {
        return state.filteredProducts
    },
    error: state => {
        return state.error
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};