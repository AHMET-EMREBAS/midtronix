import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CustomerService,
  PriceLevelService,
  StoreService,
  UserService,
} from '@mdtx/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { PosComponent } from '../pos/pos.component';
import { MatDialog } from '@angular/material/dialog';
import {
  posCustomerIdStore,
  posEmployeeIdStore,
  posPriceLevelIdStore,
  posStoreIdStore,
  posTaxrateStore,
} from '../__stores';
import { ICustomer, IPriceLevel, IStore, IUser } from '@mdtx/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mdtx-pos-setting',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputAutocompleteComponent,
    MatButtonModule,
    MatIconModule,
    PosComponent,
  ],
  templateUrl: './pos-setting.component.html',
  styleUrl: './pos-setting.component.scss',
  providers: [StoreService, PriceLevelService, CustomerService, UserService],
})
export class PosSettingComponent implements AfterViewInit {
  submitted = false;

  @ViewChild('storeInput') storeInput!: InputAutocompleteComponent;
  @ViewChild('priceLevelInput') priceLevelInput!: InputAutocompleteComponent;
  @ViewChild('customerInput') customerInput!: InputAutocompleteComponent;

  storeControl = new FormControl<IStore | null>(null, [Validators.required]);
  priceLevelControl = new FormControl<IPriceLevel | null>(null, [
    Validators.required,
  ]);
  customerControl = new FormControl<ICustomer | null>(null, [
    Validators.required,
  ]);
  employeeControl = new FormControl<IUser | null>(null, [Validators.required]);

  employees$ = this.employeeService.asOptions$;
  stores$ = this.storeService.asOptions$;
  priceLevels$ = this.priceLevelService.asOptions$;
  customers$ = this.customerService.asOptions$;

  formGroup!: FormGroup;

  constructor(
    protected readonly storeService: StoreService,
    protected readonly priceLevelService: PriceLevelService,
    protected readonly customerService: CustomerService,
    protected readonly employeeService: UserService,

    protected readonly router: Router,
    protected readonly route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.formGroup = new FormGroup({
      store: this.storeControl,
      priceLevel: this.priceLevelControl,
      customer: this.customerControl,
      employee: this.employeeControl,
    });
  }

  runPos() {
    posStoreIdStore.set(this.storeControl!.value?.id + '');
    posPriceLevelIdStore.set(this.priceLevelControl!.value?.id + '');
    posCustomerIdStore.set(this.customerControl!.value?.id + '');
    posEmployeeIdStore.set(this.employeeControl!.value?.id + '');
    posTaxrateStore.set(this.priceLevelControl.value?.taxrate + '');
    
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
