# Netflix clone

localStorage를 이용해서 내가 리스트에 추가한 영화/프로그램을 볼수있게 구현하였습니다.

영화나 TV 프로그램의 포스터를 클릭시에 디테일화면으로 넘어갑니다.

![ㅇㅇㅇㅇ](https://user-images.githubusercontent.com/56789064/107124633-64eeb900-68e8-11eb-82e4-6182c2d34f93.gif)


넘어간 디테일화면에서 아래의 아이콘을 클릭하면

![image](https://user-images.githubusercontent.com/56789064/107124518-bba7c300-68e7-11eb-9c3b-4265cb410f6c.png)

<img width="555" alt="스크린샷 2021-02-07 오전 1 57 50" src="https://user-images.githubusercontent.com/56789064/107124540-e3972680-68e7-11eb-8c13-c8573075c6b8.png">

위와같이 localStorage에 Tv와 Movie의 id들을 저장합니다.

forEach는 비동기를 시행시에 값이 되돌아오는것을 기다리지않기때문에 for (of) 로 처리하였습니다.

<img width="758" alt="스크린샷 2021-02-07 오전 2 06 06" src="https://user-images.githubusercontent.com/56789064/107124751-0c6beb80-68e9-11eb-9915-d461fd5a4f06.png">

아래와같이 localStorage의 id에 맞춰서 모아줍니다.