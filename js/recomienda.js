const resultado = document.getElementById('resultado');
const recomendar = document.getElementById('recomendar');
const inputDias = document.getElementById('dias');
const selectObjetivo = document.getElementById('objetivo');

function recomendarRutina(){
    const dias = parseInt(inputDias.value);
    const objetivo = selectObjetivo.value;
    let rutina = '';

    if (dias < 3 || dias > 6 || isNaN(dias)){
        rutina = `Ingresá un número válido de días (De 3 a 6).`;
    
    } else {
        if (objetivo == 'fuerza'){
            if (dias == 3){
                rutina = `🏋️‍♂️ 3 días de fuerza: Full Body centrado en básicos pesados (sentadilla, peso muerto, press banca).`;
            
            } else if (dias == 4){
            rutina = `💪 4 días de fuerza: Torso/Pierna con progresión de cargas intensas.`;
            
            
            } else {
                rutina = `🔥 ${dias} días de fuerza: Push/Pull/Legs enfocado en fuerza + técnica de básicos.`;
            }    

    } else if (objetivo == 'hipertrofia'){
        if (dias == 3){
            rutina = `🏋️ 3 días de hipertrofia: Full Body con más volumen por grupo muscular.`;
    } else if (dias == 4){
        rutina = `💥 4 días: Torso/Pierna o Upper/Lower con énfasis en bombeo muscular.`;
    } else{
        rutina = `🔥 ${dias} días: Push/Pull/Legs con variedad de ejercicios y alto volumen.`;
    }    


    } else if (objetivo == 'salud') {
        rutina = `🧘 ${dias} días: Ejercicio funcional, circuitos y algo de fuerza para salud integral.`;
        }
    }   
    resultado.textContent = rutina;
}

recomendar.addEventListener('click', recomendarRutina);