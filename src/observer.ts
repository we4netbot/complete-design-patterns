interface Exchange {
  buyer(user: Observer): void;
  nopurchase(user: Observer): void;

  increase(): void;
  decrease(): void;
}

class Stock implements Exchange {
  buyers: Observer[] = [];
  static instance: Stock = null;
  static getInstance() {
    if (this.instance == null) {
      this.instance = new Stock()
    }
    return this.instance
  }
  buyer(user: Observer): void {
    if (this.buyers.indexOf(user) == -1) {
      this.buyers.push(user);
      console.log("Subject: You have successfully joined Buyers");
    } else {
      console.log("Subject: You already joined!");
    }
  }
  nopurchase(user: Observer): void {
    const index = this.buyers.indexOf(user);
    if (index >= 0) {
      this.buyers.splice(index, 1);
    }
  }
  increase(): void {
    console.log("Subject: Stocks are rising");
    this.buyers.forEach((x) => {
      x.buyShares();
    });
  }
  decrease(): void {
    console.log("Subject: Stocks are falling");
    this.buyers.forEach((x) => {
      x.sellShares();
    });
  }
}

interface Observer {
  buyShares(): void;
  sellShares(): void;
}

class User implements Observer {
  buyShares(): void {
    console.log("Observer: I buy stock");
  }
  sellShares(): void {
    console.log("Observer: I sell stock");
  }
}

export function exchange() {
  let stock = Stock.getInstance();

  let u1 = new User();
  let u2 = new User();

  stock.buyer(u1);
  stock.buyer(u1);
  stock.buyer(u2);

  stock.increase();
  stock.decrease();

  stock.nopurchase(u1);

  stock.increase();
  stock.decrease();
}
