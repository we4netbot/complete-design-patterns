import { Container, inject, injectable } from "inversify";

interface photographerInterface {
  camera: cameraInterface;

  takePhoto(target: string): void;
}


interface cameraInterface {

  createPhoto(): void;

}
interface peopleInterface{
  Celebrate(friend:string):void;
}

const TYPES = {
  photographerInterface: Symbol.for("photographerInterface"),
  cameraInterface: Symbol.for("cameraInterface"),
  peopleInterface: Symbol.for("peopleInterface")
};

@injectable()
class Phone implements cameraInterface {

  createPhoto(): void{
    console.log(`phone: ckelick!!!!!!(take photo)`);
  }
}

@injectable()
class Camera implements cameraInterface {

  createPhoto():void {
    console.log(`camera: ckelick!!!!!!(take photo)`);
  }
}

@injectable()
class Personalcameraman implements photographerInterface {
  private _tool : cameraInterface;
  constructor(@inject(TYPES.cameraInterface) tool: cameraInterface){
    this._tool = tool
  }

  camera: cameraInterface;

  takePhoto(Target: string): void {
    this._tool.createPhoto();
    console.log(`personalcameraman:i am take a photo for ${Target}`);
  }
}

@injectable()
class Photographer implements photographerInterface {
  private _tool : cameraInterface;
  constructor(@inject(TYPES.cameraInterface) tool: cameraInterface){
    this._tool = tool
  }

  camera: cameraInterface;

  takePhoto(Target: string): void {
    this._tool.createPhoto();
    console.log(`photographer: i am take a photo for ${Target}`);
  }
}

@injectable()
class Client implements peopleInterface{
  private _cameraman : photographerInterface;
  constructor(@inject(TYPES.photographerInterface) cameraman: photographerInterface) {
    this._cameraman = cameraman;
  }

  Celebrate(firend: string) {
    if (!this._cameraman) {
      throw new Error("You must set a cameraman by call setCameraman");
    }
    console.log(
      `client: hey cameraman please take a photo for me and ${firend}`
    );
    this._cameraman.takePhoto(firend);
    console.log(`client: TNX cameraman!`);
  }
}

export function diContainer(){

  const myContainer = new Container();
  myContainer.bind<peopleInterface>(TYPES.peopleInterface).to(Client);
  myContainer.bind<cameraInterface>(TYPES.cameraInterface).to(Camera);
  myContainer.bind<photographerInterface>(TYPES.photographerInterface).to(Photographer);
  
const client = myContainer.get<peopleInterface>(TYPES.peopleInterface);

expect(client.Celebrate("ali")).eql("!*!");
}

