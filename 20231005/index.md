# 컨트랙트 복습

```sh
npx create-react-app test
cd test
npm i truffle
npm i web3
npm i ganache-cli

# npx truffle init
# truffle-config.js 수정
# npx truffle compile
# npx ganache-cli
```

- contracts 폴더에 sol 파일에 컨트랙트 코드 작성하고
- 컴파일 진행 후

- migrations 폴더에
- 빌드 배포 내용 코드 파일 추가
- 파일명 = [번호]_[내용]_[파일명].js

- 1_deploy_Counter.js

- truffle config 파일 내용에 지정한 네트워크로 배포 진행
```sh
npx truffle migrate
```

- CA : 0x64F5a2BeCb36a49A87BB9cD9a63E8bb7dfce625a

- CA를 조회하고 싶으면
- truffle console 활성화시키고

```sh
npx truffle console
# 배포한 컨트랙트의 이름
# CA 조회

Counter.address
# 배포한 컨트랙트 Counter 마지막으로 배포한 CA 나옴
```


# 계약 작성

# 숫자 야구 게임

<!-- counter2 0xeA1F124c11C726fc1fe3a83b08ffbbAc93cc6Ad4 -->
<!-- baseball 0x62a44be1B6Eb5ab9ac33Fd20E8fcDe1612b7846e -->

<!-- 게임 재시작하는 부분 추가 -->
<!-- 어드민 부분 추가 -->