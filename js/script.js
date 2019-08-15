const createCardModal = document.getElementById("createReservationModal");
const createCardBtn = document.getElementById("create-reservation-card");
const closeModalBtn = document.getElementById("closeReservationModal");
const inputParent = document.getElementById("input-wrapper");
console.log('test');
class Visit {
    constructor (firstName, lastName, fathersName, visitTarget, comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fathersName = fathersName;
        this.visitName = firstName[0] + lastName + this.visitDate.getDate() + this.visitDate.getMonth() + this.visitDate.getFullYear();
        this.visitTarget = visitTarget;
        this.comment = comment;
    }
}

class Cardiologist extends Visit {
    constructor (firstName, lastName, fathersName, visitTarget, usualPressure, weightMassIndex, lastSickness, age, comment) {
        super(firstName, lastName, fathersName, visitTarget, comment);

        this.usualPressure = usualPressure;
        this.weightMassIndex = weightMassIndex;
        this.lastSickness = lastSickness;
        this.age = age;
    }
}

class Dentist extends Visit {
    constructor (firstName, lastName, fathersName, visitTarget, lastVisitDate, comment) {
        super(firstName, lastName, fathersName, visitTarget, comment);

        this.lastVisitDate = new Date(lastVisitDate);
    }
}

class Therapist extends Visit {
    constructor (firstName, lastName, fathersName, visitTarget, age, comment) {
        super(firstName, lastName, fathersName, visitTarget, comment);

        this.age = age;
    }
}

createCardBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

document.body.addEventListener('click', function (e) {
    if (!createCardModal.contains(e.target) && !createCardBtn.contains(e.target)) {
        toggleModal();
    }
});


const chooseDoc = document.getElementById("doctors-list");

chooseDoc.addEventListener("change", whatDoc);

function toggleModal() {
    createCardModal.classList.toggle("active-modal");
    clearModal();
    setDefaultSelectValue();
}

function createFioFields() {
    createField("input", "first-name-field", "input", "text", "Имя", true);
    createField("input", "second-name-field", "input", "text", "Фамилия", true);
    createField("input", "fathers-name-field", "input", "text", "Отчество", true);
}

function createField(tagName, inputId, className, inputType, labelText, required) {
    const input = document.createElement(tagName);
    const label = document.createElement("label");
    const inputName = document.createElement('span');

    input.id = inputId;
    input.className = className;
    input.type = inputType;
    if(required === true) {
        input.setAttribute("required", true);
    }
    inputName.innerHTML = `${labelText}`;
    label.appendChild(inputName);
    label.appendChild(input);
    inputParent.appendChild(label);
}

function whatDoc() {
    const docId = this.options[this.selectedIndex].id;

    switch (docId) {
        case "not-selected":
            clearModal();
            return false;
        case "cardiologist-doc":
            clearModal();
            createFioFields();
            createField("input", "visit-target-field", "input", "text", "Цель визита", "true");
            createField("input", "usual-pressure-field", "input", "text", "Обычное давление", "true");
            createField("input", "mass-weight-index-field", "input", "number", "Индекс массы тела", "true");
            createField("input", "last-sickness-field", "input", "text", "Перенесенные заболевания СС системы", "true");
            createField("input", "age-field", "input", "number", "Возраст", "true");
            createField("textarea", "note-field", "note", "textarea", "Заметки", "false");
            break;
        case "dentist-doc":
            clearModal();
            createFioFields();
            createField("input", "visit-target-field", "input", "text", "Цель визита", "true");
            createField("input", "last-visit-field", "input", "date", "Дата последнего визита");
            createField("textarea", "note-field", "note", "textarea", "Заметки", "false");
            break;
        case "therapist-doc":
            clearModal();
            createFioFields();
            createField("input", "visit-target-field", "input", "text", "Цель визита", "true");
            createField("input", "age-field", "input", "number", "Возраст", "true");
            createField("textarea", "note-field", "note", "textarea", "Заметки", "false");
            break;
    }
}

function clearModal() {
    inputParent.innerHTML = "";
}

function setDefaultSelectValue() {
    chooseDoc.selectedIndex = 0;
}
