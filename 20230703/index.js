// babel

// 자바스크립트 코드의 변환을 도와주는 도구
// 자바스크립트를 컴파일 해주는 도구

// 자바스크립트 문법이 진화를 꾸준히 했고
// ES5 -> ES6 문법이 개발되고
// ES6 문법이 개발되었는데 ES5에서 개발한 것들을 모두
// 변환하기는 힘들어서
// babel로 문법을 쉽게 고쳐서 쓰려고 변환시켜준다.

// 모듈 시스템

// ------------- commonjs = (require, module.exports) ----------- //
// a.js
// const text = "하이하이";
// module.exports = { text };

// b.js
// const {text} = require("a.js");
// console.log(text);
// -------------------------------------------------------------- //

// ------------ ES6 --------------------------------------------- //
// a.js
// const text = "하이하이";

// 1. export {text};        여러 개를 내보낼 경우
// 2. export default text;  단일로 내보낼 경우

// b.js
// 1. import {text} from "a.js"
// 2. import text from "a.js"  (text가 아닌 다른 이름으로 바꿔서 사용 가능)
// console.log(text);

// babel 기본 사용법

// babel은 기본적으로 자바스크립트로 구성되어있다.
// npm을 통해서 설치 가능

// 1. babel 기본 구성 설치

// npm init -y 기본 설정 package.json

// npm install @babel/core @babel/cli @babel/preset-env

// 2. babel 환경 구성
// .babelrc 파일 만들기
// rc = Run Commands, Run Controll 등등의 의미

/*
    json으로 설정
    {
        "presets" : ["@babel/preset-env"]
    }

*/

// 3. babel 실행
// npx babel [변환할 파일명] --out-file [내보낼 경로]
// npx babel app.js --out-file dist/app.js

// 새로운 폴더 생성

// babel02 만들고 // 모듈 시스템 변환 ES5
// npm init -y
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commonjs

// .babelrc  :  "plugins": ["@babel/plugin-transform-modules-commonjs"]
// npx babel server.js --out-file dist/server.js

// 새로운 폴더 생성
// babel03 만들고 // JSX 문법 컴파일 해보기

// npm init -y
// babel 설치
// npm install @babel/core @babel/cli
// npm install @babel/preset-react
// npx babel app.js --out-file dist/app.js
// -------------------------------------------------------------- //

// ------------ webpack --------------------//

// babel 코드 자체를 변환할때, 단일파일
// webpack : 모듈 번들러 = 여러 파일을 하나의 파일로 구성해주는 것

// js 1
// js 2
// js 3
// js 4

// 모듈
// 모듈은 프로그램을 구성할 때 구성 요소로, 관련된 데이터나 함수를 하나로 묶은 단위

// user
// user.controller
// user.service
// user.view

// 번들러
// 번들러는 의존성을 가지고 동작하는 모듈 코드들을 하나의 파일로 만들어 주는 것

// webpack 속성
// entry : 진입점을 지정. 시작점으로 사용할 모듈을 webpack에 알려줌
// output : 내보내는 번들링 방법을 결정. 생성한 번들링 파일의 위치, 이름
// loaders : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css 이미지 파일을 처리
// plugins : 추가 기능 사용시 번들 최적화 html 파일 생성이나 환경변수 삽입 등등

// babel 속성은
// presets
// plugins

// webpack 기본 사용

// webpack01 폴더
// 패키지 설치

// npm init -y
// npm install webpack webpack-cli

//
// 프로젝트 생성
// src 폴더 만들거고
// 번들링 진행

// webpack의 설정 파일
// webpack.config.js

// webpack 실행
// npx webpack

// webpack02 폴더 생성
//
// loaders 속성을 사용해서
// 다양한 유형의 파일을 모듈화할 수 있다.
// Css, Image 등등을
// 번들링해보자.

// 1. 패키지 설치
// npm init -y
// npm install webpack webpack-cli css-loader style-loader

// 2. 프로젝트 구성
// src 폴더에 index.css, index.js 두 파일 생성

// 3. webpack.config.js 추가

//npx webpack

// webpack03 폴더 생성
// webpack plugin
// html 파일을 만들자

// 패키지 설정
// npm init -y
// npm install webpack webpack-cli html-webpack-plugin

// babel 설정
// .babelrc
/*
    {
        "presets" : ["@babel/preset-env", "@babel/preset-react"]
    }
*/

// react 설치 react-dom
// npm i react react-dom

// 사용할 것들 설치
// npm i @babel/preset-env @babel/preset-react

// npm i @babel/core babel-loader
