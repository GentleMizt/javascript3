    let test = {
        subject: 'physics',
        type: 'CBT-BASED',
        duration: '2 hours',
        passmark: 80,
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
    let arr = Object.values(test);
    for (let i = 0; i < arr.length; i++){
        console.log(Object.keys(test)[i]);
    }