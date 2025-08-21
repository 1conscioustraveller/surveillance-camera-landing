// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Additional utility functions that might be useful for the project

/**
 * Formats a price with currency symbol
 */
export function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

/**
 * Generates a gradient background based on theme
 */
export function getThemeGradient(theme: 'dark' | 'light'): string {
  return theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800'
    : 'bg-gradient-to-br from-gray-50 via-purple-50 to-white'
}

/**
 * Debounce function for limiting frequent calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

/**
 * Checks if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Generates a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

/**
 * Clamps a value between a minimum and maximum
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Checks if device is touch capable
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Scrolls to element with smooth behavior
 */
export function smoothScrollTo(elementId: string): void {
  if (typeof document === 'undefined') return
  
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    })
  }
}

/**
 * Toggles body scroll lock
 */
export function toggleBodyScroll(lock: boolean): void {
  if (typeof document === 'undefined') return
  
  document.body.style.overflow = lock ? 'hidden' : ''
}

/**
 * Copies text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    }
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}

/**
 * Formats file size to human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Generates a random color in hex format
 */
export function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

/**
 * Checks if two arrays are equal
 */
export function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * Sleep function for delaying execution
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
