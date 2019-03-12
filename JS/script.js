

var monVue = new Vue({
    el:"#content",
    data: {
        database,
        titres :{
            Nom : "nom",
            Entreprise : "entreprise",
            Age: "age"
        },
        search:""
    },
    computed:{
        filtreNom() {
          return this.database.filter(adherent => {
            return adherent.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }


})
