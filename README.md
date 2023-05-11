<p align="middle" >
  <img width="200px;" src="./src/images/lotto_ball.png"/>
</p>
<h2 align="middle">행운의 로또</h2>
<h3 align="middle">HTML / CSS / JavaScript 활용 연습 Part02</h3>
<p align="middle">DEMO : https://d-charlie-kim.github.io/Lotto/</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!



<div height="400px" align="middle">

  https://github.com/d-charlie-kim/Lotto/assets/74645799/0678c45e-8299-4f6b-94e7-34b3cb6b91a5

</div>


### 🎯 step1 구입 기능

- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 소비자는 **자동 구매**를 할 수 있어야 한다.
- [x] 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.

### 🎯🎯 step2 당첨 결과 기능

- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

### 🎯🎯🎯 step3 수동 구매

- [ ] 소비자는 수동 구매(스스로 구매 번호를 입력)를 할 수 있어야 한다.
  - 수동 구매를 위한 input UI는 스스로 구현한다.
- [ ] 수동 구매 후 남는 금액이 있다면 자동으로 구매할 수 있어야 한다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br><br>

## 💟 기능 구현 목록

### ▶️ 구입 기능

- [x] 구입 금액을 입력 받는다.
- [x] 구입 금액은 숫자여야 한다.
- [x] 구입 금액은 1000원 단위여야 한다.
- [x] 잘못된 입력이 들어왔을 때 에러 처리
- [x] 자동 구매 입력 시 랜덤으로 번호 6개 뽑기
- [x] 뽑힌 6개의 번호 유요한 복권 번호인지 확인
- [x] 구입한 개수에 따라서 몇 개를 구매했는지 업데이트
- [x] 구매한 개수에 따라서 복권 이미지 업데이트
- [x] 번호보기 버튼 클릭 시, 구매한 개수에 따른 복권 번호 출력
- [x] 복권 번호 출력을 위한 레이아웃 구성
- [x] 다시 번호보기 토글 버튼 클릭 시, 복권 번호들이 사라지고 다시 원래대로 돌아오기
- [x] 구입 버튼 클릭 시, 입력한 구매액 초기화
- [x] 너무 큰 금액은 입력받지 못하게(최대 구매액 10,000,000원)

### ▶️ 당첨 결과 기능

- [x] 당첨 번호 와 보너스 번호를 입력 받는다.
- [x] 당첨 번호 와 보너스 번호가 중복되는지 확인
- [x] 당첨 번호 와 보너스 번호가 범위 내의 번호인지 확인
- [x] 당첨 번호 와 보너스 번호가 숫자 인지 확인
- [x] 구매한 개수에 따른 통계 및 수익률 계산
- [x] 미리 당첨 등수에 따른 당첨금을 세팅한다.
      <br> (1등 2,000,000,000원 :: 2등 30,000,000원 :: 3등 1,500,000원 :: 4등 50,000원 :: 5등 5,000원)
- [x] 당첨 번호의 개수에 따라서 등수를 계산한다.
      <br> (모두 동일하면 1등, 보너스 번호와 숫자 5개가 같으면 2등, 숫자 5개가 같으면 3등, 숫자 4개가 같으면 4등, 숫자 3개가 같으면 5등, 이하 낙첨)
- [x] 모달 창 위에 계산된 통계 및 수익률 출력
- [x] 다시 시작하기 버튼 클릭 시 모든게 초기화 되고 처음 화면으로 돌아가기

### ▶️ 수동 구매

- [ ] 수동 구매 후 남는 금액을 확인하기 위해 현재 보유 금액이 표시되는 부분 구성
- [ ] 돈을 추가할 수 있는 버튼 구성
- [ ] 돈이 없을 때 자동, 수동 불문하고 구매할 수 없는 기능
- [ ] 수동 구매를 위해 번호를 입력할 수 있는 레이아웃 구성
- [ ] 구매를 확인할 수 있는 버튼 구성
- [ ] 한장 씩 수동 구매 가능하게 한번 구매 시 1000원 차감
- [ ] 입력된 번호가 숫자인지 확인
- [ ] 입력된 번호에 중복된 번호가 있는지 확인
- [ ] 입력된 번호가 로또 숫자 범위 내의 숫자들인지 확인
- [ ] 잘못된 입력이 들어왔을 때 에러처리

<br>

## 💭 기본 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 변수 선언시 [var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var) 를 사용하지 않는다. [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const) 와 [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 을 사용한다.
- [import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import) 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
- [template literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)을 이용해 데이터와 html string을 가독성 좋게 표현한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-lotto/blob/main/LICENSE) licensed.
