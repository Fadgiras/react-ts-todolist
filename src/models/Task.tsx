export default class Task{
    private id: number;
    private name: string;
    private cat: string;
    private date: string;
    private desc: string | null;

    constructor(id: number, name: string, cat: string, date: string, desc: string|null){
        this.id = id;
        this.name = name;
        this.cat = cat;
        this.date = date;
        this.desc = desc;
    }

    getId() : number{
        return this.id
    }

    setId(id: number){
        this.id = id
    }

    getName() : string{
        return this.name
    }

    setName(name: string){
        this.name = name
    }

    getCat() : string{
        return this.cat
    }

    setCat(cat: string){
        this.cat = cat
    }

    getDate() : string{
        return this.date
    }

    setDate(date: string){
        this.date = date
    }

    getDesc() : string{
        return this.desc ? this.desc : "No description provided"
    }

    setDesc(desc: string|null){
        this.desc = desc
    }

    taskKey(){
        return this.id.toString()+this.name+ this.cat+this.date+this.desc
    }

    return() {
    <div>

    </div>
    }
}