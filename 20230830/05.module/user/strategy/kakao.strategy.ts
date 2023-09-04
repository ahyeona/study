import {UserParams} from "../interfaces/login.request"
import {AuthenticationResponse, Authenticator} from "./Authenticator"

// 검증 객체 구조 상속
// 카카오 로그인 검증 클래스 정의
export class KaKaoAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao login 성공");
        return {success : true}
    }
}