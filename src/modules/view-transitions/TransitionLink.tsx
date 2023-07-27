import { forwardRef } from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import type { AnchorHTMLAttributes } from 'react'
import type { To, NavigateOptions } from 'react-router-dom'

const TRANSITION_CLASSNAME = 'view-transition'

type TransitionNavigateProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  to: To
  navigateOptions?: NavigateOptions
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionNavigateProps>(function transitionNavigate(
  { children, to, navigateOptions, ...anchorProps },
  ref
) {
  const navigate = useNavigate()
  const href = useHref(to)

  return (
    <a
      ref={ref}
      href={href}
      onClick={async (event) => {
        event.preventDefault()
        if (!document.startViewTransition) {
          return navigate(to, navigateOptions)
        }

        document.documentElement.classList.add(TRANSITION_CLASSNAME)

        const transition = document.startViewTransition(() => {
          navigate(to, navigateOptions)
        })

        try {
          await transition.finished
        } finally {
          document.documentElement.classList.remove(TRANSITION_CLASSNAME)
        }
      }}
      {...anchorProps}
    >
      {children}
    </a>
  )
})

export { TransitionLink }
