// global.d.ts
declare module "odometer" {
  const Odometer: any;
  export default Odometer;
}
declare module "react-modal-video" {
  const ModalVideo: any;
  export default ModalVideo;
}
declare module "aos";

declare module "isotope-layout" {
  export default class Isotope {
    constructor(options: any);
    arrange(options: any): void;
    destroy(): void;
  }
}