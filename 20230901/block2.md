## 비트코인 백서

- 비트코인은 개인 대 개인 전자 화폐 시스템이고
- P2P 직접 거래를 제안한다.
- 개인과 개인간에서 전자 화폐 송금 시스템을 제안한다.
- satoshi Nakamoto(사토시 나카모토) 누군지 모름...
- 개발자이기 전에 경제학으로도 지식을 가지고 있었을 것으로 추측됨

- ### 개인 대 개인 거래
- 개인 대 개인 버전 전자 화폐는 금융 기관을 거치지 않고 한쪽에서 다른 쪽으로 직접 전달되는 온라인 결제를 실현한다.(우리가 사용하고 있는 금융 시스템은 금융기관을 통해서만 한쪽에서 다른쪽으로 전달되는 온라인 지불)
- 직접 돈을 전달한다하면 방법이 오프라인에서 현금 지불하면 직접 전달이 가능한데
- 온라인 같은 경우는 개인과 개인 간 구축된 시스템을 거치지 않는 이상 존재하지 않는다.
- 비트코인은 어떤 중앙 기관 없이 내가 가진 자산을 다른 사람에게 직접 전달할 수 있는 시스템을 구현한다고 보면 된다.

- ### 개인 대 개인 거래의 문제점 해결
- 이중 지불을 막기 위해 신뢰할 수 있는 제 3자가 필요했고, 이중 지불 문제를 해결하기 위해 중앙화된 기관 없이 이중 지불을 막기 위해 블록 타임스탬프(생성시간)를 기록하고 거래 내용을 해싱하고 해시 기반 작업 증명을 연결한 사슬로 만들어서 작업 증명을 재수행하지 않으면 변경할 수 없는 기록을 만든다. (블록체인이라는 단어가 여기에서 나온다. 연결한 사슬이라는 것이 블록들의 타임 스탬프를 기록하고 데이터의 위변조 없이 안전한 데이터 해시 기반 작업을 증명한다.)

- ### 가장 긴 사슬 (롱기스트 체인 룰)
- 개인 대 개인간의 네트워크이고 중앙기관 없이 체인이 여러 개로 나누어질텐데 가장 긴 체인을 선택해서 하나의 체인을 유지할 수 있는 기반을 만들어 놓은 것

- ### 비트코인이 왜 생겼냐
- 사토시 나카모토는 2008년 금융 위기를 보면서 현재 우리가 신뢰하는 중앙 기관이 실제로는 신뢰하기 어려운 기관이라고 생각했고, 비트코인을 제안하게 되었다.

### 블록체인의 4대 요소 기술
- ### 1. 블록과 트랜젝션
- 트랜잭션은 사용자의 송금 내역이 있고 송금 내역들을 하나의 블록에 포함시켜야지만 안정성을 보장할 수 있는 기반을 만들 수 있다. 그 블록들이 해시 알고리즘과 블록 채굴(POW, POS, POA)을 통해서 연결하는 형태가 블록체인

- ### 2. 분산 네트워크
- 사용자들이 언제든 네트워크에 참여할 수 있고 나갈 수 있는 것

- ### 3. 암호화
- 거래가 위변조되지 않았다고 증명할 수 있다.

- ### 4. 합의 알고리즘
- 분산 네트워크에서 중앙화된 기관이 없으니까 하나의 체인을 구성하는 것이 매우 중요하고 분산화된 네트워크에서 모든 사용자들이 납득할 수 있는 하나의 거래 내역이 필요한데 이걸 하나로 정리해주는 것이 합의 알고리즘

### 블록의 구성
- 블록은 특정 정보를 담아놓은 객체라고 보면 된다.
- 블록을 생성할 때 Header와 Body를 나눠서 생성하는 것이 아니고 블록에 대한 이해를 쉽게 하기 위해서 Header와 Body로 구분해놓은 것

### 블록의 헤더
- 버전 정보
- 이전 블록의 해시
- 몇 번째 블록인지 정보(높이)
- 블록의 생성 시간의 정보(타임 스탬프)
- 블록의 해시
- 블록의 Body의 내용을 해싱한 값(머클 루트)
- 채굴의 난이도 5라고 했을 때     연산한 값의 결과에 0이 5개 이상이면 권한을 얻음(00000). 0의 개수가 블록의 생성 시간을 난이도 상승(생성시간이 빠르면 난이도 상승?) (블록이 느리게 생성되면 난이도 하락)
- 논스 = 블록을 채굴하기 위해서 연산 작업을 몇 번 반복했는지

### 블록의 Body
- 블록에 저장할 데이터(트랜젝션 내용)

### -----------------------------------------------

### 작업 증명 POW(proof of work)란
- 비트코인의 합의 알고리즘(최초의 합의 알고리즘) 연산 작업을 기반으로 합의
- 새로운 블록을 블록체인에 추가하려면 난이도에 따른 값을 찾는 반복 작업을 해야 한다. 그 작업을 완료했다는 작업의 증명 방식
- 높은 에너지 소비. 환경 오염

### 지분 증명 POS(proof of stake)란
- 담보 같은 느낌. 보상을 받기 위해 암호화 토큰을 스테이킹(예치)하고 예치한량에 비례한 퍼센트로 확률적으로 채굴 권한을 받는다. 확률은 스테이킹한 토큰의 양에 비례한다.
- 비잔틴 결함의 이론적인 위협은 있다. 팀을 구성해서 네트워크를 방해하는 경우
- 환경 친화적. 전력 소비를 줄일 수 있다.

### 권위 증명 POA(proof of Athority)
- 권위 증명 방식은 권위 있는 기관에서 조건에 맞는 노드를 증명해서 이들간에 합의를 이루는 방식. 두나무 블록체인 서비스(DBS는 권위 증명 방식을 사용한다.)
- 네트워크에 참여한 멤버들한테 네트워크 운영에 참여할 권리를 주고 전원이 해당 권한을 위임해 투표를 진행한다.

### 블록체인의 거래 정보 변경이 불가능한 이유
- 블록의 머클 루트 계산이 이전 블록의 해시가 포함되어 있기 때문에 하나의 블록의 내용이 변경되면 변경된 블록부터 다음 블록들의 해시 변경으로 이어지기 때문에
- 거래 정보 변경 -> 머클루트 변경 -> 머클루트 변경으로 블록 해시 변경
- 쉽게 말해서 블록의 거래 정보를 변경하기 위해서 거래 정보를 변경한 블록부터 이후의 블록을 순서대로 다시 채굴 진행해야 하기 때문에 그동안 블록도 생성되고 있고 양자 컴퓨터가 개발되지 않는 이상 현 시점에서 불가능하다.
