Vue.component('message',{
    props:['title','body'],
    data(){
        return{
            isVisible:true
        }
    },
    template:`
    <div>
        <article class="message container" v-show="isVisible">
            <div class="message-header">
            {{title}}
            <button class="button is-danger" @click="isVisible=false">Close</button>
            </div>
            <div class="message-body">
            {{body}}
            </div>
        </article>    
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>Dummy Text</p>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
`,
        // methods:{
        // remove(){
        //     this.isVisible=false
        // }
        //}
})
new Vue({
    data:{
        hidden:false
    }
}).$mount('#root');