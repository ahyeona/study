




-- -- SELECT * FROM `user`;


-- -- INSERT INTO user(user_id, user_name) VALUES ("123", "hyeon");

-- -- -- 테이블 열 검색
-- -- -- WHERE문으로 테이블을 조회해서 해당 필드가 user_id2인 값을 찾아서 조회
-- -- SELECT * FROM user WHERE user_id = "user_id2";

-- -- SELECT * FROM user WHERE user_name = "hyeon";

-- -- -- 테이블 열 수정
-- -- -- SET 해당 값을 수정할 때 사용
-- -- -- UPDATE문과 짝으로 사용한다.
-- -- UPDATE user SET gender = "여자" WHERE user_id = "user_id2";

-- -- UPDATE user SET user_pw = "0000", user_name = "hyeon2", gender = "" WHERE user_id="user_id2";

-- USE test15;

-- -- -- 테이블 열 삭제
-- -- DELETE FROM user WHERE user_id = "user_id2";

-- -- 게시판 테이블 한 번 만들기
-- -- 이름은 boarder
-- -- 컬럼은 id, content, writer, date, likes
-- -- id = INT 11자, 자동으로 증가, 고유키
-- -- content = TEXT 타입 null이어도 추가가능하게
-- -- writer = VARCHAR 40자 null이면 안되게
-- -- likes = int 11자 기본값 0

-- -- row를 6개 추가하기

-- CREATE TABLE boarder (id INT(11) AUTO_INCREMENT PRIMARY KEY, content TEXT, writer VARCHAR(40) NOT NULL, likes INT(11) DEFAULT 0);

-- INSERT INTO boarder (content, writer) VALUES ("contenttttt", "writer11");
-- INSERT INTO boarder (writer, likes) VALUES ("writer22", 2);
-- INSERT INTO boarder (content, writer, likes) VALUES ("33contenttttt", "writer33", 1);
-- INSERT INTO boarder (content, writer) VALUES ("4content", "writer444");
-- INSERT INTO boarder (content, writer, likes) VALUES ("content55555tttt", "writer55", 5);
-- INSERT INTO boarder (writer, likes) VALUES ("writer66", 6);

-- -- 여러개 추가 가능
-- -- INSERT INTO boarder (content, writer, likes) VALUES ("content55555tttt", "writer55", 5),("content55555tttt", "writer55", 5),("content55555tttt", "writer55", 5);



-- SELECT * FROM boarder;
-- SELECT id, likes FROM boarder WHERE id=1;

-- -- mysql -u root -p : CLI 환경에서 mysql 접속
-- -- create databases [데이터베이스 이름] : 데이터베이스 생성(엑셀 파일 생성 같은 의미)
-- -- drop database [데이터베이스 이름] : 데이터베이스 삭제
-- -- create table [테이블 이름] ([필드명 데이터타입], [필드명 데이터타입]) : table 생성
-- -- show databases : 모든 데이터베이스 조회
-- -- show tables : 모든 테이블 조회
-- -- use [데이터베이스 이름] : 사용할 데이터베이스 선택(엑셀 파일 열기 같은 느낌)
-- -- desc [테이블 이름] : 테이블의 필드를 한 줄로 확인(엑셀과 비교)
-- -- select 필드1, 필드2 FROM [테이블 이름] : 필드1, 필드2에 대한 테이블 전체 조회
-- -- delete FROM [테이블 이름] WHERE [필드]="값" : 테이블에 필드가 == 값인 친구를 삭제
-- -- select * from [테이블 이름] : 테이블 전체 조회
-- -- insert into [테이블 이름] (필드1, 필드2) values (필드1의 값, 필드2의 값) : 테이블에 값 추가 필드1에 값 1을 넣고 필드2에 값 2를 넣고
-- -- update [테이블 이름] set [필드명]="수정할 값", [필드명2]="수정할 값2" where 필드="값" : 테이블 명에서 필드명을 새로운 값으로   필드명과 필드명2를 새로운 값, 새로운 값2으로 바꾼다.
-- -- select * from [테이블명] where [필드] LIKE "%AB" : 필드에 해당되는 내용 중 AB로 시작하는 데이터 조회
-- -- select * from [테이블명] where [필드] LIKE "AB%" : 필드에 해당되는 내용 중 AB로 끝나는 데이터 조회
-- -- alter table [기존 테이블명] RENAME [새로운 테이블 이름] : 테이블 이름 바꾸기
-- -- ALTER TABLE [테이블 이름] CHANGE [기존 컬럼 이름][새로운 컬럼 이름] Type : 컬럼의 이름 바꾸기
-- -- ALTER TABLE [테이블 이름] MODIFY [컬럼 이름] TYPE : 컬럼의 타입을 변경
-- -- DELETE FROM [테이블 이름] WHERE [필드 값] = "값" : 조건에 맞는 모든 값 삭제
-- -- ALTER TABLE [테이블 이름] DROP [필드 이름] : 해당 필드를 테이블에서 제거한다.
-- -- ALTER TABLE [테이블 이름] AUTO_INCREMENT = 0, 1 : 해당 테이블의 AUTO_INCREMENT를 초기화시켜준다.
-- -- ALTER TABLE [테이블 이름] ADD [필드 이름] TYPE : 해당 테이블 맨 뒤로 필드를 추가한다.
-- -- ALTER TABLE [테이블 이름] ADD [필드 이름] TYPE FIRST : 해당 테이블 맨 앞에 필드를 추가한다.
-- -- SELECT * FROM [테이블 이름] ORDER BY [필드 이름] DESC | ASC: ORDER BY 필드명 기준으로 DESC 내림차순, ASC 오름차순으로 정렬





-- -- ALTER TABLE boarder RENAME boarder2;
-- -- SHOW TABLES;
-- -- DESC boarder2;
-- -- ALTER TABLE boarder2 CHANGE content content2 TEXT;
-- -- ALTER TABLE boarder2 MODIFY content2 CHAR(5);
-- -- SELECT * FROM boarder2;
-- -- DELETE FROM boarder2 WHERE user_name="hyeon";


-- CREATE Table user(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE Table post(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(20)
-- );

-- SHOW TABLES;
-- -- post 테이블에 userID 키 추가 타입은 int
-- ALTER Table post ADD COLUMN userID INT;
-- DESC post;

-- -- ADD CONSTRAINT 제약 조건 명령어(오류나면 확인하기 위해서)(임의로 지정할 수 있다.)
-- -- FOREIGN KEY 참조키를 지정 userID
-- -- REFERENCES 참조키가 참조하는 테이블의 열을 지정
-- -- 참조할 테이블 지정 user로
-- ALTER Table post ADD CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user (id);

-- INSERT INTO user (name) VALUES ("이름");
-- INSERT INTO post (title, userID) VALUES ("123", 3);

-- -- INNER JOIN 테이블을 조회하는데 참조키를 가지고 관계가 맺어져있는 테이블 조회
-- SELECT * FROM user INNER JOIN post ON user.id = post.userID WHERE user.id=3;
-- SELECT user.id, post.title FROM user INNER JOIN post ON user.id = post.userID WHERE user.id=2;

-- -- 오늘 잠시 간단하게 만들어 볼 것
-- -- 게시판 만들었는데 유저가 글을 등록하고
-- -- 해당 유저가 작성한 글을 볼 수 있는 페이지
