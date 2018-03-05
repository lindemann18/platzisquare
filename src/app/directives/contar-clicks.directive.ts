
import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';
@Directive({
  selector: 'li[contar-clicks]'
})

// Al implementar onInit dice que es forzoso
export class ContarClicksDirective {
  public clickN:number = 0;
  //Parámetros
  // 1.- que atributo del elemento html queremos editar
  // 2.-

  @HostBinding('style.opacity') opacity:number = .1;

  // ayuda cuando se agrega directiva al html,s e puede escuchar a los eventos d emnera sencilla
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, "Número de clicks: ",this.clickN++);
    this.opacity += .1;
  }

}
