// 트레이닝 예시 데이터
const trainingData = [
    { front: "images/rubber3_front.png", side: "images/rubber3_side.png", back: "images/rubber3_back.png", zoom: "images/rubber3_zoom.png", answer: ["고무전 이물", "고무전", "고무전이물"] },
    {
        front: "images/rubber1_front.png",
        side: "images/rubber1_side.png",
        back: "images/rubber1_back.png",
        zoom: "images/rubber1_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/glass1_front.png",
        side: "images/glass1_side.png",
        back: "images/glass1_back.png",
        zoom: "images/glass1_zoom.png",
        answer: ["유리", "유리 이물", "유리이물"]
      },
      {
        front: "images/leak1_front.png",
        side: "images/leak1_side.png",
        back: "images/leak1_back.png",
        zoom: "images/leak1_zoom.png",
        answer: "누액"
      },
      {
        front: "images/rubber2_front.png",
        side: "images/rubber2_side.png",
        back: "images/rubber2_back.png",
        zoom: "images/rubber2_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/white1_front.png",
        side: "images/white1_side.png",
        back: "images/white1_back.png",
        zoom: "images/white1_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/leak2_front.png",
        side: "images/leak2_side.png",
        back: "images/leak2_back.png",
        zoom: "images/leak2_zoom.png",
        answer: "양품"
      },
      {
        front: "images/leak4_front.png",
        side: "images/leak4_side.png",
        back: "images/leak4_back.png",
        zoom: "images/leak4_zoom.png",
        answer: "누액"
      },
      {
        front: "images/white2_front.png",
        side: "images/white2_side.png",
        back: "images/white2_back.png",
        zoom: "images/white2_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/leak3_front.png",
        side: "images/leak3_side.png",
        back: "images/leak3_back.png",
        zoom: "images/leak3_zoom.png",
        answer: "양품"
      },
      {
        front: "images/leak5_front.png",
        side: "images/leak5_side.png",
        back: "images/leak5_back.png",
        zoom: "images/leak5_zoom.png",
        answer: "누액"
      },
      {
        front: "images/leak6_front.png",
        side: "images/leak6_side.png",
        back: "images/leak6_back.png",
        zoom: "images/leak6_zoom.png",
        answer: "누액"
      },
      {
        front: "images/rubber3_front.png",
        side: "images/rubber3_side.png",
        back: "images/rubber3_back.png",
        zoom: "images/rubber3_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/glass2_front.png",
        side: "images/glass2_side.png",
        back: "images/glass2_back.png",
        zoom: "images/glass2_zoom.png",
        answer: ["유리", "유리 이물", "유리이물"]
      },
      {
        front: "images/black1_front.png",
        side: "images/black1_side.png",
        back: "images/black1_back.png",
        zoom: "images/black1_zoom.png",
        answer: ["검정", "검정 이물", "검정이물"]
      },
      {
        front: "images/rubber4_front.png",
        side: "images/rubber4_side.png",
        back: "images/rubber4_back.png",
        zoom: "images/rubber4_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/white3_front.png",
        side: "images/white3_side.png",
        back: "images/white3_back.png",
        zoom: "images/white3_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/black2_front.png",
        side: "images/black2_side.png",
        back: "images/black2_back.png",
        zoom: "images/black2_zoom.png",
        answer: ["검정", "검정 이물", "검정이물"]
      },
      {
        front: "images/syringe4_front.png",
        side: "images/syringe4_side.png",
        back: "images/syringe4_back.png",
        zoom: "images/syringe4_zoom.png",
        answer: ["파손", "시린지파손", "시린지 파손"]
      },
      {
        front: "images/white4_front.png",
        side: "images/white4_side.png",
        back: "images/white4_back.png",
        zoom: "images/white4_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/syringe3_front.png",
        side: "images/syringe3_side.png",
        back: "images/syringe3_back.png",
        zoom: "images/syringe3_zoom.png",
        answer: ["파손", "시린지파손", "시린지 파손"]
      },
      {
        front: "images/black4_front.png",
        side: "images/black4_side.png",
        back: "images/black4_back.png",
        zoom: "images/black4_zoom.png",
        answer: ["검정", "검정 이물", "검정이물"]
      },
      {
        front: "images/thread1_front.png",
        side: "images/thread1_side.png",
        back: "images/thread1_back.png",
        zoom: "images/thread1_zoom.png",
        answer: ["실", "실 이물", "실이물"]
      },
      {
        front: "images/glass3_front.png",
        side: "images/glass3_side.png",
        back: "images/glass3_back.png",
        zoom: "images/glass3_zoom.png",
        answer: ["유리", "유리 이물", "유리이물"]
      },
      {
        front: "images/container_front.png",
        side: "images/container_side.png",
        back: "images/container_back.png",
        zoom: "images/container_zoom.png",
        answer: ["용기스크래치", "용기 스크래치", "스크래치"]
      },
      {
        front: "images/rubber5_front.png",
        side: "images/rubber5_side.png",
        back: "images/rubber5_back.png",
        zoom: "images/rubber5_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/white5_front.png",
        side: "images/white5_side.png",
        back: "images/white5_back.png",
        zoom: "images/white5_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/syringe2_front.png",
        side: "images/syringe2_side.png",
        back: "images/syringe2_back.png",
        zoom: "images/syringe2_zoom.png",
        answer: ["파손", "시린지파손", "시린지 파손"]
      },
      {
        front: "images/glass4_front.png",
        side: "images/glass4_side.png",
        back: "images/glass4_back.png",
        zoom: "images/glass4_zoom.png",
        answer: ["유리", "유리 이물", "유리이물"]
      },
      {
        front: "images/container2_front.png",
        side: "images/container2_side.png",
        back: "images/container2_back.png",
        zoom: "images/container2_zoom.png",
        answer: ["용기스크래치", "용기 스크래치", "스크래치"]
      },
      {
        front: "images/black3_front.png",
        side: "images/black3_side.png",
        back: "images/black3_back.png",
        zoom: "images/black3_zoom.png",
        answer: ["검정", "검정 이물", "검정이물"]
      },
      {
        front: "images/glass5_front.png",
        side: "images/glass5_side.png",
        back: "images/glass5_back.png",
        zoom: "images/glass5_zoom.png",
        answer: ["유리", "유리 이물", "유리이물"]
      },
      {
        front: "images/syringe1_front.png",
        side: "images/syringe1_side.png",
        back: "images/syringe1_back.png",
        zoom: "images/syringe1_zoom.png",
        answer: ["파손", "시린지파손", "시린지 파손"]
      },
      {
        front: "images/rubber6_front.png",
        side: "images/rubber6_side.png",
        back: "images/rubber6_back.png",
        zoom: "images/rubber6_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/thread2_front.png",
        side: "images/thread2_side.png",
        back: "images/thread2_back.png",
        zoom: "images/thread2_zoom.png",
        answer: ["실", "실 이물", "실이물"]
      },
      {
        front: "images/contaioner3_front.png",
        side: "images/contaioner3_side.png",
        back: "images/contaioner3_back.png",
        zoom: "images/contaioner3_zoom.png",
        answer: "양품"
      },
      {
        front: "images/rubber7_front.png",
        side: "images/rubber7_side.png",
        back: "images/rubber7_back.png",
        zoom: "images/rubber7_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/white6_front.png",
        side: "images/white6_side.png",
        back: "images/white6_back.png",
        zoom: "images/white6_zoom.png",
        answer: ["흰", "흰 이물", "흰이물"]
      },
      {
        front: "images/rubber8_front.png",
        side: "images/rubber8_side.png",
        back: "images/rubber8_back.png",
        zoom: "images/rubber8_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/syringe5_front.png",
        side: "images/syringe5_side.png",
        back: "images/syringe5_back.png",
        zoom: "images/syringe5_zoom.png",
        answer: ["파손", "시린지파손", "시린지 파손"]
      },
      {
        front: "images/rubber9_front.png",
        side: "images/rubber9_side.png",
        back: "images/rubber9_back.png",
        zoom: "images/rubber9_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/rubber10_front.png",
        side: "images/rubber10_side.png",
        back: "images/rubber10_back.png",
        zoom: "images/rubber10_zoom.png",
        answer: ["고무전 이물", "고무전", "고무전이물"]
      },
      {
        front: "images/black1_front.png", side: "images/black1_side.png", back: "images/black1_back.png", zoom: "images/black1_zoom.png", answer: ["검정", "검정 이물", "검정이물"] },
    // 추가 예시 28개 입력 가능
];

let currentExample = 0;
let currentView = "front";

// 이미지 변경 함수
function changeView(view) {
    currentView = view;
    document.getElementById("training-image").src = trainingData[currentExample][view];
}


function checkAnswer() {
  const userInput = document.getElementById("answer-input").value.trim();
  const resultMessage = document.getElementById("result-message");
  // 예시: 현재 예시 데이터의 정답을 가져오는 코드 (실제 데이터와 로직에 따라 달라질 수 있음)
  const answer = trainingData[currentExample].answer;
  let correct = Array.isArray(answer) ? answer.includes(userInput) : answer.includes(userInput);
  
  if (correct) {
    resultMessage.textContent = "정답입니다!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "오답입니다.";
    resultMessage.style.color = "red";
  }
}

    
    

// 다음 예시
function nextExample() {
    if (currentExample < trainingData.length - 1) {
        currentExample++;
        changeView("front");
        document.getElementById("answer-input").value = "";
        document.getElementById("result-message").textContent = "";
    } else {
        alert("모든 예시를 완료했습니다!");
    }
}
let currentProduct = "eposis";

// 상단 제품 네비게이션 버튼 클릭 시 호출되는 함수
function showProduct(productId) {
  currentProduct = productId;
  updateProductSections();
}

// 각 섹션 내의 제품별 콘텐츠를 업데이트하는 함수
function updateProductSections() {
  const productSections = document.querySelectorAll('.product-section');
  productSections.forEach(section => {
    if (section.getAttribute('data-product') === currentProduct) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// 페이지 로드 시 초기화
window.onload = function() {
  updateProductSections();
  loadTrainingExample();
  generateExampleNav();
};


 