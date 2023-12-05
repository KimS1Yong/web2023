let currentPage = 2;

function goToPage(page) {
    console.log(`Go to page ${page}`);
    if(page ==0) {
        window.location.href=`/index0`
    }
    else{
        window.location.href=`epl_index${page}.html`
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        goToPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < 2) {
        currentPage++;
        goToPage(currentPage);
    }
    else {
        alert("해당 리그에 속한 한국인 선수가 더 없습니다.")
    }
}

// 이벤트 리스너 추가
document.getElementById('prevArrow').addEventListener('click', prevPage);
document.getElementById('nextArrow').addEventListener('click', nextPage);
