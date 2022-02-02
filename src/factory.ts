//سازنده ها
interface Builder {
    create(): Environment;
}
class SchoolBuild implements Builder {
    create(): Environment {
        return School.getInstance();
    }
}
class OfficeBuild implements Builder {
    create(): Environment {
        return Office.getInstance();
    }
}
class MosqueBuild implements Builder {
    create(): Environment {
        return Mosque.getInstance();
    }
}

//محصولات
interface Environment {
    deliver(): void;
}
class School implements Environment {
    deliver(): void {
        console.log("School");
    }
    static instance: School = null;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new School()
        }
        return this.instance
    }
}
class Office implements Environment {
    deliver(): void {
        console.log("Office");
    }
    static instance: Office = null;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new Office()
        }
        return this.instance
    }
}
class Mosque implements Environment {
    deliver(): void {
        console.log("Mosque");
    }
    static instance: Mosque = null;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new Mosque()
        }
        return this.instance
    }
}

export function Buld() {
    let s = new SchoolBuild();
    const sc = s.create();
    sc.deliver();

    let o = new OfficeBuild();
    const oc = o.create();
    oc.deliver();

    let m = new MosqueBuild();
    const mc = m.create();
    mc.deliver();
}
