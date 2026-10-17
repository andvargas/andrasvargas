'use client'

import { sendGAEvent } from '@next/third-parties/google'

type Props = React.ComponentProps<'a'> & { location: string }

export default function AuditLink({ location, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        sendGAEvent('event', 'audit_email_click', { location })
        onClick?.(e)
      }}
    />
  )
}