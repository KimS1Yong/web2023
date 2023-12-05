let currentPage = 1;

function goToPage(page) {
    console.log(`Go to page ${page}`);
    if(page ==0) {
        window.location.href=`/index0`
    }
    else {
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
}

// 이벤트 리스너 추가
document.getElementById('prevArrow').addEventListener('click', prevPage);
document.getElementById('nextArrow').addEventListener('click', nextPage);
