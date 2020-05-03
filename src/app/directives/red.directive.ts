import { Directive, ElementRef, HostListener } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  colors: string[] = ['yellow','red', 'blue', 'green'];
  constructor(private el: ElementRef) {
    this.changeColor()
   }

   @HostListener('click') onClik(){
      this.changeColor();
   }

   private changeColor(){
     let red = Math.round(Math.random()* 255).toString(16);
     let green = Math.round(Math.random()* 255).toString(16);
     let blue = Math.round(Math.random()* 255).toString(16);
     let sorted: number = Math.round(Math.random() * this.colors.length);

    
    this.el.nativeElement.style.color = `#${red}${green}${blue}`;
   }

}
