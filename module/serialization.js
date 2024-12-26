// 사용자 정보를 문자열로 직렬화하는 함수
export function serializeUser(user) {
    const { name, email, age, grade, createdAt } = user;
    return `${name},${email},${age},${grade},${createdAt}`;
  }
  