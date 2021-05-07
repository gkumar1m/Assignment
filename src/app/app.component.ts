import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Barista Invoice';
    ModalHeader = 'Itemised bill';
    public data: any;
    public coffeprice: number;
    public order: any;
    public payment: any;
    public prices: any;
    public allOrderWithPrice = [];
    public allOrderPrice = [];
    public groupAllOrderPrice = [];
    public groupAllPaidAmount = [];
    public sumAllprice = [];
    public finalUserList = [];
    public operator: string;
    public error: {};
    public sname: string = 'user';
    public svalue: string = 'coach';


    constructor(
        private usersSerivce: UsersService,
        private modalService: NgbModal) { }

    ngOnInit() {
        // this.getalldata(); //to get json data manually
        this.getOrder();
    }

    getalldata() {
        this.order = [
            {
                "user": "coach",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "ellis",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "coach",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "zoey",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "zoey",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "nick",
                "drink": "mocha",
                "size": "large"
            },
            {
                "user": "bill",
                "drink": "supermochacrapucaramelcream",
                "size": "ultra"
            },
            {
                "user": "ellis",
                "drink": "mocha",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "mocha",
                "size": "medium"
            },
            {
                "user": "coach",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "bill",
                "drink": "mocha",
                "size": "medium"
            },
            {
                "user": "ellis",
                "drink": "mocha",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "mocha",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "zoey",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "ellis",
                "drink": "latte",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "zoey",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "zoey",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "rochelle",
                "drink": "supermochacrapucaramelcream",
                "size": "large"
            },
            {
                "user": "coach",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "francis",
                "drink": "mocha",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "supermochacrapucaramelcream",
                "size": "huge"
            },
            {
                "user": "ellis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "latte",
                "size": "small"
            },
            {
                "user": "nick",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "latte",
                "size": "large"
            },
            {
                "user": "coach",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "rochelle",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "bill",
                "drink": "latte",
                "size": "large"
            },
            {
                "user": "rochelle",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "coach",
                "drink": "mocha",
                "size": "large"
            },
            {
                "user": "bill",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "francis",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "bill",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "bill",
                "drink": "supermochacrapucaramelcream",
                "size": "huge"
            },
            {
                "user": "ellis",
                "drink": "supermochacrapucaramelcream",
                "size": "ultra"
            },
            {
                "user": "rochelle",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "mocha",
                "size": "large"
            },
            {
                "user": "coach",
                "drink": "supermochacrapucaramelcream",
                "size": "large"
            },
            {
                "user": "nick",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "bill",
                "drink": "mocha",
                "size": "medium"
            },
            {
                "user": "ellis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "nick",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "zoey",
                "drink": "supermochacrapucaramelcream",
                "size": "ultra"
            },
            {
                "user": "louis",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "louis",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "nick",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "louis",
                "drink": "mocha",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "coach",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "francis",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "louis",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "bill",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "zoey",
                "drink": "latte",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "zoey",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "ellis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "flat white",
                "size": "medium"
            },
            {
                "user": "ellis",
                "drink": "supermochacrapucaramelcream",
                "size": "large"
            },
            {
                "user": "nick",
                "drink": "latte",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "nick",
                "drink": "mocha",
                "size": "medium"
            },
            {
                "user": "louis",
                "drink": "latte",
                "size": "large"
            },
            {
                "user": "louis",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "francis",
                "drink": "supermochacrapucaramelcream",
                "size": "mega"
            },
            {
                "user": "zoey",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "francis",
                "drink": "latte",
                "size": "medium"
            },
            {
                "user": "coach",
                "drink": "flat white",
                "size": "small"
            },
            {
                "user": "coach",
                "drink": "supermochacrapucaramelcream",
                "size": "large"
            },
            {
                "user": "ellis",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "louis",
                "drink": "flat white",
                "size": "medium"
            },
            {
                "user": "bill",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "nick",
                "drink": "flat white",
                "size": "large"
            },
            {
                "user": "zoey",
                "drink": "mocha",
                "size": "large"
            },
            {
                "user": "rochelle",
                "drink": "long black",
                "size": "medium"
            },
            {
                "user": "zoey",
                "drink": "latte",
                "size": "small"
            },
            {
                "user": "rochelle",
                "drink": "short espresso",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "mocha",
                "size": "large"
            },
            {
                "user": "bill",
                "drink": "long black",
                "size": "small"
            },
            {
                "user": "francis",
                "drink": "supermochacrapucaramelcream",
                "size": "ultra"
            },
            {
                "user": "rochelle",
                "drink": "supermochacrapucaramelcream",
                "size": "large"
            },
            {
                "user": "ellis",
                "drink": "supermochacrapucaramelcream",
                "size": "ultra"
            },
            {
                "user": "nick",
                "drink": "supermochacrapucaramelcream",
                "size": "huge"
            }
        ]

        this.payment = [
            { "user": "coach", "amount": 27 },
            { "user": "rochelle", "amount": 22 },
            { "user": "bill", "amount": 41 },
            { "user": "zoey", "amount": 0 },
            { "user": "bill", "amount": 36 },
            { "user": "nick", "amount": 48 },
            { "user": "coach", "amount": 42 },
            { "user": "rochelle", "amount": 36 },
            { "user": "nick", "amount": 48 },
            { "user": "francis", "amount": 45 },
            { "user": "rochelle", "amount": 27 },
            { "user": "francis", "amount": 31 },
            { "user": "zoey", "amount": 9 },
            { "user": "nick", "amount": 47 },
            { "user": "louis", "amount": 12 },
            { "user": "rochelle", "amount": 10 },
            { "user": "zoey", "amount": 43 },
            { "user": "francis", "amount": 36 },
            { "user": "zoey", "amount": 49 },
            { "user": "ellis", "amount": 24 }
        ]

        this.prices = [
            { "drink_name": "short espresso", "prices": { "small": 3.0 } },
            {
                "drink_name": "latte",
                "prices": { "small": 3.5, "medium": 4.0, "large": 4.5 }
            },
            {
                "drink_name": "flat white",
                "prices": { "small": 3.5, "medium": 4.0, "large": 4.5 }
            },
            { "drink_name": "long black", "prices": { "small": 3.25, "medium": 3.5 } },
            {
                "drink_name": "mocha",
                "prices": { "small": 4.0, "medium": 4.5, "large": 5.0 }
            },
            {
                "drink_name": "supermochacrapucaramelcream",
                "prices": { "large": 5.0, "huge": 5.5, "mega": 6.0, "ultra": 7.0 }
            }
        ]

    }

    // to get the all orders
    getOrder() {
        this.usersSerivce.getOrderDetails().subscribe(
            response => {
                this.order = response,
                    this.getPrice();
                error => this.error = error;
            });

    }
    // to get the total payment 
    getPayment() {

        this.usersSerivce.getPaymentDetails().subscribe(
            response => {
                this.payment = response,
                    this.getallcoffeprices();
                error => this.error = error;
            });
    }
    // to get the price
    getPrice() {
        this.usersSerivce.getPriceDetails().subscribe(
            response => {
                this.prices = response,
                    this.getPayment();
                error => this.error = error;
            });
    }

    // to get the Coffe price by passing coffe name and size

    getcoffeprice(coffe: string, size: string) {
        const coffename = d => d.drink_name === coffe;
        const arr3 = this.prices.filter(coffename);
        Object.entries(arr3[0].prices).forEach(
            ([key, value]) => {
                if (key === size) {
                    this.coffeprice = value as number;
                }
            }
        );
        return this.coffeprice;
    }


    getallcoffeprices() {
        this.operator = 'add';
        this.allOrderWithPrice = this.order;
        this.allOrderWithPrice.map(i => i.amount = this.getcoffeprice(i.drink, i.size));

        this.allOrderPrice = this.allOrderWithPrice;
        this.groupAllOrderPrice = this.allOrderPrice.map(({ drink, size, ...rest }) => rest);
        // to get the all payment to be done by each User
        this.sumAllprice = this.groupAllOrderPrice;
        this.groupallUser();
        this.groupAllOrderPrice = this.sumAllprice;

        this.paidByUser(); //to get all the payment done by User

        this.finalSettlement(); //Final Settlement
    }

    // To group all user and add/sub price
    groupallUser() {
        this.sumAllprice = this.sumAllprice.reduce((acc, item) => {
            let accItem = acc.find(ai => ai.user === item.user)
            if (accItem) {
                if (this.operator == 'add') accItem.amount += item.amount
                if (this.operator == 'sub') accItem.amount -= item.amount

            } else {
                acc.push(item)
            }

            return acc;
        }, [])

    }

    // To get all the amount paid by User
    paidByUser() {
        this.sumAllprice = this.payment;
        this.groupallUser();
        this.groupAllPaidAmount = this.sumAllprice;

    }

    // For the final settlement
    finalSettlement() {
        this.groupAllOrderPrice = this.groupAllOrderPrice.concat(this.groupAllPaidAmount);
        this.operator = 'sub';
        this.sumAllprice = this.groupAllOrderPrice;
        this.groupallUser();
        this.groupAllOrderPrice = this.sumAllprice;
    }

    details(id: any) {
        this.svalue = id;
    }


    openpopup(FormModal) {
        const ngbModalOptions: NgbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            size: 'lg',
        };
        this.modalService.open(FormModal, ngbModalOptions);
    } zigen1

}
