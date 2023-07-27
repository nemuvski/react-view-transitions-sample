/**
 * ViewTransition object
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition}
 */
interface ViewTransition {
  finished: Promise<unknown>
  ready: Promise<unknown>
  updateCallbackDone: Promise<unknown>

  skipTransition: () => unknown
}

interface Document {
  /**
   * View Transitions API
   *
   * @experimental
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API}
   */
  startViewTransition?: (callback: () => void) => ViewTransition
}
