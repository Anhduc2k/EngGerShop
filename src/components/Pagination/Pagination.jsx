import React from 'react'
import * as S from './pagination.style'
export default function Pagination() {
  return (
    <div>
      <S.Pagination>
        <S.ButtonIcon>
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x={0}
            y={0}
            className="shopee-svg-icon icon-arrow-left"
          >
            <g>
              <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
            </g>
          </svg>
        </S.ButtonIcon>
        <S.ButtonNoOutLine className="active">1</S.ButtonNoOutLine>
        <S.ButtonNoOutLine>2</S.ButtonNoOutLine>
        <S.ButtonNoOutLine>...</S.ButtonNoOutLine>
        <S.ButtonIcon>
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x={0}
            y={0}
            className="shopee-svg-icon icon-arrow-right"
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </S.ButtonIcon>
      </S.Pagination>
    </div>
  )
}
