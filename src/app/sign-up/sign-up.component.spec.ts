import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let mockService = jasmine.createSpyObj(['addUser']);
  let form = <NgForm>{ 
    value : {
      password : 'abcd',
      cpassword : 'abcd'
    },
    reset : () => null
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports : [FormsModule , HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new SignUpComponent(mockService)
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call ngOnInit' , () => {
    expect(component.ngOnInit).toBeTruthy()
  })
  
  it('should call signup function' , () => {
      expect(component.signup(form)).toBeUndefined()
    })

  it('should call reset function' , () => {
    expect(component.reset(form)).toBeUndefined()
  })
  
});
