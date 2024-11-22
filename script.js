function openSection(sectionNumber) {
    document.querySelectorAll('.berufswahl-section')
    .forEach(section => section.classList.add('hidden'));

    document.getElementById(`berufsauswahl-section-${sectionNumber}`);
}




function clickOnJobCard(index) {
    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach((card, i) => {
        if (i === index) {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease'; 
        } else {
            card.style.transform = 'scale(1)';
        }
    });
}




function toggleCard(card) {
    const isExpanded = card.classList.contains('expanded');
    document.querySelectorAll('.job-card').forEach((jobCard) => {
        jobCard.classList.remove('expanded');
    });
    if (!isExpanded) {
        card.classList.add('expanded');
    }
}


function toggleJobCard(index) {
    const jobCards = document.querySelectorAll('.job-card');
    const selectedCard = jobCards[index];

    jobCards.forEach(card => {
        card.classList.remove('expanded');
    });

    selectedCard.classList.add('expanded');

    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.classList.add('close-btn');
    selectedCard.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        selectedCard.classList.remove('expanded');
        closeButton.remove(); 
    });
}

document.querySelectorAll('.job-card').forEach((card, index) => {
    card.addEventListener('click', () => toggleJobCard(index));
});


