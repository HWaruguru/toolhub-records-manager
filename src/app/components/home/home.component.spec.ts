import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render tool name', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('.tool-name')?.textContent).toContain('Pywikibot');
  });

  it('should render another tool name when Skip to Next button is clicked', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    let button = compiled.querySelector('.next');
    button.click();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then( () => {
      expect(compiled.querySelector('.tool-name')?.textContent).toContain('toolforge-authors');
    })
  }));
});
