const _EXAMDATA = {
  teamInformation: {
    teamNumber : 0,
    teamName: "팀명 작성",
    teamNameStory: "팀명은 이런이유로 만들었답니다!",
    teamManager: "공욱재",
    teamAllMember: [
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
    ]
  },
  trainingInformation: {
    subject : [  
    "웹프로그래밍기본(HTML5&CSS3)",
    "Git&GitHub",
    "Babel Javascript",
    "프레임워크 기초",
    "Project C(선택)",
    "백엔드프레임워크런타임",
    "프레임워크활용",
    "Project A(데이터 기반 주식 추천 서비스)",
    "Project B(교통정보제공서비스)",
    ]
  },
  designInformation: {
    colorSet : ["cadetblue", "salmon", "#ccc", "#333"],
    breakPoint : [ "768px", "1280px",  "1920px"]
  }
}


//-----------------------------------------
const root = document.getElementById('root');
const header = document.createElement('header');
root.appendChild(header);
const main = document.createElement('main');
root.appendChild(main);

//main 안에서만 움직이는 박스1, 박스2
const box1 =document.createElement('div');
main.appendChild(box1);
const box2 =document.createElement('div');
main.appendChild(box2);
const footer = document.createElement('footer');
root.appendChild(footer);

//-------------------------------
root.style.width ='768px';
root.style.height ='200vh';

header.style.backgroundColor='#333';
header.style.width ='100%';
header.style.height ='10vh';

main.style.backgroundColor='cadetblue';
main.style.width ='100%';
main.style.height='70%';

footer.style.backgroundColor='salmon';
footer.style.width ='100%';
footer.style.height='30%';

box1.style.backgroundColor='#ccc';
box1.style.width = '100%';
box1.style.height ='40%';
box1.style.position = 'absolute';
box1.style.top = '300px';

box2.style.backgroundColor='pink';
box2.style.width = '100%';
box2.style.height ='40%';
box2.style.position = 'absolute';
box2.style.top = '700px';












