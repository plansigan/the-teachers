let siteService = require('@/services/siteService');


//use this function if there's a function that's needs to be run again and again every execution
let siteFn = {
    getSite(){
        siteService.default.fetchSites().then((response)=>{
            state.sites = response.data.sites
            state.filteredSites = response.data.sites
        })
    },
}


const state = {
    sites:[],
    newSite:[{name:"",live:true}],
    filterName:'',
    filteredSites:[],
    siteError:''
};

const mutations = {
    'GET_SITE'(){
        siteFn.getSite()
    },
    'ADD_SITE'(state){
        if(state.newSite.name == undefined){
            state.siteError = 'please provide a name for the new website'
            return false
        } else if(!state.newSite.name.replace(/\s/g, '').length){
            state.siteError = 'The name only contains spaces please add a proper site name.'
        } else {
            siteService.default.addSite({
                name: state.newSite.name,
                live:state.newSite.live
            }).then(()=>{
                alert(`${state.newSite.name} has been successfully added`);
                siteFn.getSite()
                state.newSite = [{name:"",live:true}]
            }).catch( err => alert('something went wrong with the database.',err))
        }
     },
    'FILTER_SITE'(state){
        state.filteredSites = state.sites.filter(site => {
            return site.name.toLowerCase().indexOf(state.filterName.toLowerCase()) > -1
        })
    },
    'DELETE_SITE'(state,siteId){
        if(confirm('Are you sure you want to delete this site ?')){
            siteService.default.deleteSite(siteId).then((response)=>{
                console.log(response);
                alert(response.data)
                siteFn.getSite()
            })      
        }
    },
    'UPDATE_LIVE'(state,site){
        siteService.default.updateSite({
            name:site.name,
            live:site.live
        },site._id).then((response)=>{
            siteFn.getSite()
        })
    }
};

const actions = {
    getSite({commit}){
        commit('GET_SITE');
    },
    addSite({commit},newType){
        commit('ADD_SITE')
    },
    filterSite({commit},name){
        state.filterName = name
        commit('FILTER_SITE',name);
    },
    deleteSite({commit},siteId){
        commit('DELETE_SITE',siteId)
    },
    updateLive({commit},site){
        commit('UPDATE_LIVE',site)
    }
};

const getters = {
    newSite: state => {
        return state.newSite
    },
    sites: state => {
        return state.sites;
    },
    filteredSites: state => {
        return state.filteredSites
    },
    siteError: state => {
        return state.siteError
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};