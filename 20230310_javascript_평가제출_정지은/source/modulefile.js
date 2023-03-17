const group= {
  teamInformation: {
    teamNumber : 4,
    teamName: "SPACE BOHEMIAN",
    teamNameStory: "우주유랑단",
    teamManager: "정지은",
    teamAllMember: [
      {
        teamimg: "사진1.png",
        name: "김종완",
        teamPosition: "보컬,기타",
        githubAddress: "https://www.github.com/"
      },
      {
        teamimg: "사진2.png",
        name: "이정훈",
        teamPosition: "베이스",
        githubAddress: "https://www.github.com/"
      },
      {
        teamimg: 0,
        name: "이재경",
        teamPosition: "기타",
        githubAddress: "https://www.github.com/"
      },
      {
        teamimg: "사진3.png",
        name: "정재원",
        teamPosition: "드럼",
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
    colorSet : ["black", "gray", "#ccc", "#333"],
    breakPoint : [ "768px", "1280px",  "1920px"]
  }
}

console.log(group.teamInformation.teamAllMember[0]);
Object.entries(group.teamInformation.teamAllMember[0])



//-----------------------------------------
const root = document.getElementById('root');
const header = document.createElement('header');
root.appendChild(header);
const main = document.createElement('main');
root.appendChild(main);


const names = document.createElement('div');
main.appendChild(names);
const container = document.createElement('div');
main.appendChild(container);
const img = document.createElement('img');
container.appendChild(img);
const text = document.createElement('div');
container.appendChild(text);;

container.setAttribute('id','container');
names.setAttribute('id','names');
img.setAttribute('src',group.teamInformation.teamAllMember[0].teamimg);
text.setAttribute('id','text');
main.setAttribute('id','main');



root.style.width ='768px';
root.style.height ='200vh';

header.style.backgroundColor='slategrey';
header.style.color ='white';
header.style.width ='100%';
header.style.height ='12vh';
header.innerHTML='<h1>NELL</h1>'+group.teamInformation.teamName;
header.style.fontSize ='20px';
header.style.textAlign ='center';



main.style.backgroundColor='gray';
main.style.width ='100%';
main.style.height='70%';
header.style.fontSize ='20px';
main.style.textAlign ='center';




container.style.display='flex';
container.style.width ='100%';
container.style.height='36%';


names.textContent=group.teamInformation.teamAllMember[0].name;
text.textContent=Object.entries(group.teamInformation.teamAllMember[0]);



names.style.width ='100%';
names.style.height='5%';

img.style.width ='40%';
img.style.height='100%';

text.style.width ='60%';
text.style.height='100%';



//---------//main 안에서만 움직이는 박스1,

const box1 =document.createElement('div');
main.appendChild(box1);
box1.setAttribute('id','box1');

box1.style.backgroundColor='silver';
box1.style.width = '768px';
box1.style.height ='50%';



const nicname = document.createElement('div');
box1.appendChild(nicname);
const boxContaier = document.createElement('div');
box1.appendChild(boxContaier);
const img2 = document.createElement('img');
boxContaier.appendChild(img2);
const text2 = document.createElement('div');
boxContaier.appendChild(text2);

nicname.setAttribute('id','nicname');
boxContaier.setAttribute('id','boxContaier');
img2.setAttribute('src',group.teamInformation.teamAllMember[1].teamimg);
text2.setAttribute('id','text2');

nicname.style.width = '100%'
nicname.style.height = '15%';
boxContaier.style.width = '100%'
boxContaier.style.height = '85%';
boxContaier.style.display = 'flex';


img2.style.width = '40%';
img2.style.height ='100%';

text2.style.width = '60%';
text2.style.height ='100%';

nicname.textContent =group.teamInformation.teamAllMember[1].name;
img2.textContent='사진넣을거임';
text2.textContent=Object.entries(group.teamInformation.teamAllMember[1]);

//---------------------박스2
const box2 =document.createElement('div');
main.appendChild(box2);
box2.setAttribute('id','box2');

box2.style.backgroundColor='gainsboro';
box2.style.width = '768px';
box2.style.height ='50%';



const nicname2 = document.createElement('div');
box2.appendChild(nicname2);
const boxContaier2 = document.createElement('div');
box2.appendChild(boxContaier2);
const img3 = document.createElement('img');
boxContaier2.appendChild(img3);
const text3 = document.createElement('div');
boxContaier2.appendChild(text3);

nicname2.setAttribute('id','nicname2');
boxContaier2.setAttribute('id','boxContaier2');
img3.setAttribute('src',group.teamInformation.teamAllMember[3].teamimg);
text3.setAttribute('id','text3');

nicname2.style.width = '100%'
nicname2.style.height = '15%';
boxContaier2.style.width = '100%'
boxContaier2.style.height = '85%';
boxContaier2.style.display = 'flex';


img3.style.width = '40%';
img3.style.height ='100%';

text3.style.width = '60%';
text3.style.height ='100%';

nicname2.textContent =group.teamInformation.teamAllMember[3].name;;
img3.textContent='사진';
text3.textContent=Object.entries(group.teamInformation.teamAllMember[3]);


//-------------

addEventListener("mousewheel", e => {
  const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
  
  console.log(direction, window.scrollY);
});


window.addEventListener('scroll',function(){
  let scrollTop = main.scrollTop;
  if(window.scrollY>=500)
    box1.style.position='absolute';
    box1.style.top = '210px';
});

window.addEventListener('scroll',function(){
  let scrollTop = main.scrollTop;
  if(window.scrollY>=700)
    box2.style.position='absolute';
    box2.style.top = '280px';
});




















