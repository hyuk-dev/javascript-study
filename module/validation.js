// 사용자 정보를 검증하는 함수
export function validateUser(user) {
    if (!user.name || !user.email || !user.age) {
      throw new Error("필수 정보가 누락되었습니다");
    }
  
    if (user.age < 0 || user.age > 120) {
      throw new Error("유효하지 않은 나이입니다");
    }
  
    return user;
  }
  
  // 이메일 형식을 검증하는 함수
export function validateEmail(user) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    if (!emailRegex.test(user.email)) {
      throw new Error("유효하지 않은 이메일 형식입니다");
    }
  
    return user;
  }