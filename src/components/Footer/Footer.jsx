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
                <S.FooterListItem>Facebook</S.FooterListItem>
                <S.FooterListItem>Instagram</S.FooterListItem>
                <S.FooterListItem>Linkedin</S.FooterListItem>
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
            Địa chỉ: Thị Trấn Rừng Thông, Đông Sơn, Thanh Hóa. Tổng đài hỗ trợ: 19001000 - Email:
            duclapulga@gmail.com
          </div>
          <div>
            Mã số doanh nghiệp: 363636363636 do Sở Kế hoạch & Đầu tư TP Thanh Hóa cấp lần đầu ngày
            20/8/2021
          </div>
          <div>© 2021 - Bản quyền thuộc về Công ty TNHH EngGer</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
