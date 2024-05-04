// 버튼 선택
const coffeeSelectBtns = document.querySelectorAll('.coffee-select');

coffeeSelectBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        coffeeSelectBtns.forEach(btn => {btn.classList.remove("coffee-active-btn");})
        btn.classList.add("coffee-active-btn")
    })
})



// 체크박스
function checkSelectAll() {
    const option = document.querySelectorAll('input[name="option"]');
    const optionChecked = document.querySelectorAll('input[name="option"]:checked');
    const selectAll = document.querySelector('input[name="select-all"]');

    if(option.length === optionChecked.length) {
        selectAll.checked = true;
    }
    else {
        selectAll.checked = false;
    }
}

function selectAll(selectAll) {
    const option = document.getElementsByName('option');

    option.forEach(checkbox => {
        checkbox.checked = selectAll.checked;
    })
}

// 결제
// 1. 버튼 전환클릭
// 2. 클릭시 모달 오픈
// 3. 닫기시 모달 클로즈
const payHow = document.querySelectorAll('.pay-how');

payHow.forEach(btn => {
    btn.addEventListener('click', () => {
        payHow.forEach(btn => {btn.classList.remove("pay-active-btn")});
        btn.classList.add("pay-active-btn");

        const payContainer = document.querySelector(".pay-modal-container");
        const body = document.querySelector("body");
        
        payContainer.style.display = "flex";
        body.style.overflow = "hidden";
    })
})

const payClose = document.querySelector('.pay-close');
payClose.addEventListener('click', () => {
    const payContainer = document.querySelector(".pay-modal-container");
    payContainer.style.display = "none";

    const body = document.querySelector("body");
    body.style.overflow = "scroll";
})
