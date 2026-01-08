const button = document.getElementById("checkBtn");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);

    if (name === "" || age === 0) {
        alert("Write your name or age");
        return;
    }

    if (age >= 18) {
        modalImage.src = "adult.png";
    } else {
        modalImage.src = "child.png";
    }

    modal.style.display = "flex";

    modalImage.style.animation = "none";
    modalImage.offsetHeight; /* trigger reflow */
    modalImage.style.animation = "grow-rotate 3s forwards";

    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
});
