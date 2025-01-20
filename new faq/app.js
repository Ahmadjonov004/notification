const faqItems = document.querySelector('.faq-items');

const questionsItems = [
    { question: "Why shouldn't we trust atoms?", answer: "Because they make up everything!" },
    { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
    { question: "What's the object-oriented way to become wealthy?", answer: "Inheritance." },
    { question: "How many tickles does it take to tickle an octopus?", answer: "Ten-tickles." },
    { question: "What is: 1 + 1?", answer: "A window (if you think creatively)!" }
];

questionsItems.forEach((questionItem, index) => {
    faqItems.innerHTML += `
        <div class="faq-item" data-index="${index}">
            <div class="head">
                <div class="title">${questionItem.question}</div>
                <i class="openAnswer fa-solid fa-chevron-down"></i>
            </div>
            <div class="answer" id="answer-${index}">
                ${questionItem.answer}
            </div>
        </div>
    `;
});

faqItems.addEventListener('click', (e) => {
    const faqItem = e.target.closest('.faq-item'); 
    if (faqItem) {
        const index = faqItem.getAttribute('data-index');
        const answerElement = document.getElementById(`answer-${index}`);

        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active'); 
        } else {
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            faqItem.classList.add('active');
        }
    }
});