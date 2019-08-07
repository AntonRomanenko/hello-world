class Visit {
    constructor (firstName, lastName, fathersName, visitTarget) {
        this.visitDate = new Date();
        this.firstName = firstName;
        this.lastName = lastName;
        this.fathersName = fathersName;
        this.visitName = firstName[0] + lastName + this.visitDate.getDate() + this.visitDate.getMonth() + this.visitDate.getFullYear();
        this.visitTarget = visitTarget;
    }
}

class Cardiologist extends Visit {
    constructor (firstName, lastName, fathersName, visitTarget, usualPressure, weightMassIndex, lastSickness, age) {
        super(firstName, lastName, fathersName, visitTarget);

        this.usualPressure = usualPressure;
        this.weightMassIndex = weightMassIndex;
        this.lastSickness = lastSickness;
        this.age = age;
    }
}

class Dentist extends Visit {
    constructor (firstName, lastName, fathersName, visitTarget, lastVisitDate) {
        super(firstName, lastName, fathersName, visitTarget);

        this.lastVisitDate = new Date(lastVisitDate);
    }
}