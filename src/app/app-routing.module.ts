import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';
import { BadgeDemoComponent } from './demos/badge-demo/badge-demo.component';
import { AvatarDemoComponent } from './demos/avatar-demo/avatar-demo.component';
import { ModalDialogDemoComponent } from './demos/modal-dialog-demo/modal-dialog-demo.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LabComponent } from './demos/lab/lab.component';
import { ComboboxDemoComponent } from './demos/combobox-demo/combobox-demo.component';
import { TypographyDemoComponent } from './demos/typography-demo/typography-demo.component';
import { ToggleDemoComponent } from './demos/toggle-demo/toggle-demo.component';

const routes: Routes = [
  {
    path: 'comboboxes',
    component: ComboboxDemoComponent
  },
  {
    path: 'modal-dialogs',
    component: ModalDialogDemoComponent
  },
  {
    path: 'avatars',
    component: AvatarDemoComponent
  },
  {
    path: 'badges',
    component: BadgeDemoComponent
  },
  {
    path: 'dropdowns',
    component: DropdownDemoComponent
  },
  {
    path: 'button-groups',
    component: ButtonGroupDemoComponent
  },
  {
    path: 'buttons',
    component: ButtonsDemoComponent
  },
  {
    path: 'roadmap',
    component: RoadmapComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'typography',
    component: TypographyDemoComponent
  },
  {
    path: 'toggles',
    component: ToggleDemoComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'comboboxes',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: 'toggles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
