const candidatos = [
    { id: 1, nombre: "Candidato A", elo: 1500, elecciones: 0 },
    { id: 2, nombre: "Candidato B", elo: 1400, elecciones: 0 },
    { id: 3, nombre: "Candidato C", elo: 1300, elecciones: 0 },
    { id: 4, nombre: "Candidato D", elo: 1200, elecciones: 0 },
    { id: 5, nombre: "Candidato E", elo: 1200, elecciones: 0 },
    { id: 6, nombre: "Candidato F", elo: 1200, elecciones: 0 },
    { id: 7, nombre: "Candidato G", elo: 1200, elecciones: 0 },
    { id: 8, nombre: "Candidato H", elo: 1200, elecciones: 0 },
    { id: 9, nombre: "Candidato I", elo: 1200, elecciones: 0 },
    { id: 10, nombre: "Candidato J", elo: 1200, elecciones: 0 }
];

for (let i = 0; i < 100000; i++) {
    const [candidato1, candidato2] = elegirCandidatosRotados(candidatos);
    //console.log(`Ronda ${i + 1}: ${candidato1.nombre} vs ${candidato2.nombre}`);

    let winner = null;
    let loser = null;

    // Aquí agregamos un pequeño favoritismo al Candidato A y otros
    winner = elegirGanador(candidato1, candidato2);
    loser = winner === candidato1 ? candidato2 : candidato1;


    // Actualizar ELO
    const { newWinnerElo, newLoserElo } = calculateElo(winner.elo, loser.elo);
    winner.elo = Math.round(newWinnerElo);
    loser.elo = Math.round(newLoserElo);
    /*
        console.log(`Ganador: ${winner.nombre} (ELO: ${winner.elo})`);
        console.log(`Perdedor: ${loser.nombre} (ELO: ${loser.elo})`);
    */
}

// Esta función calcula el ganador basándose en el Elo, y le da un pequeño favoritismo a ciertos candidatos
function elegirGanador(candidato1, candidato2) {
    // Probabilidad de que candidato1 gane según Elo
    let prob1 = calcularProbabilidad(candidato1.elo, candidato2.elo);

    // Tabla de favoritismo
    const favoritismos = {
        "Candidato A": 0.25,
        "Candidato B": 0.24,
        "Candidato C": 0.13
    };

    // Aplicar favoritismo SÓLO si ese candidato es uno de los favoritos
    if (favoritismos[candidato1.nombre]) prob1 += favoritismos[candidato1.nombre];

    // Limitar la probabilidad entre 0 y 1
    prob1 = Math.min(Math.max(prob1, 0), 1);

    // Elegir ganador con base en la probabilidad ajustada
    return Math.random() < prob1 ? candidato1 : candidato2;
}



// Calcular la probabilidad de ganar basándose en el Elo
function calcularProbabilidad(elo1, elo2) {
    const expectedWinner = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
    return expectedWinner;
}

function elegirCandidatosRotados(candidatos) {
    // Rotar los candidatos
    candidatos.push(candidatos.shift()); // Mueve el primer candidato al final

    // Seleccionar los dos primeros candidatos de la lista
    const candidato1 = candidatos[0];
    const candidato2 = candidatos[1];

    // Aumentar el contador de elecciones para ambos candidatos

    candidato1.elecciones++;
    candidato2.elecciones++;

    return [candidato1, candidato2];
}

function calculateElo(winnerElo, loserElo, k = 32) {
    const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLoser = 1 - expectedWinner;
    return {
        newWinnerElo: winnerElo + k * (1 - expectedWinner),
        newLoserElo: loserElo + k * (0 - expectedLoser),
    };
}

console.table(candidatos.sort((a, b) => b.elo - a.elo));
/*
function elegirCandidatosAleatoriosEquilibrados(candidatos) {
    // Crear un objeto para llevar el conteo de cuántas veces cada candidato ha sido elegido
    let elecciones = candidatos.map(candidato => ({
        ...candidato,
        elecciones: 0, // Inicializamos el contador de elecciones
    }));

    // Ordenar los candidatos por la cantidad de veces que han sido seleccionados (de menor a mayor)
    elecciones.sort((a, b) => a.elecciones - b.elecciones);

    // Elegir los dos primeros candidatos de la lista ordenada
    const candidato1 = elecciones[0];
    const candidato2 = elecciones[1];

    // Aumentar el contador de elecciones para ambos candidatos
    candidato1.elecciones++;
    candidato2.elecciones++;

    // Devolver los dos candidatos seleccionados
    return [candidato1, candidato2];
}

*/









/*
pollRouter.post('/', async (req, res) => {
    const { winnerId, loserId } = req.body;

    const winner = await Candidate.findById(winnerId);
    const loser = await Candidate.findById(loserId);

    if (!winner || !loser) return res.status(404).json({ error: 'Candidato no encontrado' });

    const { newWinnerElo, newLoserElo } = calculateElo(winner.elo, loser.elo);

    winner.elo = Math.round(newWinnerElo);
    loser.elo = Math.round(newLoserElo);

    await winner.save();
    await loser.save();

    res.json({ message: 'Voto registrado', winnerElo: winner.elo, loserElo: loser.elo });
});
*/