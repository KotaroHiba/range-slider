export default class Model {
    private data: any;

    constructor(data: any) {
        this.data = data;
    }

    public getData(key: string) {
        if (key == 'all') return this.data;
        return this.data[key];
    }

    private dataCheck() {
        let data = this.data;
        if (data.value <= 0 || data.step > data.value || data.max < data.min) return false;
        return true;
    }
}

