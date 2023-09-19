import type { Config } from "@jest/types";

const config : Config.InitialOptions = {
    // 1. 모듈 파일 확장자 설정 : typescript와 javascript 둘 다 테스트 파일로 지정
    moduleFileExtensions : ["ts", "js"],

    // 2. 테스트파일 매치 설정 : 파일의 이름의 패턴 설정
    // 루트 경로에서 모든 폴더의 모든 파일 중 이름의 패턴이 test.js or test.ts
    testMatch : ['<rootDir>/**/*.test.(js|ts)'],

    // 3. 모듈의 이름에 대한 별칭 설정 : @core
    // 별칭으로 지정된 @core의 경로를 어떻게 바꿔줄 것인지
    // ^@core == @core/**/* 시작하는 별칭은 루트 경로에 src/core의 경로까지
    moduleNameMapper : {
        "^@core/(.*)$" : "<rootDir>/src/core/$1"
    },

    // 4. 테스트 환경 설정 : node 환경에서 실행시킬 것
    testEnvironment : "node",

    // 5. 자세한 로그 설정 출력 : 터미널에 로그들을 더 자세히 출력할지 여부
    verbose : true,

    // 6. 프리셋 설정 : typescript에서 사용할 jest  / ts-jest 설정
    preset : "ts-jest",

}

export default config;