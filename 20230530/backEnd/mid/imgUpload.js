const multer = require("multer");
const path = require("path");

// 한글 파일명인 파일을 업로드하면 파일명이 깨지는 현상 해결 위해 설치
const iconv = require('iconv-lite');

// multer 함수 안에 매개변수로 객체 형태의 인자를 전달
// storage 속성을 통해서 업로드된 파일을 어디에 저장시킬지 지정할 수 있음
exports.Upload = multer({
    storage : multer.diskStorage({
        // diskStorage메서드를 사용해서 서버 컴퓨터의 하드 디스크에 업로드 파일을 저장한다.
        // 객체로 인자값을 전달

        // destination 속성을 사용하면 파일이 저장될 폴더를 설정할 수 있음
        destination : (req, file, done) => {
            // done 콜백 함수의 두번째 인자값으로 폴더의 이름을 설정해주면 됨
            // 서버 컴퓨터 폴더명
            // 오류 내용이 있으면 작성해주면 될 것
            done(null, "uploads/");
            // 첫번째 매개변수는 에러 처리 부분
            // 두번째 매개변수를 파일이 저장될 폴더 이름
        },

        // filename 속성값에서 매개변수 file.originalname은 클라이언트가 업로드한 파일의 이름을 나타냄
        filename : (req, file, done)=>{
            // file.originalname : 사용자가 업로드한 파일 원본명

            // extname 메서드 : 파일의 경로를 매개변수로 받고 파일의 확장자를 추출해줌
            const ext = path.extname(file.originalname);

            // 파일을 저장하는데 이름이 전부 같으면 (2)이런게 생김
            // 이름을 예측할 수 없기 때문에 파일 관리가 힘들어짐
            // 시간을 같이 이름에 포함시켜서 저장하면 파일명이 겹칠 일이 없음
            // 1이라는 이미지 이름을 저장하는데 20230530 이런 식으로 날짜와 시간을 추가해주면

            // basename 메서드 : 확장자를 추가 또는 제거할 수 있음
            // a.js -> a로 변환
            // 첫번째 매개변수로 파일의 경로
            // 두번째 매개변수로 옵션()
            // const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;

            // 한글 파일명 깨지지 않도록 설정
            const filename = iconv.decode(Buffer.from(path.basename(file.originalname, ext), 'binary'), 'utf-8') + "_" + Date.now() + ext;

            // done(null, filename);
            done(null, filename);
            // 첫번째 매개변수는 에러 처리 부분
            // 두번째 매개변수는 서버 컴퓨터에 실제로 저장할 파일명
        }
    }),

    // 파일의 사이즈 설정(최대 파일의 사이즈 설정)
    limits : {fileSize : 5 * 1024 * 1024}, // 5MB

});
