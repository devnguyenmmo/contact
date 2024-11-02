// Kiểm tra form liên hệ
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Kiểm tra các trường nhập liệu
    if (!name || !email || !message) {
      alert(
        "Vui lòng điền đầy đủ thông tin bắt buộc (Họ và tên, Email, Nội dung tin nhắn)."
      );
      return;
    }

    // Hiển thị thông báo xác nhận gửi thành công
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");

    // Sau khi xác nhận có thể gửi form
    event.target.submit();
  });

// Xử lý sự kiện khi nhấp vào các liên kết mạng xã hội
document.querySelectorAll(".social-icons a").forEach((icon) => {
  icon.addEventListener("click", function () {
    alert(`Bạn đang truy cập ${this.title}.`);
  });
});
// script.js
document.querySelector(".chat-icon").addEventListener("click", () => {
  alert("Mở hộp thoại chat!");
  // Bạn có thể thay thế alert bằng đoạn mã mở hộp thoại chat thực tế.
});
