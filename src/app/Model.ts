export default class Model {
    private data: any;


    constructor(data: any) {
        this.data = data;
    }

    public getData(key: string) {
        if (key == 'all') return this.data;
        return this.data[key];
    }

}

