// confetti effect to apply when any of the result page load

const jsConfetti = new JSConfetti();

document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop(); 

    if (currentPage === "barbados.html") {
        jsConfetti.addConfetti({
            emojis: ['🏝️', '☀️', '👙', '🏖️'],
        }).then(() => jsConfetti.addConfetti());
    } else if (currentPage === "japan.html") {
        jsConfetti.addConfetti({
            emojis: ['🍡', '🌸', '🍣', '🍥'],
        }).then(() => jsConfetti.addConfetti());
    } else if (currentPage === "kenya.html") {
        jsConfetti.addConfetti({
            emojis: ['🦁', '🐘', '🦓', '☀️'],
        }).then(() => jsConfetti.addConfetti());
}
});