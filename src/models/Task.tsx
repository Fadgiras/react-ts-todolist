export default class Task{
    private id: number;
    private nom: string;
    private cat: string;
    private date: string;

    // maybe add desc field
    constructor(id: number, nom: string, cat: string, date: string){
        this.id = id,
        this.nom = nom,
        this.cat = cat,
        this.date = date
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

    getDate() : string{
        return this.date
    }

    setDate(date: string){
        date = this.date
    }

    return() {
    <div>

    </div>
    }
}