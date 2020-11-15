function omit (obj, fields) {
    const newObj = Object.assign({}, obj);

    for (let i = 0; i < fields.length; i++) {
        delete newObj.fields[i]
    }

    // fields.forEach(field => {
    //     const a = field
    //     delete newObj.a
    // })

    return newObj;
}

const user = {
    id: 1,
    name: "Алексей",
    surname: "Данчин",
    age: 28,
}

const result = omit(user, ['name', 'surname'])

console.log(result);
console.log(user);

// result === {id: 1, age: 28 }