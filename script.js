const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!name || !phone) {
      note.textContent = "Будь ласка, заповніть ім'я та телефон.";
      return;
    }

    note.textContent = "Дякуємо! Заявку підготовлено. Для швидкого запису натисніть номер 097 905 72 33.";
    form.reset();
  });
}
