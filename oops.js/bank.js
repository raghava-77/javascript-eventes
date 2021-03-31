class bank{
    constructor(a,b,c,d,){
        this.acc_number=a;
        this.acc_name=b;
        this.acc_holder_age=c;
        this.acc_mobile=d;
    
    }
    open_account(){
        console.log("account opened successfully");
    }
    deposit(){
        console.log("hi raghava deposit");

    }
    withdrow(){
        console.log("withdrow 6000");
    }
    get_balance(){
        console.log("your balance 7000");
    }

}


let c1 = new bank(101,"raghava",21,7000,true);

console.log (c1.acc_number);
console.log (c1.acc_name);
console.log(c1.acc_holder_age);
console.log(c1.acc_mobile);
 c1.open_account();
 c1.get_balance();
 c1.deposit();
 c1.withdrow();