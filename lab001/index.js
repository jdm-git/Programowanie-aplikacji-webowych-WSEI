class MathApp{
    constructor() {
        // this.getInputs();
        // this.watchInputValues();
    }
    getInputs(){
        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');
    }

}

const app = new MathApp();

app.getInputs();