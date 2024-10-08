
import { ElementConfig } from '../../../core/types/element.config';
import { mergeConfigs } from '../../../core/helpers/config.helper';
import { InjectionToken, Provider } from '@angular/core';

export type InputConfig = Partial<ElementConfig>;

const InputConfig: InputConfig = {
  borderRadius: 'rounded-md',
  borderWidth: 'border-0',
  ringWidth: 'ring-1',
  lineHeight: 'leading-6',
  inset: 'ring-inset',
  padding: {
    y: 'py-1.5',
    x: 'px-3'
  },
  width: 'w-80',
  shadow: 'shadow-sm',
  theme: {
    bgColor: 'bg-black',
    bgOpacity: 'bg-opacity-0',
    borderColor: 'ring-black',
    borderOpacity: 'ring-opacity-10',
    dark: {
      bgColor: 'dark:bg-white',
      bgOpacity: 'dark:bg-opacity-0',
      borderColor: 'dark:ring-white',
      borderOpacity: 'dark:ring-opacity-10'
    },
    focus: {
      borderWidth: 'focus:ring-2',
      borderColor: 'focus:ring-indigo-600',
      inset: 'focus:ring-inset'
    }
  }
};

/**
 * Input component config
 */
export const INPUT_CONFIG = new InjectionToken<InputConfig>('Input component config token.');

/**
 * Input component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideInputConfig(config?: Partial<InputConfig>): Provider[] {
  return [{
    provide: INPUT_CONFIG,
    useFactory: () => mergeConfigs(InputConfig, config)
  }];
}
