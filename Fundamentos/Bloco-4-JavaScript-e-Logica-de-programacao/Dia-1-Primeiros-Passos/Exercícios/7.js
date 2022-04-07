const converterNote = "95";

if (converterNote > 100 || converterNote < 0) {
    console.log("Nota não calculável");
} else if (converterNote >= 90) {
    console.log("A");
} else if (converterNote >= 80) {
    console.log("B");
} else if (converterNote >= 70) {
    console.log("C");
} else if (converterNote >= 60) {
    console.log("D");
} else if (converterNote >= 50) {
    console.log("E");
} else {
    console.log("F");
}