 class bankcusteomer {
    constructor(a,b,c,d,e={},f=[]){
        this.acc_number=a;
        this.acc_name=b;
        this.acc_holder_age=c;
        this.acc_mobile=d;
        this.obj=e;
        this.array=f;

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

  let c1 = new bankcusteomer(101,"raghava",20,346761679461,{a:41552,b:290588},[c="fff",d="ghgjgdyf"]);

console.log(c1.acc_number);
console.log(c1.acc_name);
console.log(c1.acc_holder_age);
console.log(c1.acc_mobile);
console.log(c1.obj);
console.log(c1.array);
console.log(c1.obj.a);
console.log(c1.obj.b);
console.log(c1.array.d);
console.log(c1.array.c);

let c2 = new bankcusteomer(102,"ramu",20,258584485);
console.log(c2.acc_number);
console.log(c2.acc_name);
console.log(c2.acc_holder_age);
console.log(c2.acc_mobile);
c2.deposit();
c2.open_account();
c2.withdrow();