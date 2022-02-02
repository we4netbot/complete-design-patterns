interface photographerInterface {
    takePhoto(Target:string):void;
}
class personalcameraman implements photographerInterface{
    takePhoto(Target:string):void {
        console.log(`Take a photo`)
    }
}
class photographer implements photographerInterface{
    takePhoto(Target: string):void {
        console.log(`Take a photo`)
    }
}
class client{
    private cameraman:photographerInterface;

    setCameraman(_cameraman:photographerInterface){
        this.cameraman =_cameraman;
    }

    Celebrate(firend:string){
    if (!this.cameraman) {
      throw new Error("You must set a cameraman by call setCameraman");
    }
    console.log(
      `client: hey cameraman please take a photo for me and ${firend}`
    );
    this.cameraman.takePhoto(firend);
    console.log(`client: TNX cameraman!`);
    }
}
export function disetter(){
    var w = new client();
    w.setCameraman(new photographer())
    w.Celebrate("ali");
}