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

const footer = document.createElement('footer');
root.appendChild(footer);

const names = document.createElement('div');
main.appendChild(names);
const container = document.createElement('div');
main.appendChild(container);
const img = document.createElement('div');
container.appendChild(img);
const text = document.createElement('div');
container.appendChild(text);;

container.setAttribute('id','container');
names.setAttribute('id','names');
img.setAttribute('id','img');
text.setAttribute('id','text');
main.setAttribute('id','main');

//-------------------------------
root.style.width ='768px';
root.style.height ='200vh';

header.style.backgroundColor='#ccc';
header.style.width ='100%';
header.style.height ='10vh';
header.textContent = "제목을 뭘로 할까? ";

main.style.backgroundColor='cadetblue';
main.style.width ='100%';
main.style.height='70%';

container.style.display='flex';
container.style.width ='100%';
container.style.height='45%';


names.textContent='공욱재';
img.textContent='사진넣을거임';
text.textContent='텍스트넣을거임';

names.style.width ='100%';
names.style.height='5%';

img.style.width ='40%';
img.style.height='100%';

text.style.width ='60%';
text.style.height='100%';

footer.style.backgroundColor='salmon';
footer.style.width ='100%';
footer.style.height='20%';


//---------//main 안에서만 움직이는 박스1, 박스2

const box1 =document.createElement('div');
main.appendChild(box1);

box1.style.backgroundColor='pink';
box1.style.width = '100%';
box1.style.height ='70%';
box1.style.position = 'absolute';
box1.style.top = '1050px';














