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
            card.style.transition = 'transform 0.3s ease'; // sanfte Animation
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


function toggleJobCard(event) {
    const jobCard = event.currentTarget;
    const allJobCards = document.querySelectorAll('.job-card');

    allJobCards.forEach(card => {
        if (card !== jobCard) {
            card.classList.remove('expanded');
        }
    });

    jobCard.classList.toggle('expanded');
}

document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', toggleJobCard);
});

