import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appCorDeFundo]',
  exportAs: 'sombraNoComponente'
})
export class CorDeFundoDirective {

  @HostBinding('backcolor') corDeFundo: string;
  @Input('appCorDeFundo') corEntrada: string;

  
  @HostListener('click') quandoOMousePassarPorCima() {
    this.renderer.setStyle(
    this.elementRef.nativeElement,
    'box-shadow',
    '10px 10px'
    );
  }

  @HostListener('mouseleave') quandoOMouseSair() {
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow'
    );
  }

}
