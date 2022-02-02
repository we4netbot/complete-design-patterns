interface photographerInterface {
    camera: cameraInterface;
  
    takePhoto(target: string): void;
  }
  
  
  interface cameraInterface {
  
    createPhoto(): void;
  
  }
  
  class phone implements cameraInterface {
  
    createPhoto(): void{
      console.log(`phone: ckelick!!!!!!(take photo)`);
    }
  }
  
  class camera implements cameraInterface {
  
    createPhoto():void {
      console.log(`camera: ckelick!!!!!!(take photo)`);
    }
  }
  
  class personalcameraman implements photographerInterface {
    constructor(protected tool: cameraInterface) {}
  
    camera: cameraInterface;
  
    takePhoto(Target: string): void {
      this.tool.createPhoto();
      console.log(`personalcameraman:i am take a photo for ${Target}`);
    }
  }
  
  class photographer implements photographerInterface {
    constructor(protected tool: cameraInterface) {}
  
    camera: cameraInterface;
  
    takePhoto(Target: string): void {
      this.tool.createPhoto();
      console.log(`photographer: i am take a photo for ${Target}`);
    }
  }
  
  class client {
    constructor(protected cameraman: photographerInterface) {}
  
    Celebrate(firend: string) {
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
  export function diConstructor() {
    var w = new client(new photographer(new camera()));
      w.Celebrate("ali");
  }
  