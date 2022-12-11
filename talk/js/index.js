const setTime = document.querySelectorAll(".set_time");
const timeList = document.querySelectorAll(".time_list ul li");
const setTimeText = document.querySelector(".time_text");
const close1 = document.querySelector(".new_chatting .close");
const chattingsettingok = document.querySelector(".chatting-setting-ok");
const swiper = new Swiper(".swiper", {});
const home = document.querySelector(".home");
const mainSection = document.querySelector(".section-main");
const chattinglistSection = document.querySelector(".section-chattinglist");
const section = document.querySelectorAll(".section");
const footer = document.querySelector(".footer_nav");
const myProfile = document.querySelector(".section-myProfile");
const nav = document.querySelector(".nav");
const userProfileModal = document.querySelectorAll(".profile_img");
const userProfile = document.querySelectorAll(".section-userProfile");
const sectioninvite = document.querySelector(".section-invite");
const navtitle = document.querySelector(".nav_title");
const friendadd = document.querySelector(".friend_add");
const sectionchatting = document.querySelector(".section-chatting");
const offset = document.body.offsetHeight;
const timeWrap = document.querySelectorAll(".time_wrap");
const chattingCheck = document.querySelector(".chatting_check_popup");
const chattinglistli = document.querySelectorAll(".section-chattinglist-li");
const settingtext = document.querySelector(".setting_text");
const titletext = document.querySelector(".title_wrap");
const arrowwarp = document.querySelector(".arrow_wrap");
const friendaddtext = document.querySelector(".friend_add em");
const chattingPlusIcon = document.querySelector(".chatting_input_plusicon");
const chattingInputWrap = document.querySelector(".chatting_input_wrap");
const mainsetting = document.querySelector(".section-tsetting");
const chattingGroup = document.querySelectorAll(".friend_party-profile_wrap");
console.log(chattingGroup);

//  친구 초대 모달창 이벤트
const modalYesbtn = document.querySelector(".yesbtn");
const modalNobtn = document.querySelector(".nobtn");
const openButton = document.querySelectorAll(".btn");

const modal = document.querySelector(".modal1");
const modalBackground = modal.querySelector(".modal_background");

const sectionchattingadd = document.querySelector(".section-chatting-add");


const newChattingContainer = document.querySelectorAll(
  ".new_chatting_container"
);
const profilewrap = document.querySelectorAll(".section-main .profile_wrap");
 
console.log(profilewrap);
/* 채팅방 설정창 X아이콘 클릭시 채팅방 설정 닫기 */
close1.addEventListener("click", chattingsettingclose);
chattingsettingok.addEventListener("click", chattingsettingclose);

function chattingsettingclose() {
  for (let i = 0; i < newChattingContainer.length; i++) {
    newChattingContainer[i].classList.remove("active");
  }
}

/* 시간리스트 영역 밖 클릭시 리스트 닫기 */
newChattingContainer.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target === item) {
      for (let i = 0; i < newChattingContainer.length; i++) {
        newChattingContainer[i].classList.remove("active");
      }
    }

    for (let i = 0; i < setTime.length; i++) {
      if (e.target != setTime[i]) {
        setTime[i].classList.remove("active");
      }
    }
  });
});

/* setTime 클릭시 time리스트 보이기 */
setTime.forEach((item) => {
  item.addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
});

/* 아이템 리스트 클릭시 setTime에 값 넣기 */
timeList.forEach((item) => {
  item.addEventListener("click", function () {
    setTimeText.innerHTML = item.textContent;
  });
});



modalNobtn.addEventListener("click", displayModal);
modalYesbtn.addEventListener("click", displayModal);
modalBackground.addEventListener("click", displayModal);

// 단체톡방 이벤트
for (let i = 0; i < chattingGroup.length; i++) {
  chattingGroup[i].addEventListener("click", chatting);
}

function displayModal() {
  modal.classList.toggle("hidden");
}
for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener("click", displayModal);
}

// 채팅창 플러스버튼
chattingPlusIcon.addEventListener("click", function () {
  chattingInputWrap.classList.toggle("plus");
});

// 스크롤
const scroll = (Y) => {
  setTimeout(() => {
    window.scrollTo(0, Y);
  }, 0);
};
// 모든창 닫기
function closeall() {
  for (let i = 0; i < section.length; i++) {
    section[i].classList.add("dis-none");
  }
  sectioninvite.classList.add("dis-none");
  sectionchattingadd.classList.add("dis-none");
  chattingInputWrap.classList.add("dis-none");
  mainsetting.classList.add("dis-none");
  userProfile[0].classList.add("dis-none");
  footer.classList.remove("dis-none");
  settingtext.classList.remove("dis-none");

  settingtext.onclick = tsetting;

  navtitle.innerHTML = "";
  changeColor();
}

// 프로필모달 이벤트
for (let i = 0; i < userProfileModal.length; i++) {
  userProfileModal[i].addEventListener("click", click);
}
for (let i = 0; i < profilewrap.length; i++) {
  profilewrap[i].addEventListener("click", click);
}

// 채팅목록 이벤트
for (let i = 0; i < chattinglistli.length; i++) {
  chattinglistli[i].addEventListener("click", chatting);
}

// 프로필모달창
function click(e) {
  // window.alert(this.innerHTML);
  console.log("프로필클릭");
  userProfile[0].classList.remove("dis-none");
}
// 프로필 모달창 없애기
function back() {
  console.log("프로필없애기클릭");
  userProfile[0].classList.add("dis-none");
}
// 채팅목록
function chattingList() {
  closeall();

  arrowwarp.classList.add("dis-none");
  chattinglistSection.classList.remove("dis-none");
  settingtext.classList.remove("dis-none");
  friendadd.classList.remove("dis-none");
  titletext.classList.remove("dis-none");

  friendaddtext.innerHTML = "친구초대";

  friendadd.onclick = invite;

  scroll(0);
}
// 친구초대
function invite() {
 
  closeall();
  sectioninvite.classList.remove("dis-none");
  friendadd.classList.add("dis-none");
  settingtext.classList.remove("dis-none");

  titletext.classList.add("dis-none");
  arrowwarp.classList.remove("dis-none");
  arrowwarp.onclick = kikitalk;

  navtitle.innerHTML = "친구초대";
  scroll(0);
}
// 채팅방
function chatting(e) {
  closeall();
 
  chattingInputWrap.classList.remove("dis-none");
  sectionchatting.classList.remove("dis-none");
  friendadd.classList.remove("dis-none");
  settingtext.classList.remove("dis-none");
  arrowwarp.classList.remove("dis-none");
  titletext.classList.add("dis-none");
  footer.classList.add("dis-none");
  navtitle.innerHTML = "채팅방";
  friendaddtext.innerHTML = "친구추가";
  friendadd.onclick = chattingFriendAdd;
  arrowwarp.onclick = chattingList;
  settingtext.onclick = modalsetting;
  scroll(offset);
}
// 키키톡
function kikitalk() {
  const chattingSetting = document.querySelector(".chatting_setting");
 

  closeall();

  friendadd.classList.remove("dis-none");
  mainSection.classList.remove("dis-none");
  chattingInputWrap.classList.add("dis-none");
  arrowwarp.classList.add("dis-none");
  settingtext.classList.remove("dis-none");
  titletext.classList.remove("dis-none");
  settingtext.classList.replace("chatting_setting", "setting");
  sectionchattingadd.classList.add("dis-none");
  navtitle.innerHTML = "";
  friendaddtext.innerHTML = "친구초대";
  friendadd.onclick = invite;
}
//모달창 열기
timeWrap.forEach(function (item) {
  item.addEventListener("click", function () {
    chattingCheck.classList.add("active");
  });
});

//모달창 닫기
chattingCheck.addEventListener("click", function (e) {
 
  this.classList.remove("active");
});

// 채팅방에서 친구추가
function chattingFriendAdd() {
  sectionchattingadd.classList.remove("dis-none");
  sectionchatting.classList.add("dis-none");
  chattingInputWrap.classList.add("dis-none");
  settingtext.classList.add("dis-none");
  friendadd.classList.add("dis-none");
  navtitle.innerHTML = "채팅방 추가";
  arrowwarp.onclick = chatting;
  scroll(0);
}

// 메인 설정
function tsetting() {
  closeall();
  mainSection.classList.add("dis-none");
  titletext.classList.add("dis-none");
  friendadd.classList.add("dis-none");
  settingtext.classList.add("dis-none");
  mainsetting.classList.remove("dis-none");
  arrowwarp.classList.remove("dis-none");
  arrowwarp.onclick = kikitalk;
  navtitle.innerHTML = "설정";
}

// 설정안에 버튼
const $toggle = document.querySelectorAll(".toggleSwitch");

$toggle.forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("active");
  };
});

function modalsetting() {
  newChattingContainer[0].classList.add("active");
  console.log("모달클릭");
}
//
// 내 프로필 모달창
function myclick(e) {
  // window.alert(this.innerHTML);
  console.log("클릭");
  myProfile.classList.remove("dis-none");
}
// 프로필 모달창 없애기
function myback() {
  console.log("클릭");
  myProfile.classList.add("dis-none");
}

// 채팅방 색 바꾸기
function changeColor(color) {
  const arr = ["dark", "blue", "green"];
 
  console.log(color);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (color === arr[i]) {
      sectionchatting.classList.add(arr[i]);
      nav.classList.add(arr[i]);
    } else {
      sectionchatting.classList.remove(arr[i]);
      nav.classList.remove(arr[i]);
    }
  }

  
}

 // 친구초대포인트 생성 및 버튼 생성

// const invitelist = document.querySelector(".friend_invite");
// loadinivteData();
 


// function randommap() {
//   let randompoint = Math.random() * (10 - 1) + 1;
//   let a = randompoint.toFixed(1);

//   return Math.round(a * 100);
// }

// function inviteapoint(obj) {
//   invitelist.innerHTML = "";

//   for (let i = 0; i < obj.length; i++) {
//     let randomPoint = randommap();
//     let pointBtn = "";
//     if (obj[i].tr_ex_point == 0) {
//       pointBtn =
//         `<div class="btn_wrap">
//       <button class="btn btn5">` +
//         randomPoint +
//         `P 초대</button>
//         </div>
//         </div>
//         </li>`;
//     } else {
//       pointBtn = `<div class="btn_wrap">
//           <button class="btn btn5">초대중</button>
//             </div>
//             </div>
//             </li>`;
//     }
//     // if (dataListP[i].state === 1) {
//     invitelist.innerHTML += `      <li>
//               <div class="profile">
//       <div class="profile_wrap">
//       <div class="profile_img">
//       <img src="../img/user/1.jpg" alt="테스트 이미지" 
//                 onerror="this.src='${onerrorImg}';" />
//       </div>
//       <div class="profile_name">
//       <em>${obj[i].tr_re_name} </em>
//       <p></p>
//       </div>
//       </div>${pointBtn}`;

//     // }
//   }
// }