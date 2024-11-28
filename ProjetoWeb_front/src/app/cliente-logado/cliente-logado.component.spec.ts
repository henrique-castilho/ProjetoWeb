import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLogadoComponent } from './cliente-logado.component';

describe('ClienteLogadoComponent', () => {
  let component: ClienteLogadoComponent;
  let fixture: ComponentFixture<ClienteLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteLogadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
