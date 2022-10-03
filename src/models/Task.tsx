export default class Task{
    private id: number;
    private name: string;
    private cat: string;
    private date: string;
    private desc: string | null;

    // maybe add desc field
    constructor(id: number, name: string, cat: string, date: string, desc: string|null){
        this.id = id,
        this.name = name,
        this.cat = cat,
        this.date = date,
        this.desc = desc
    }

    getId() : number{
        return this.id
    }

    setId(id: number){
        id = this.id
    }

    getName() : string{
        return this.name
    }

    setName(name: string){
        name = this.name
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

    getDesc() : string|null{
        return this.desc
    }

    setDesc(desc: string|null){
        desc = this.desc
    }

    return() {
    <div>

    </div>
    }
}