// 타입스크립트로 로또 번호 추첨기를 만드는데 전략 패턴으로 제작
// 로또 번호인데
// 4개, 6개, 8개 번호를 뽑는 로직 각각 있음
// 추가 작업이 들어오면 로또 번호를 12개 더 뽑을 수 있는데 전략 패턴으로 작업 구성(확장성 있게. 유지보수 편하게)
// 클래스 사용 이유 : 유지보수 편하게

// interfaces 폴더
// 입력받을 값의 구조 정의

// strategy 폴더
// 로또 함수명 정의한 interface 파일 작성
// 4개, 6개, 8개 로또 뽑는 클래스 파일 각각 작성
// strategy 파일 - 해당 타입에 따른 로직을 정해주는 클래스 정의

// service 폴더
// 전략 패턴 로또 로직 객체??

// controller 파일
// 로또 타입 입력받아서 service 객체에 전달

// index.ts 파일에서 동적 생성해서 로또 추첨

import Lotto4 from "./strategy/lotto4.strategy";
import Lotto6 from "./strategy/lotto6.strategy";
import Lotto8 from "./strategy/lotto8.strategy";
import Lotto12 from "./strategy/lotto12.strategy";
import { Strategy } from "./strategy/strategy";

import LottoService from "./service/lotto.service";
import LottoController from "./lotto.controller";

const strategy = new Strategy();

strategy.set(4, new Lotto4());
strategy.set(6, new Lotto6());
strategy.set(8, new Lotto8());

// 12개 추가
strategy.set(12, new Lotto12());

const lottoService = new LottoService(strategy);
const lottoController = new LottoController(lottoService);

console.log(lottoController.lottery({count : 6}));