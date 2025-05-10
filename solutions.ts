{


    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === true || toUpper === undefined) {
            return input.toUpperCase();
        }
        return input.toLowerCase();
    }



    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let resultArr: T[] = []
        const copyArr = [...arrays]
        copyArr.forEach(element => {
            resultArr = resultArr.concat(element)
        })
        return resultArr;
    }



    class Vehicle {
        private make: string;
        year: number;
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }

        getModel() {
            console.log(`Model: ${this.model}`)
        }

    }


    function checkType(value: string | number): number {
        if (typeof value === 'string') {
            return value.length
        }
        return value * 2
    }

    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }
        const sortedProducts = products.sort((a, b) => b.price - a.price)
        const result = sortedProducts[0]
        return result
    }

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day === Day.Friday) {
            return 'Weekend'
        }
        else {
            return 'Weekday'
        }
    }

    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject('Error: Negative number not allowed')
            }
            setTimeout(() => {
                resolve(n * n)
            }, 1000)
        })
    }



}