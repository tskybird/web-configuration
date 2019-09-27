<template>
    <a class="btn btn-link refresh-btn float-right">
        <font-awesome-icon icon="sync-alt" :class="{'fa-spin': this.spin}"></font-awesome-icon>
    </a>
    
</template>

<script>
export default {
    name: 'RefreshSpinner',
    props: [ 'spin','click' ],
    data() {
        return {
            start: 0
        }
    },   
    watch: {
        spin () {            
            let minSpinTime = 500  //ms           
            if (this.spin) {
                this.start = Date.now()               
                return true                
            }else{            
                if(this.start && (Date.now() - this.start) > 500) {                    
                    return false
                } else {                    
                    setTimeout(function(){                        
                        return false
                    }, minSpinTime)
                }
            }
        }
    }
}
</script>

<style scoped>
h2 .refresh-btn {
    line-height: inherit;
    padding: 0 4px;
}

</style>