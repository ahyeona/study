// 오늘은 도메인, https 설정까지 진행할 것 Nginx

// nvm 노드 버전 매니저
// nodejs 설치하고 다른 버전으로 설치할 때
// 삭제하고 다시 설치할 필요 없이 버전 관리가 편하다
// 원하는 버전을 설치받고 바로 스위치 가능


// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

// 소스 파일 적용
// source ~/.bashrc

// 전체 목록 확인
// nvm list-remote

// nvm install 16 (원하는 버전 설치)


// node -v
// npm -v
// npm i
// npm start

// 인스턴스 v4 주소는 우리가 인스턴스를 실행하거나 다시 실행하면
// 동적으로 ip 주소가 할당된다.
// 예) http://ec2-43-201-71-135.ap-northeast-2.compute.amazonaws.com:8080/login

// 도메인을 이 v4로 연결했는데
// 이 주소가 바뀌면 연결이 끊김
// 그러면 안되니까 탄력적 ip 설정 --> 고정 아이피를 할당받을 수 있음

// http://3.35.44.231:8080/login

// Nginx를 사용해서 프록시 설정

// 프록시는 말그대로 대신 이라는 뜻
// 통신할때 중간에서 대신 통신해주는 역할
// 중계역할을 해주는 것이 프록시 서버
// 클라이언트와 서버 사이의 중계 서버

// 클라이언트는 프록시 서버를 서버로 알고 있음
// 서버는 프록시 서버를 클라이언트로 알고 있음

// 서버의 위치에 따라 포워드 프록시, 리버스 프록시로 구분되는데

// 리버스 프록시는 프록시 서버가 서버의 앞에 위치하고 클라이언트가 서버에 요청하면
// 리버스 프록시가 호출되고 리버스 프록시는 서버에게 요청해서 응답을 받고 클라이언트한테 전송
// 클라이언트가 서버에 직접 요청하는 게 아니고 프록시 서버가 요청을 받고 서버로 요청해서
// 서버의 응답을 받게 된다.(서버를 감춰준다. 보안 좋음)
// Nginx를 사용해서 리버스 프록시 만들어보자

// 클라이언트 -> 인터넷 -> 프록시 서버 -> 서버
// 서버 -> 프록시 서버 -> 인터넷 -> 클라이언트

// aws 인스턴스 접속하고

// nginx 설치
// sudo apt install nginx


// nginx 시작
// sudo service nginx start

// nginx 상태 확인
// sudo service nginx status

// nginx 종료
// sudo service nginx stop

// 웹사이트 호스팅 할 때 설정에 대한 값 있는 파일?
// default 파일 생성됨
// cd /etc/nginx/sites-enabled
// default 파일은 가상 호스트 설정 파일
// sudo vi default  (sudo 붙여야 수정 가능)

// 설정 파일 수정

// i 누르고
// location
// # 주석 tryfiles
// proxy_set_header HOST $host;
// proxy_pass http://127.0.0.1:8080;
// proxy_redirect off;

// 예)
// location / {
//     # First attempt to serve request as file, then
//     # as directory, then fall back to displaying a 404.
//     # try_files $uri $uri/ =404;

//     proxy_set_header HOST $host;
//     proxy_pass http://127.0.0.1:8080;
//     proxy_redirect off;
// }

// proxy_set_header 부분은 요청이 들어온 브라우저의 host 내용을 넘겨준다는 뜻
// proxy_pass 80으로 포트를 듣고 들어온 요청을 8080 포트로 전달하겠다는 뜻
// proxy_redirect off는 SPA일 경우 redirect 없애겠다는 의미. SPA가 아니면 굳이 써줄필요는 없음
// SPA 싱글페이지 어플리케이션 react vue 등

// 설정 파일을 수정했으면
// 먼저 설정 파일이 정상적인지 확인을 해주자
// 문법에 오류가 있는지 체크
// sudo nginx -t

// 경로 원래 경로로 이동
// cd /home/ubuntu/

// nginx 재실행
// sudo service nginx restart

// http://3.35.44.231/login

// 탄력적 ip 주소를 도메인으로 교체

// 가비아에서 도메인을 구입해서 사용할 예정
// https://www.gabia.com/

// 이 도메인을 사용해서 탄력적 아이피로 요청이 갈 수 있게

// aws Route 53 사용할 것
// 호스팅 영역 클릭

// 도메인 입력 후 호스팅 영역 생성

// 상세 정보를 보면 레코드
// DNS 레코드는 도메인의 이름과 관련된 정보를 나타내는 데이터
// NS : 네임서버. 인터넷에서 도메인을 ip주소로 변환하는 역할을 담당
// 도메인을 입력하면 네임서버에게 도메인 ip주소를 요청한다.
// 그래서 웹사이트에 접근할 수 있게 해준다.

// 레코드 추가
// A 레코드 : 도메인 이름을 v4 주소로 매핑
// A 레코드에 탄력적 아이피를 값으로 작성

// CNAME 레코드 : 서브도메인으로 설정
// www.ahyeon.kr로 접속했을때 ahyeon.kr로 이동하게 해주는 개념

// https로 보안 이슈 해결
// 검증된 사이트라는 것이고
// https 요청할 때 인증서를 발급받아서 인증을 요청하는데
// https 설정
// 배포한 서버에 https를 설정해서 보안 이슈를 해결
// 인증서를 발급받을 곳은 무료로 3개월짜리 인증서를 발급해주는 곳
// 3개월마다 재발급받을 수 있음
// 모질라라는 곳에서

// certbot 사용해서
// https를 간편하게 설정할 수 있음
// 3개월마다 직접 인증서를 재발급받을 필요 없이
// 알아서 3개월마다 재발급받고 메일로 알려줌

// certbot nginx랑도 호환됨. 간단하게 인증서 발급 갱신 가능
// https://certbot.eff.org/

// 설명대로 설치
// sudo snap install core
// sudo snap refresh core

// sudo snap install --classic certbot

// certbot 실행 파일에 링크 설정
// sudo ln -s /snap/bin/certbot /usr/bin/certbot

// nginx 관련 certbot 실행
// sudo certbot --nginx

// nginx default 파일을 수정
// cd /etc/nginx/sites-enabled/ 에 있는 파일
// sudo vi default

// server_name 도메인; 수정하고
// 저장 후 종료
// 다시 경로로 돌아가서 cd /home/ubuntu

// 문법 오류 확인
// sudo nginx -t

// nginx 재시작 (수정했으니까)
// sudo service nginx restart

// 3개월마다 재발급을 해주는 명령어
// sudo certbot renew

// 인증서 재발급 체크
// 실제로 인증서를 갱신하지 않고 시뮬레이션으로 체크
// 발급할때 사전에 문제가 생길지 여부를 체크
// sudo certbot renew --dry-run