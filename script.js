// script.js

// 確保網頁內容完全載入後才執行腳本
document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有具備 contenteditable 屬性的備註區塊
    const editableNotes = document.querySelectorAll('[contenteditable="true"]');
    
    // 1. 載入已儲存的內容
    editableNotes.forEach((el, index) => {
        // 為每個備註區塊生成一個唯一的 key
        const storageKey = `note_${index}`; 
        
        // 嘗試從 Local Storage 讀取內容
        const savedContent = localStorage.getItem(storageKey);
        
        if (savedContent) {
            el.innerHTML = savedContent; // 如果有儲存內容，則替換現有內容
        }

        // 2. 監聽內容變更並儲存
        el.addEventListener('input', () => {
            // 當內容有變動時，即時儲存到 Local Storage
            localStorage.setItem(storageKey, el.innerHTML);
        });
    });
    
    // 提示用戶內容已進入編輯模式
    console.log("備註已載入，且內容區域現在是可編輯的。所有修改將儲存在您的瀏覽器中。");
});