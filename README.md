# Netflix clone

localStorage를 이용해서 내가 리스트에 추가한 영화/프로그램을 볼수있게 구현하였습니다.

영화나 TV 프로그램의 포스터를 클릭시에 디테일화면으로 넘어갑니다.

![ㅇㅇㅇㅇ](https://user-images.githubusercontent.com/56789064/107124633-64eeb900-68e8-11eb-82e4-6182c2d34f93.gif)


넘어간 디테일화면에서 아래의 즐겨찾기 아이콘을 클릭하면

![ㅁㅁㅁㅁ](https://user-images.githubusercontent.com/56789064/107127618-a38d6f00-68fa-11eb-8aa3-675ad5d52cff.gif)


![ㅇㅇㅇㅇㅇㅇ](https://user-images.githubusercontent.com/56789064/107127660-ef401880-68fa-11eb-9429-2691f9789971.gif)


위와같이 localStorage에 Tv와 Movie의 id를 저장합니다.
favor에는 내가 즐겨찾기한 영화/프로그램 관계없이 id를 저장하여서

<img width="406" alt="스크린샷 2021-02-07 오전 4 16 16" src="https://user-images.githubusercontent.com/56789064/107127698-3b8b5880-68fb-11eb-91aa-48ac9550e821.png">

모든 영상들을 렌더링할때 favor안에 존재하는지 확인후에 있다면 색칠되어있는 아이콘으로

없다면 색칠이 안되어있는 아이콘으로 처리되게 하였습니다.

그리고 forEach는 비동기로 루프를 돌릴때 리턴 값을 기다리지않기때문에 for (of) 로 처리하였습니다.

<img width="758" alt="스크린샷 2021-02-07 오전 2 06 06" src="https://user-images.githubusercontent.com/56789064/107124751-0c6beb80-68e9-11eb-9915-d461fd5a4f06.png">

위 사진은 localStorage의 myMovie myTv의 id들을 각각 표현한 결과입니다.