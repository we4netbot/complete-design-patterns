class User {
    role: string;
    newPost() {
        console.log("new a post");
    }
    editPost() {
        console.log("some edit to post");
    }
    publishPost() {
        console.log("publish a Post");
    }
}

class ProxyRequest {
    realClass: User;

    constructor(_realClass: User) {
        this.realClass = _realClass;
    }
    proxyRequest() {
        if (this.realClass.role == "Publisher") {
            this.realClass.publishPost();
        } else if (this.realClass.role == "editor") {
            this.realClass.editPost();
        } else if (this.realClass.role == "writer") {
            this.realClass.newPost();
        } else {
            console.log(`You're not authorized to run this function`);
        }
    }
}
export function proxy() {
    let u = new User();
    u.role = "user";
    let p = new ProxyRequest(u);

    p.proxyRequest();

    let u2 = new User();
    u2.role = "Publisher";
    let p2 = new ProxyRequest(u2);

    p2.proxyRequest();

    let u3 = new User();
    u3.role = "editor";
    let p3 = new ProxyRequest(u3);

    p3.proxyRequest();

    let u4 = new User();
    u4.role = "writer";
    let p4 = new ProxyRequest(u4);

    p4.proxyRequest();
}
