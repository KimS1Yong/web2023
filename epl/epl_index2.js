let currentPage = 2;

function goToPage(page) {
    console.log(`Go to page ${page}`);
    if(page ==0) {
        window.location.href=`C:/Users/user/OneDrive/Desktop/고급웹 프로젝트/index0.html`
    }
    else{
        window.location.href=`epl_index${page}.html`
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        goToPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        goToPage(currentPage);
    }
}

// 이벤트 리스너 추가
document.getElementById('prevArrow').addEventListener('click', prevPage);
document.getElementById('nextArrow').addEventListener('click', nextPage);
