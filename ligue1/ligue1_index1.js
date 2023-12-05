let currentPage = 1;

function goToPage(page) {
    console.log(`Go to page ${page}`);
    if(page ==0) {
        window.location.href=`C:/Users/user/OneDrive/Desktop/고급웹 프로젝트/index0.html`
    }
    else{
        window.location.href=`bundes_index${page}.html`
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        goToPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < 1) {
        currentPage++;
        goToPage(currentPage);
    }
}

// 이벤트 리스너 추가
document.getElementById('prevArrow').addEventListener('click', prevPage);
document.getElementById('nextArrow').addEventListener('click', nextPage);
