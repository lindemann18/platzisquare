
import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
@Directive({
  selector: '[resaltar]'
})

// Al implementar onInit dice que es forzoso
export class ResaltarDirective implements OnInit {
  constructor(private elRef:ElementRef, private renderer: Renderer2) {

  }
  @Input('resaltar') plan:string = '';

  ngOnInit() {
      if(this.plan === 'pagado') {
        // Recibe 3 parámetros
        // 1._ Elemento Nativo, 2._ atributo de CSS 3._ valor para le atributo
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight','bold');
      }
  }
}
