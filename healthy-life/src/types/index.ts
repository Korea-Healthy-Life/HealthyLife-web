export type InFormData = {
  id: number;
  userId: string;
  userNickName: string;
  userPassword: string;
  userRePassword: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userBirth: string;
  userAddress: string;
  userGender: string;
}

// 상품 상세 페이지 관련 타입
export type CategoryType = 
  | "닭가슴살_육류"
  | "도시락"
  | "간식"
  | "음료"
  | "샐러드"
  | "비건"
  | "저당"
  | "해산물"
  | "견과류";

// 상품 유형 타입 정의
export type ProductType =
  | "닭가슴살"
  | "달걀"
  | "소고기"
  | "볶음밥"
  | "주먹밥"
  | "즉석밥"
  | "에너지바"
  | "과자"
  | "베이커리"
  | "물"
  | "탄산수"
  | "프로틴음료"
  | "커피"
  | "차"
  | "제로음료"
  | "닭가슴살샐러드"
  | "연어샐러드"
  | "큐브스테이크샐러드"
  | "간식"
  | "간편식"
  | "식재료"
  | "저당간식"
  | "저당음료"
  | "저당드레싱"
  | "생성"
  | "해조류"
  | "어패류"
  | "견과류";

  // PRO 인터페이스에 적용
export interface ProductDetail {
  productId: number; // 상품 ID
  name: string; // 상품명
  category: CategoryType; // 카테고리
  productType: ProductType; // 상품 유형
  price: number; // 가격
  stockStatus: number; // 재고 상태
  imageUrl: string; // 상품 이미지 URL
  description: string; // 상품 설명
  ingredients: string; // 성분 정보
  nutritionInfo: string; // 영양 성분표
  manufacturer: string; // 제조사 정보
  origin: string; // 원산지
  usage: string; // 사용 방법
  expirationDate: string; // 유통기한
}

export interface Review {
  reviewId: number; // 리뷰 ID
  productId: string; // 상품 ID
  userId: string; // 사용자 ID
  rating: number; // 평점
  reviewContent: string; // 리뷰 내용
  createdAt: string; // 리뷰 작성일
}

export interface ShippingInfo {
  shippingId: number; // 배송 ID
  productId: string; // 상품 ID
  orderId: string; // 주문 ID
  method: string; // 배송 방법
  cost: number; // 배송 비용
  shippedAt: string; // 배송 날짜
  duration: string; // 배송 소요 시간
  deliveryDate: string; // 예상 배송 날짜
  trackingNumber: string; // 추적 정보
}

export interface Order {
  orderId: number; // 주문 ID
  userId: string; // 사용자 ID
  orderDate: string; // 주문 날짜
  orderStatus: string; // 주문 상태
  totalAmount: number; // 주문 총액
}

// export interface OrderItem {
//   orderItemId: number; // 주문 항목 ID
//   productId: string; // 상품 ID
//   quantity: number; // 수량
//   price: number; // 가격
// }

export interface Wishlist {
  wishlistId: number; // 위시리스트 ID
  userId: string; // 사용자 ID
  productId: string; // 상품 ID
  addedAt: string; // 위시리스트에 추가된 시간
}

// 회원가입 및 사용자 관련 타입
export interface UserRegistration {
  userId: string; // 사용자 ID (자동 생성)
  username: string; // 사용자명
  nickname: string; // 닉네임
  email: string; // 이메일 주소
  password: string; // 비밀번호 (암호화 필요)
  phone: string; // 전화번호
  address: string; // 배송 주소
  birthdate: string; // 생년월일 (선택 사항)
  gender?: "male" | "female"; // 성별 (선택 사항)
}

export interface UserLogin {
  userId: string; // 이메일 주소 또는 사용자 ID
  password: string; // 비밀번호
}

export interface FindUserId {
  username: string; // 사용자명
  phone: string; // 전화번호
}

export interface ResetPassword {
  userId: string; // 사용자 ID
  phone: string; // 전화번호
}

export interface PasswordResetToken {
  tokenId: string; // 토큰 ID
  email: string; // 이메일 주소
  token: string; // 재설정 토큰
  expiresAt: string; // 토큰 유효 기간
}