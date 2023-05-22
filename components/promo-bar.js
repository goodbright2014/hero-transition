import React from 'react'
import { useRouter } from 'next/router'

import { ConditionalWrapper } from '@lib/helpers'

import CustomLink from '@components/link'
import Marquee from './modules/marquee'

const PromoBar = React.memo(({ data = {} }) => {
  const { enabled, display, text, link } = data
  const router = useRouter()

  // bail if no display or text
  if (!enabled || !display || !display.trim() || !text) return null

  // bail if display set to homepage and we're not on the homepage
  if (display === 'home' && router.asPath !== '/') return null

  return (
    <div className="promo-bar is-inverted">
      <div className="promo-bar--content">
        <ConditionalWrapper
          condition={link}
          wrapper={(children) => (
            <CustomLink
              className="promo-bar--link"
              link={{ ...{ page: link } }}
            >
              {children}
            </CustomLink>
          )}
        >
          <marquee>"70만원 이상 구매고객에게는 배송비가 무료입니다!"</marquee>
        </ConditionalWrapper>
      </div>
    </div>
  )
})

export default PromoBar
