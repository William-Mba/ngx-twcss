import { Component, Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../base.component';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { SizeConfig } from '../../configs/size.config';
import { ConfigService } from '../../core/services/config.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Size } from '../../core/types/size';

/**Dropdown item component*/
@Directive({
  selector: 'tw-dropdown-item',
  standalone: true
})
export class DropdownItem {
  private configService = inject(ConfigService<DropdownConfig>);
  @Input() size: Size = 'md';

  constructor(el: ElementRef) {
    this.configService.get(DropdownConfigKey).subscribe((cfg) => {
      el.nativeElement.className = toClassName([cfg.item, SizeConfig[this.size]]);
    });
  }
}

/**Dropdown component*/
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ]),
      transition(':leave', [
        animate('75ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.9)'
        }))
      ])
    ])
  ]
})
export class Dropdown extends BaseComponent<DropdownConfig> implements OnInit {
  protected contentStyle!: string;

  @Input() override className!: string;
  @Input() override size: Size = 'md';

  @Input() open: boolean = false;
  @Input() contentClassName: string = '';
  @Input() contentPosition: string = 'top-8 right-0';

  ngOnInit(): void {
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((cfg) => {
        this.style = resolveClassName(toClassName([cfg.container, SizeConfig[this.size]]), this.className);
        this.contentStyle = resolveClassName(toClassName(cfg.content), this.contentClassName);
      });
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }
}
