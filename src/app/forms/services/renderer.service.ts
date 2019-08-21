import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setProperty(input: HTMLElement, prop: string, value: any) {
    this.renderer.setProperty(input, prop, value);
  }
}
