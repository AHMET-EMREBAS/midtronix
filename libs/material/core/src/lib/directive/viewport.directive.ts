import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IToggleValue } from '../types';

/**
 * Provides the viewport information in the template so we can render content conditionally.
 */
@Directive({
  selector: '[mdtxViewport]',
  standalone: true,
  exportAs: 'mdtxViewport',
})
export class ViewportDirective implements IToggleValue, OnInit, OnDestroy {
  private __isHandset?: boolean;
  private __isNotHandset?: boolean;
  private __sub!: Subscription;

  private $isHandset: Observable<boolean> = this.media
    .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((e) => {
        const result = e.matches;
        this.__isHandset = result;
        this.__isNotHandset = !this.__isHandset;
        return result;
      })
    );

  constructor(
    public readonly elementRef: ElementRef<HTMLElement>,
    private readonly media: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.__sub = this.$isHandset.subscribe();
  }

  ngOnDestroy(): void {
    this.__sub.unsubscribe();
  }

  toggleValue<T>(value: T, handsetValue: T): T {
    if (this.__isHandset) {
      if (typeof handsetValue == 'function') {
        return handsetValue();
      }
      return handsetValue;
    }
    if (typeof value === 'function') {
      return value();
    }
    return value;
  }

  isHandset() {
    return this.__isHandset;
  }

  isNotHandset() {
    return this.__isNotHandset;
  }
}
