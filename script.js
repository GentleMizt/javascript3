const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const age = document.querySelector('.age');
const email = document.querySelector('.email');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('pass2');
submitBtn = document.querySelector('.submit');

    // disabling submit button if both passwords are not the same
    // ASSIGNMENT: Make research on how to get JS to identify/listen to the values of password
    // and confirm password respectively







    let User = function(firstName, lastName, age, email, password ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password 
    }
    confirmPassword.addEventListener('keyup', passwordCheck)

    function passwordCheck(event){
        setTimeout(() => {
            if (password.value !== event.target.value){
                //  disable the submit button
                console.log(event.target);
                submitBtn.style.display = 'none'
            }
            else{
                submitBtn.style.display = 'inline'
            }
        }, 2000);
    }
    
   
   // let test = {
    //     subject: 'physics',
    //     type: 'CBT-BASED',
    //     duration: '2 hours',
    //     passmark: 80,
    //     display(){
    //         console.log(`The Exam i have later today is ${this.subject} and it is a ${this.type} exam. Just so you know the passmark of the exam is ${this.passmark}%`);
    //     }
    // }

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
    
    // let person = {
    //     name: 'lancer',
    //     age: 20,
    //     job: 'Currently hunting'
    // }

    // let displayObjectProperties = function(myObj){
    //     for (let i = 0; i < Object.keys(myObj).length; i++){
    //     return Object.keys(myObj)[i];
    //     }
    // }
    // displayObjectProperties(person);
    