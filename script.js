function openSection(sectionNumber) {
    document.querySelectorAll('.berufsauswahl-section')
    .forEach(section => section.classList.add('hidden'));

    const section = document.getElementById(`berufsauswahl-section-${sectionNumber}`);
    section.classList.remove('hidden');
}


let activeCardIndex = null;

function clickOnJobCard(index) {
    removeInfoWindow();
    const jobCards = document.querySelectorAll('.job-card');
    const selectedCard = jobCards[index];

    if (activeCardIndex === index) {
        jobCards.forEach(card => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.3s ease';
        });
        activeCardIndex = null;
        removeTextField();
    } else {
        jobCards.forEach((card, i) => {
            if (i === index) {
                card.style.transform = 'scale(1.035)';
            } else {
                card.style.transform = 'scale(0.85)';
            }
            card.style.transition = 'transform 0.3s ease';
        });
        activeCardIndex = index;
        addInfoWindow(selectedCard);
    }
}

function addInfoWindow(card) {
    const infoContainer = document.getElementById('infoContainer');

    if (!infoContainer.querySelector('.job-info-window')) {
        const infoWindow = document.createElement('div');
        infoWindow.classList.add('job-info-window');
        
        const title = card.querySelector('h3').innerText;
        let description = '';

        switch (title) {
            case 'Elektrotechnik':
                description = `Details über den Beruf ${title}: Elektrotechniker arbeiten an der Entwicklung, Installation und Wartung von elektrischen Systemen und Geräten.`;
                break;
            case 'Embedded Systems':
                description = `Details über den Beruf ${title}: Embedded Systems Entwickler arbeiten an Software und Hardware für spezialisierte Geräte wie Smartphones, Autos oder medizinische Geräte.`;
                break;
            case 'Informationstechnik':
                description = `Details über den Beruf ${title}: Informatik für Anwendungsentwicklung erstellen und pflegen Softwarelösungen für unterschiedliche Branchen.`;
                break;
            case 'Wirtschaftsingenieurwesen':
                description = `Details über den Beruf ${title}: Wirtschaftsingenieure kombinieren technisches Wissen mit betriebswirtschaftlichen Kenntnissen, um Projekte effizient zu steuern.`;
                break;
            default:
                description = `Details über den Beruf ${title}: Hier könnten ausführliche Informationen über den Beruf stehen.`;
                break;
        }


        const windowTitle = document.createElement('h2');
        windowTitle.innerText = title;
        const windowDescription = document.createElement('p');
        windowDescription.innerText = description;

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Schließen';
        closeButton.classList.add('close-btn');
        closeButton.addEventListener('click', removeInfoWindow);

        infoWindow.appendChild(windowTitle);
        infoWindow.appendChild(windowDescription);
        infoWindow.appendChild(closeButton);

        infoContainer.appendChild(infoWindow);
    }
}

function removeInfoWindow() {
    const infoContainer = document.getElementById('infoContainer');
    const existingInfoWindow = infoContainer.querySelector('.job-info-window');

    if (existingInfoWindow) {
        existingInfoWindow.remove();
    }
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


