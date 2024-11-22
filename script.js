



let activeCardIndex = null;

function clickOnJobCard(index) {
    removeInfoWindow();  
    const jobCards = document.querySelectorAll('.job-card');
    const selectedCard = jobCards[index];

  
    if (activeCardIndex === index) {
        activeCardIndex = null;
        jobCards.forEach(card => {
            card.style.transform = 'scale(1)';
        });
        removeTextField(); 
        return; 
    }

   
    jobCards.forEach((card, i) => {
        card.style.transform = i === index ? 'scale(1.035)' : 'scale(0.85)';
        card.style.transition = 'transform 0.3s ease';  
    });

    activeCardIndex = index; 
    addInfoWindow(selectedCard); 
    scrollToTextField(); 
}


function addInfoWindow(card) {
    const infoContainer = document.getElementById('infoContainer');

    if (!infoContainer.querySelector('.job-info-window')) {
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('job-info-window');
        
        const title = card.querySelector('h3').innerText;
        let description = '';
        let applyLink = '#';  // Default link if no match is found

        switch (title) {
            case 'Elektrotechnik':
                description = `Elektrotechniker arbeiten an der Entwicklung, Installation und Wartung von elektrischen Systemen und Geräten. Sie sind in vielen Branchen wie Energieversorgung, Automatisierungstechnik und Elektronik tätig.`;
                applyLink = 'https://example.com/elektrotechnik';
                break;
            case 'Embedded Systems':
                description = `Embedded Systems Entwickler arbeiten an Software und Hardware für spezialisierte Geräte wie Smartphones, Autos oder medizinische Geräte. Sie müssen sowohl Kenntnisse in Hardware als auch in Softwareentwicklung mitbringen.`;
                applyLink = 'https://example.com/embedded-systems';
                break;
            case 'Informatik':
                description = `Informatiker sind in der Softwareentwicklung tätig und kümmern sich um die Erstellung, Implementierung und Wartung von Programmen und Systemen, die für moderne Unternehmen und Geräte notwendig sind.`;
                applyLink = 'https://example.com/informatik';
                break;
            case 'Wirtschaftsingenieurwesen':
                description = `Wirtschaftsingenieure verbinden Ingenieurwissenschaften mit Wirtschaft und Management. Sie arbeiten an der Optimierung von Prozessen und der Integration von technologischen Lösungen in Geschäftsstrategien.`;
                applyLink = 'https://example.com/wirtschaftsingenieurwesen';
                break;
            case 'Betriebswirtschaftslehre':
                description = `Betriebswirte analysieren und steuern wirtschaftliche Prozesse innerhalb von Unternehmen. Sie beschäftigen sich mit Themen wie Finanzwesen, Marketing, Organisation und Personalmanagement.`;
                applyLink = 'https://example.com/betriebswirtschaftslehre';
                break;
            case 'Wirtschaftsinformatik':
                description = `Wirtschaftsinformatiker kombinieren Informatik mit betriebswirtschaftlichem Wissen. Sie entwickeln und implementieren Informationssysteme, die Unternehmen dabei unterstützen, ihre Ressourcen und Prozesse effizient zu verwalten.`;
                applyLink = 'https://example.com/wirtschaftsinformatik';
                break;
            case 'Elektrotechnik (Fachinformatiker)':
                description = `Fachinformatiker im Bereich Elektrotechnik sind auf die Entwicklung und Wartung von Software und Hardware spezialisiert, die in der Elektroindustrie, Automatisierungstechnik und Robotik verwendet wird.`;
                applyLink = 'https://example.com/elektrotechnik-fachinformatiker';
                break;
            case 'Mechatroniker':
                description = `Mechatroniker sind Experten für die Kombination von Mechanik, Elektronik und Informatik. Sie entwickeln und warten Maschinen und Anlagen, die mechanische und elektronische Komponenten kombinieren.`;
                applyLink = 'https://example.com/mechatroniker';
                break;
            case 'Fachinformatiker für Systemintegration':
                description = `Fachinformatiker für Systemintegration kümmern sich um das Planen, Installieren und Warten von IT-Systemen. Sie arbeiten eng mit Hardware- und Softwareentwicklern zusammen, um die Systeme in einem Unternehmen zu integrieren.`;
                applyLink = 'https://example.com/fachinformatiker-systemintegration';
                break;
            case 'Fachinformatiker für Digitale Vernetzung':
                description = `Fachinformatiker für Digitale Vernetzung sind spezialisiert auf Netzwerktechnologien und -infrastrukturen. Sie planen und implementieren Netzwerke und sorgen für die effiziente Vernetzung von Geräten und Systemen.`;
                applyLink = 'https://example.com/fachinformatiker-digitale-vernetzung';
                break;
            default:
                description = `Weitere Details zu diesem Beruf könnten hier stehen.`;
                applyLink = 'https://example.com/other';
                break;
        }

        const windowTitle = document.createElement('h2');
        windowTitle.innerText = title;
        const windowDescription = document.createElement('p');
        windowDescription.innerText = description;

        // Apply Button
        const applyButton = document.createElement('button');
        applyButton.classList.add('join-btn');
        applyButton.href = applyLink;
        applyButton.innerText = 'Jetzt Bewerben';
        applyButton.target = '_blank';

        // Close Button
        const closeButton = document.createElement('button');
        closeButton.innerText = "🗙";
        closeButton.classList.add('close-btn');
        closeButton.addEventListener('click', removeInfoWindow);

        // Contact Button (still functional)
        const contactButton = document.createElement('button');
        contactButton.innerText = 'Kontakt';
        contactButton.classList.add('Kontakt-btn');
        contactButton.addEventListener('click', () => {
        
            /*const emailInputLabel = document.createElement('label');
            emailInputLabel.innerText = 'juergen.dollmann@urbanandmainlines.com';
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.placeholder = 'Beispiel@domain.com';
            emailInput.classList.add('email-input');*/

            const contactInfoContainer = document.createElement('div');
            contactInfoContainer.classList.add('contact-info-container');

            const nameLabel = document.createElement('label');
            nameLabel.innerText = 'Name: Jürgen Dollmann';
            nameLabel.classList.add('contact-label');

            const emailLabel = document.createElement('label');
            emailLabel.innerText = 'E-Mail: juergen.dollmann@urbanandmainlines.com';
            emailLabel.classList.add('contact-label');

            const phoneLabel = document.createElement('label');
            phoneLabel.innerText = 'Telefon: +49 000 000 000';
            phoneLabel.classList.add('contact-label');



            contactInfoContainer.appendChild(nameLabel);
            contactInfoContainer.appendChild(emailLabel);
            contactInfoContainer.appendChild(phoneLabel);

            document.body.appendChild(contactInfoContainer);


            // Füge die Elemente in den Container ein
            formContainer.appendChild(emailInputLabel);
            formContainer.appendChild(nameInput);
            formContainer.appendChild(phoneInput);
            formContainer.appendChild(emailInput);
            formContainer.appendChild(messageInput);

            // Füge den Container zum Body (oder einer bestimmten Sektion) hinzu
            document.body.appendChild(formContainer);



            // Image container for profile picture
            const imageContainer = document.createElement('div');
            const image = document.createElement('img');
            image.alt = 'Image of Contact';
            image.style.width = '20%';  // Adjust size as necessary
            imageContainer.appendChild(image);

            // Add elements to the info window
            infoDiv.appendChild(windowTitle);
            infoDiv.appendChild(windowDescription);
            infoDiv.appendChild(applyButton);
            infoDiv.appendChild(contactButton);
            infoDiv.appendChild(imageContainer);  
            infoDiv.appendChild(emailInputLabel);  
            infoDiv.appendChild(emailInput);  
            infoDiv.appendChild(closeButton);

            infoContainer.appendChild(infoDiv);
        });

        

        infoDiv.appendChild(windowTitle);
        infoDiv.appendChild(windowDescription);
        infoDiv.appendChild(applyButton);
        infoDiv.appendChild(contactButton);
        infoDiv.appendChild(closeButton);

        infoContainer.appendChild(infoDiv);
    }
}

function showPopupWithImage(title, description, imageUrl) {
    const popup = document.createElement('div');
    popup.classList.add('popup-window');

    const popupTitle = document.createElement('h2');
    popupTitle.innerText = title;

    const popupDescription = document.createElement('p');
    popupDescription.innerText = description;

    const popupImage = document.createElement('img');
    popupImage.src = imageUrl;
    popupImage.alt = 'Contact Image';  
    popupImage.style.width = '100%';  

    const closePopupButton = document.createElement('button');
    closePopupButton.innerText = "🗙";
    closePopupButton.classList.add('close-btn');
    closePopupButton.addEventListener('click', () => {
        popup.remove();  
    });

    popup.appendChild(popupTitle);
    popup.appendChild(popupDescription);
    popup.appendChild(popupImage);
    popup.appendChild(closePopupButton);

    document.body.appendChild(popup);
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

function scrollToTextField() {
    const textFieldContainer = document.getElementById('infoContainer');
    textFieldContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  
    });
}

function openSection(sectionNumber) {
    console.log(`Section ${sectionNumber} clicked`);

    // Existing section handling logic
    document.querySelectorAll('.berufsauswahl-section').forEach(section => section.classList.add('hidden'));
    const section = document.getElementById(`berufsauswahl-section-${sectionNumber}`);
    section.classList.remove('hidden');

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('active'));

    const clickedButton = buttons[sectionNumber];
    clickedButton.classList.add('active');
}
