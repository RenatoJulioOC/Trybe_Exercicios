const xadrezMoves = "king";

switch (xadrezMoves.toLowerCase()) {
    case "king":
        console.log("Rei: movido para uma casa em qualquer direção.");
        break;
    case "queen":
        console.log("Rainha: movida em diagonal, vertical e horizontal..");
        break;
    case "bishop":
        console.log("Bispo: movido somente em diagonal.");
        break;
    case "horse":
        console.log("Cavalo: movido somente em L, (capaz de pular peças).");
        break;
    case "tower":
        console.log("Torre: movida em vertical e horizontal.");
        break;
    case "pawn":
        console.log("Peão: o 1º movimento permite avançar duas casas, e depois, somente uma.");
        break;
    default:
        console.log("Peça inválida.");
        break;
}