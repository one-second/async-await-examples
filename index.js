// any kind of promised based http library
var httpLib = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, 500);
    })
}


class MyClass {

    constructor() {
        console.log('constructor called');
    }

    async initWithAsyncAwait() {

        const a = await this.getDataA();
        console.log('2) [getDataA] - finished');

        const b = await this.getDataB()
        console.log('4) [getDataB] - finished');

        const c = await this.getDataC()
        console.log('6) [getDataC] - finished');

    }

    initWithPromises() {
        return new Promise((resolve, reject) => {

            this.getDataA().then(a => {
                console.log('2) [getDataA] - finished');
                this.getDataB().then(b => {
                    console.log('4) [getDataB] - finished');
                    this.getDataC().then(c => {
                        console.log('6) [getDataC] - finished');
                        return resolve();
                    });
                })
            })
        })

    }

    getDataA() {
        console.log('1) [getDataA] - start');
        return httpLib()
    }

    getDataB() {
        console.log('3) [getDataB] - start');
        return httpLib()
    }

    getDataC() {
        console.log('5) [getDataC] - start');
        return httpLib()
    }

}

const c = new MyClass();

/*
c.initWithPromises().then(() => {
    console.log('finished')
});
*/

c.initWithAsyncAwait().then(() => {
    console.log('finished')
})


/*
EXTRA: 

async initWithAsyncAwait() {

    const a = this.getDataA();
    const b = this.getDataB()
    const c = this.getDataC()

    const all = await [a,b,c];
    console.log('all finished');

}


*/