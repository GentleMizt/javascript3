    let test = {
        subject: 'physics',
        type: 'CBT-BASED',
        duration: '2 hours',
        passmark: 80,
        display(){
            console.log(`The Exam i have later today is ${this.subject} and it is a ${this.type} exam. Just so you know the passmark of the exam is ${this.passmark}%`);
        }
    }

    // console.log(test.subject);
    // console.log(test.type);
    // console.log(test.duration);
    // console.log(test.passmark);

    // OBJECT DESTRUCTURING!!
    // let {subject, type, duration, passmark} = test
    // console.log(type);
    // console.log(subject);
    // console.log(duration);
    // console.log(`${passmark} %`);
    
    let person = {
        name: 'lancer',
        age: 20,
        job: 'Currently hunting'
    }

    let displayObjectProperties = function(myObj){
        for (let i = 0; i < Object.keys(myObj).length; i++){
        return Object.keys(myObj)[i];
        }
    }
    displayObjectProperties(person);
    