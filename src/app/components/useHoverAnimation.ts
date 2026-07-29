'use client'
import { useRef } from 'react';

/**
 * Compatibility ref hook. Pointer tracking is centralized in AnimationController.
 */
export function useHoverAnimation<T extends HTMLElement = HTMLDivElement>() {
  return useRef<T>(null);
}

