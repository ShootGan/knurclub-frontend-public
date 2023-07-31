import { PolskiAsset } from "../interfaces/PolskiAsset";
import { WielkiPolak } from "../interfaces/WielkiPolak";

export abstract class GenerycznyWielkiPolak implements WielkiPolak {
  protected ANIMATION_FRAMES = 5;
  protected ANIMATION_SPEED = 0.005;
  protected ANIMATION_ACCELERATION = 0.000008;
  protected ANIMATION_FRAME_MULTIPILER = 10;
  protected SCALE_X = 1;
  protected SCALE_Y = 1;
  protected currentImage: HTMLImageElement | null = null;

  protected refyPapiezowe: HTMLImageElement[] = [];

  protected assets: { [id: string]: HTMLImageElement } = {};

  onAssetLoaded(id: string, asset: HTMLImageElement): void {
    this.assets[id] = asset;
    console.log(id, asset);
    this.reset();
  }

  protected x = 0;
  protected y = 0;

  protected animationSpeed = 0.5;
  protected animationFrame = 0;

  public getName(): string {
    return this.constructor.name;
  }

  public getAssetList(): PolskiAsset[] {
    return [];
  }

  public getY(): number {
    return this.y;
  }

  public getX(): number {
    return this.x;
  }

  public setRefArray(refik: HTMLImageElement[]): void {
    this.refyPapiezowe = refik;
  }

  public getFrameCount(): number {
    return this.ANIMATION_FRAMES;
  }

  public abstract onUpdate(deltaTime: number): void;

  public onDraw(context: CanvasRenderingContext2D) {
    if (this.currentImage !== null) {
      context.drawImage(
        this.currentImage,
        this.x,
        this.y,
        this.currentImage.width * this.SCALE_X,
        this.currentImage.height * this.SCALE_Y,
      );
    }
  }

  public abstract reset(): void;
}
