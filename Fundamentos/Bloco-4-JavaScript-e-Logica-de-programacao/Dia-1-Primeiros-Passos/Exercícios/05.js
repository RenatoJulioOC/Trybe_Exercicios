const angInt1 = 60;
const angInt2 = 90;
const angInt3 = 30;
const somaAngInt = angInt1 + angInt2 + angInt3;

const angIntPositivos = angInt1 > 0 && angInt2 > 0 && angInt3 > 0;

if (angIntPositivos) {
    if (somaAngInt === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("error");
}