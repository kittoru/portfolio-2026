import type { FC, PropsWithChildren } from 'react'

interface LinkProps extends PropsWithChildren {
  link: string
  blank?: boolean
}

export const Link: FC<LinkProps> = ({ link, blank = false, children }) => (
  <a href={link} {...(blank && { target: '_blank' })}>
    {children}
  </a>
)
