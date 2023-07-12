import { DragDirective } from './drag.directive';
import { DomSanitizer } from '@angular/platform-browser';

describe('DragDirective', () => {
  it('should create an instance', () => {
    const sanitizerStub: Partial<DomSanitizer> = {}; 
    const directive = new DragDirective(sanitizerStub as DomSanitizer);
    expect(directive).toBeTruthy();
  });
});
