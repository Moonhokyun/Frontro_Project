const commentInput = document.querySelector('.comment-inp');
const commentUploadButton = document.querySelector('.comment-upload-btn');
const modal = document.querySelector('.post-modal');
const postFixButton = document.querySelector('.back-btn');

// 입력시 '게시' 활성화

postFixButton.addEventListener('click', () => {
    window.location.href = 'home_2.html';
})


const isButtonActive = () => {
    if (commentInput.value === '') {
        commentUploadButton.classList.remove('active');
    } else {
        commentUploadButton.classList.add('active');
    }
}

commentInput.addEventListener('input', isButtonActive);

// 더보기 아이콘 클릭시 모달창 올라오기

let isModalOpen = false;

const openModal = () => {
    if (isModalOpen) {
        isModalOpen = false;
        modal.classList.remove('modal-open');
    } else {
        isModalOpen = true;
        modal.classList.add('modal-open');
    }
}