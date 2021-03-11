import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Index
import { IndexLayoutComponent } from '../components/index/index-layout/index-layout.component';
import { LoginComponent } from '../components/index/login/login.component';
import { RegisterComponent } from '../components/index/register/register.component';
import { RecoverComponent } from '../components/index/recover/recover.component';
import { RulesComponent } from '../components/index/rules/rules.component';
import { MediaComponent } from '../components/index/media/media.component';
import { ContactComponent } from '../components/index/contact/contact.component';
import { ErrorComponent } from '../components/index/error/error.component';

//User
import { UserLayoutComponent } from '../components/user/user-layout/user-layout.component';
import { HomeComponent } from '../components/user/home/home.component';

//Admin
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';

//Angular Material Default Examples
import { AgLayoutComponent } from '../components/ui/angular-material/ag-layout/ag-layout.component';
import { AgAutocompleteComponent } from '../components/ui/angular-material/ag-autocomplete/ag-autocomplete.component';
import { AgBadgeComponent } from '../components/ui/angular-material/ag-badge/ag-badge.component';
import { AgBottomSheetComponent } from '../components/ui/angular-material/ag-bottom-sheet/ag-bottom-sheet.component';
import { AgButtonComponent } from '../components/ui/angular-material/ag-button/ag-button.component';
import { AgButtonToggleComponent } from '../components/ui/angular-material/ag-button-toggle/ag-button-toggle.component';
import { AgCardComponent } from '../components/ui/angular-material/ag-card/ag-card.component';
import { AgCheckboxComponent } from '../components/ui/angular-material/ag-checkbox/ag-checkbox.component';
import { AgChipsComponent } from '../components/ui/angular-material/ag-chips/ag-chips.component';
import { AgDatepickerComponent } from '../components/ui/angular-material/ag-datepicker/ag-datepicker.component';
import { AgDialogComponent } from '../components/ui/angular-material/ag-dialog/ag-dialog.component';
import { AgDividerComponent } from '../components/ui/angular-material/ag-divider/ag-divider.component';
import { AgExpansionPanelComponent } from '../components/ui/angular-material/ag-expansion-panel/ag-expansion-panel.component';
import { AgFormFieldComponent } from '../components/ui/angular-material/ag-form-field/ag-form-field.component';
import { AgGridListComponent } from '../components/ui/angular-material/ag-grid-list/ag-grid-list.component';
import { AgIconComponent } from '../components/ui/angular-material/ag-icon/ag-icon.component';
import { AgInputComponent } from '../components/ui/angular-material/ag-input/ag-input.component';
import { AgListComponent } from '../components/ui/angular-material/ag-list/ag-list.component';
import { AgMenuComponent } from '../components/ui/angular-material/ag-menu/ag-menu.component';
import { AgPaginatorComponent } from '../components/ui/angular-material/ag-paginator/ag-paginator.component';
import { AgProgressBarComponent } from '../components/ui/angular-material/ag-progress-bar/ag-progress-bar.component';
import { AgProgressSpinnerComponent } from '../components/ui/angular-material/ag-progress-spinner/ag-progress-spinner.component';
import { AgRadioButtonComponent } from '../components/ui/angular-material/ag-radio-button/ag-radio-button.component';
import { AgRipplesComponent } from '../components/ui/angular-material/ag-ripples/ag-ripples.component';
import { AgSelectComponent } from '../components/ui/angular-material/ag-select/ag-select.component';
import { AgSidenavComponent } from '../components/ui/angular-material/ag-sidenav/ag-sidenav.component';
import { AgSlideToggleComponent } from '../components/ui/angular-material/ag-slide-toggle/ag-slide-toggle.component';
import { AgSliderComponent } from '../components/ui/angular-material/ag-slider/ag-slider.component';
import { AgSnackbarComponent } from '../components/ui/angular-material/ag-snackbar/ag-snackbar.component';
import { AgSortHeaderComponent } from '../components/ui/angular-material/ag-sort-header/ag-sort-header.component';
import { AgStepperComponent } from '../components/ui/angular-material/ag-stepper/ag-stepper.component';
import { AgTableComponent } from '../components/ui/angular-material/ag-table/ag-table.component';
import { AgTabsComponent } from '../components/ui/angular-material/ag-tabs/ag-tabs.component';
import { AgToolbarComponent } from '../components/ui/angular-material/ag-toolbar/ag-toolbar.component';
import { AgTooltipComponent } from '../components/ui/angular-material/ag-tooltip/ag-tooltip.component';

const routes: Routes = [
  { path: '', redirectTo: '/index/login', pathMatch: 'full' },
  {
    path: 'index',
    component: IndexLayoutComponent, 
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'recover', component: RecoverComponent},
      {path: 'rules', component: RulesComponent},
      {path: 'media', component: MediaComponent},
      {path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent, 
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent, 
    children: [
      {path: 'dashboard', component: DashboardComponent}
    ]
  },
  {
    path: 'ag',
    component: AgLayoutComponent, 
    children: [
      {path: 'autocomplete', component: AgAutocompleteComponent},
      {path: 'badge', component: AgBadgeComponent},
      {path: 'bottomSheet', component: AgBottomSheetComponent},
      {path: 'button', component: AgButtonComponent},
      {path: 'buttonToggle', component: AgButtonToggleComponent},
      {path: 'card', component: AgCardComponent},
      {path: 'checkbox', component: AgCheckboxComponent},
      {path: 'chips', component: AgChipsComponent},
      {path: 'datapicker', component: AgDatepickerComponent},
      {path: 'dialog', component: AgDialogComponent},
      {path: 'divider', component: AgDividerComponent},
      {path: 'expansionPanel', component: AgExpansionPanelComponent},
      {path: 'formField', component: AgFormFieldComponent},
      {path: 'gridList', component: AgGridListComponent},
      {path: 'icon', component: AgIconComponent},
      {path: 'input', component: AgInputComponent},
      {path: 'list', component: AgListComponent},
      {path: 'menu', component: AgMenuComponent},
      {path: 'paginator', component: AgPaginatorComponent},
      {path: 'progressBar', component: AgProgressBarComponent},
      {path: 'progressSpinner', component: AgProgressSpinnerComponent},
      {path: 'radioButton', component: AgRadioButtonComponent},
      {path: 'ripples', component: AgRipplesComponent},
      {path: 'select', component: AgSelectComponent},
      {path: 'sidenav', component: AgSidenavComponent},
      {path: 'slideToggle', component: AgSlideToggleComponent},
      {path: 'slider', component: AgSliderComponent},
      {path: 'snackbar', component: AgSnackbarComponent},
      {path: 'sortHeader', component: AgSortHeaderComponent},
      {path: 'stepper', component: AgStepperComponent},
      {path: 'table', component: AgTableComponent},
      {path: 'tabs', component: AgTabsComponent},
      {path: 'toolbar', component: AgToolbarComponent},
      {path: 'tooltip', component: AgTooltipComponent}
    ]
  },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
