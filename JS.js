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