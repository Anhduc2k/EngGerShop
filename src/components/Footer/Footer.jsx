import React from 'react'
import * as S from './footer.style'
export default function Footer() {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.FooterGrid>
          <S.FooterRow>
            <S.FooterHeading>
              <h3>Chăm Sóc Khách Hàng</h3>
              <S.FooterList>
                <S.FooterListItem>Trung tâm trợ giúp</S.FooterListItem>
                <S.FooterListItem>Shoppe Mall</S.FooterListItem>
                <S.FooterListItem>Thanh toán</S.FooterListItem>
                <S.FooterListItem>Chăm Sóc Khách Hàng</S.FooterListItem>
              </S.FooterList>
            </S.FooterHeading>
            <S.FooterHeading>
              <h3>Về EngGer Shop</h3>
              <S.FooterList>
                <S.FooterListItem>Tuyển dụng</S.FooterListItem>
                <S.FooterListItem>Chính xách bảo mật</S.FooterListItem>
                <S.FooterListItem>Chính hãng </S.FooterListItem>
                <S.FooterListItem>Flash sales</S.FooterListItem>
                <S.FooterListItem>Liên hệ truyền thông</S.FooterListItem>
                <S.FooterListItem>Điều khoản</S.FooterListItem>
              </S.FooterList>
            </S.FooterHeading>
            <S.FooterHeading>
              <h3>Danh mục</h3>
              <S.FooterList>
                <S.FooterListItem>Tất cả</S.FooterListItem>
                <S.FooterListItem>Quần áo</S.FooterListItem>
                <S.FooterListItem>Điện thoại</S.FooterListItem>
                <S.FooterListItem>Laptop </S.FooterListItem>
                <S.FooterListItem>Đồng hồ</S.FooterListItem>
              </S.FooterList>
            </S.FooterHeading>
            <S.FooterHeading>
              <h3>Theo dõi chúng tôi trên</h3>
              <S.FooterList>
                <S.FooterListItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{
                      fill: 'rgba(0, 0, 0, 1)',
                      transform: '',
                      msfilter: ''
                    }}
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                  </svg>
                  Facebook
                </S.FooterListItem>
                <S.FooterListItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{
                      fill: 'rgba(0, 0, 0, 1)',
                      transform: '',
                      msfilter: ''
                    }}
                  >
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                    <circle cx="11.994" cy="11.979" r="3.003" />
                  </svg>
                  Instagram
                </S.FooterListItem>
                <S.FooterListItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{
                      fill: 'rgba(0, 0, 0, 1)',
                      transform: '',
                      msfilter: ''
                    }}
                  >
                    <circle cx="4.983" cy="5.009" r="2.188" />
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                  </svg>
                  Linkedin
                </S.FooterListItem>
              </S.FooterList>
            </S.FooterHeading>
          </S.FooterRow>
        </S.FooterGrid>
      </S.FooterTop>

      <div className="container">
        <S.Footer1>
          <div>© 2021 EngGerShop. Tất cả các quyền được bảo lưu</div>
          <S.Language>
            Ngôn ngữ:
            <span>Tiếng Anh</span>
            <span>Tiếng Việt</span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH EngGerShop</div>
          <div>
            Địa chỉ: Thị Trấn Rừng Thông, Đông Sơn, Thanh Hóa. Tổng đài hỗ trợ:
            19001000 - Email: duclapulga@gmail.com
          </div>
          <div>
            Mã số doanh nghiệp: 363636363636 do Sở Kế hoạch & Đầu tư TP Thanh
            Hóa cấp lần đầu ngày 20/8/2021
          </div>
          <div>© 2021 - Bản quyền thuộc về Công ty TNHH EngGer</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
