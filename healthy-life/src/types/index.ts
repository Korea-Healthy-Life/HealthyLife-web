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
  // userGender: string;
}
export interface ProductProps {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
}