import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { resolveConfig } from '../helpers/config.helper';

@Injectable({
  providedIn: 'root'
})
export class ConfigService<T> {
  private configs: Record<string, BehaviorSubject<T>> = {};

  get(key: string) {
    return this.configs[key].asObservable();
  }

  set(key: string, target: T, source: Partial<T> = {}): ConfigService<T> {

    if (!this.configs[key]?.value) {
      this.configs[key] = new BehaviorSubject<T>({} as T);
    }
    const config = resolveConfig(target, source) as T;
    this.configs[key].next(config);

    return this;
  }
}
