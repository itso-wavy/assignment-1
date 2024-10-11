export interface LoginProps {
  userId: string;
  pw: string;
}

export interface Researcher {
  pin: string;
  organization: string;
  password: string;
  phoneNumber: string; // 정규표현식 생략
  name: string;
}

export type UpdateResearcher = Partial<Researcher>;

export type ResetPasswordProps = Pick<Researcher, 'pin' | 'password'>;
