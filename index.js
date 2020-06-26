new Vue({
    el:'#app',
    data:{
        characters:['e','b'],
        notes:[],
    },
    mounted(){
        db.collection('notes').orderBy('date','desc').onSnapshot(snapshot=>{
        let notes = []
            snapshot.docs.map(doc=>{
                notes.push({...doc.data(),id:doc.id})
            })
        this.notes= notes
        })

    },
    methods:{
        addNote:function(e){
            e.preventDefault()
            if(e.target['note'].value!==''){
                db.collection('notes').add({
                    title:e.target['title'].value,
                    note:e.target['note'].value,
                    date:new Date()
                })
                .then(doc=>{
                    e.target.reset()
                })
            }
        },

        deleteNote:function(id){
            db.collection('notes').doc(id).delete()
        }
    }
})