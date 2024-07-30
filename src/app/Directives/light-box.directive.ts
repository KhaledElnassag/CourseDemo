import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges,OnInit {
//  @Input() Highlight:string="black"
@Input('LightBox') Highlight:string="black"

  constructor(private eleRef:ElementRef) {  
    
    eleRef.nativeElement.style.border=`2px solid ${this.Highlight}`
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(this.Highlight)
    this.eleRef.nativeElement.style.border=`2px solid ${this.Highlight}`

 }
  ngOnInit(): void {
    
    this.eleRef.nativeElement.style.border=`2px solid ${this.Highlight}`
  }
  @HostListener('mouseover')
  onMouseHover(){
  this.eleRef.nativeElement.style.border=`2px solid yellow`
}
@HostListener('mouseout')
onMouseout(){
  this.eleRef.nativeElement.style.border="2px solid black"
}
}
