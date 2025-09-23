interface Variables{
    hours:number[],
    setTarget:number
}
export function calculateExercises(variable:Variables){
    let harjoiteltuPaivat=0;
    let kokoAika=0;
    variable.hours.forEach(paiva => {
        if(paiva>0){
            harjoiteltuPaivat++
        }
        kokoAika+=paiva;
    });
    let keskimaara=kokoAika/variable.hours.length;
    let tulos={
    periodLength: variable.hours.length,
    trainingDays: harjoiteltuPaivat,
    success: false,
    rating: 0,
    ratingDescription: '',
    target: variable.setTarget,
    average: keskimaara
}
    if(tulos.target===harjoiteltuPaivat){//tarksita menestys
        tulos.success=true;
    }
    if(harjoiteltuPaivat>0&& harjoiteltuPaivat<2){//asentaa rating
        tulos.rating=1;
    }else if(harjoiteltuPaivat>=2&& harjoiteltuPaivat<4){
        tulos.rating=2;
    }else if(harjoiteltuPaivat>=4&& harjoiteltuPaivat<=7){
        tulos.rating=3;
    }
    switch(tulos.rating){
        case 1:
            tulos.ratingDescription="bad";
            break;
        case 2:
           tulos.ratingDescription='not too bad but could be better';
           break;
        case 3:
           tulos.ratingDescription='pretty good';
           break;
    }
    return tulos
}
const hours: number[] = process.argv.slice(3).map(Number);
const setTarget: number = Number(process.argv[2])
console.log(calculateExercises({hours,setTarget}))