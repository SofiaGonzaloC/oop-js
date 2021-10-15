export class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        points = undefined,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        },
            this.points = points;
        this.cursosAprobados = cursosAprobados;
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props); // Permite referenciar al constructor de la clase madre
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) { // Valida que el curso sea gratis
            this.cursosAprobados.push(newCourse)
        } else {
            console.warn("Lo siento " + this.name + "este curso no es parte del plan free")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props); // Permite referenciar al constructor de la clase madre
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") { // Valida que el curso no este en ingles
            this.cursosAprobados.push(newCourse)
        } else {
            console.warn("Lo siento " + this.name + "este curso no es parte del plan basic")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props); // Permite referenciar al constructor de la clase madre
    }

    approveCourse(newCourse) {
        this.cursosAprobados.push(newCourse)
    }
}