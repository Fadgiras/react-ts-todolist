export default class Category{
    private id: number;
    private nom: string;
    private cat: string;

    constructor(id: number, nom: string, cat: string){
        this.id = id,
        this.nom = nom,
        this.cat = cat
    }
    
    getId() : number{
        return this.id
    }

    setId(id: number){
        id = this.id
    }

    getNom() : string{
        return this.nom
    }

    setNom(nom: string){
        nom = this.nom
    }

    getCat() : string{
        return this.cat
    }

    setCat(cat: string){
        cat = this.cat
    }
}

