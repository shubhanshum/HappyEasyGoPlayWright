class DataHelper{

    static map=new Map();
    

    static setData(key, value){
        this.map.set(key, value);
    }

    static getData(key){
        let data=this.map.get(key);
        return data;
    }

}
module.exports = { DataHelper };

