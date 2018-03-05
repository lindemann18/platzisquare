
import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
@Directive({
  selector: 'a[contar-clicks]'
})

// Al implementar onInit dice que es forzoso
export class ContarClicksDirective {
  public clickN:number = 0;

  // ayuda cuando se agrega directiva al html,s e puede escuchar a los eventos d emnera sencilla
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, "Número de clicks: ",this.clickN++);
  }

}
