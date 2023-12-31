let currentPage = 2;

function goToPage(page) {
    console.log(`Go to page ${page}`);
    if(page ==0) {
        window.location.href=`/index0`
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
    if (currentPage < 3) {
        currentPage++;
        goToPage(currentPage);
    }
}

// 이벤트 리스너 추가
document.getElementById('prevArrow').addEventListener('click', prevPage);
document.getElementById('nextArrow').addEventListener('click', nextPage);
