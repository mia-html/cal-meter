var app = new Vue ({
    el: "#app",
    data() {
        return {
            newProd: {
                name: '',
                cal: 0,
                fat: 0,
                car: 0,
                pro: 0
            },
            productList: [
                {
                    name: 'potato',
                    cal: 124,
                    fat: 233,
                    car: 56,
                    pro: 93
                },
                {
                    name: 'tomato',
                    cal: 53,
                    fat: 93,
                    car: 89,
                    pro: 37
                },
                {
                    name: 'onion',
                    cal: 93,
                    fat: 32,
                    car: 43,
                    pro: 64
                }
                
            ]
        }
    },
    computed: {
        totalsCalc: function() {
            var totals = {
                cal: 0,
                fat: 0,
                car: 0,
                pro: 0
            }
            for (var i = 0; i < this.productList.length; i++) {
                totals.cal += this.productList[i].cal;
                totals.fat += this.productList[i].fat;
                totals.car += this.productList[i].car;
                totals.pro += this.productList[i].pro;
            }
            return totals;
        }
    },
    methods: {
        addNewProd() {
            this.productList.push(
                {
                    name: this.newProd.name,
                    cal: Number(this.newProd.cal),
                    fat: Number(this.newProd.fat),
                    car: Number(this.newProd.car),
                    pro: Number(this.newProd.pro)
                }
            );
            this.newProd = {};
        },
        removeProd(itemIndex) {
            this.productList.splice(itemIndex, 1);
        },
        dataChanged() {
            console.log(parseInt(this.productList[0].cal));
        }
    }
});