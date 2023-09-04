import { UserParams } from "../interfaces/login.request"
import { AuthenticationResponse, Authenticator } from "./Authenticator"

// 이메일 로그인 검증 클래스 정의
export class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 이메일 로직 부분
        console.log("email login 성공");
        return {success : true}
    }
}
