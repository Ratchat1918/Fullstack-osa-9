const korkeus: number = Number(process.argv[2])
const paino: number = Number(process.argv[3])
export function calculateBmi(korkeus:number,paino:number):any{
    let korkeusMetr=korkeus/100;
    let korkeusNelio=korkeusMetr**2;
    let bmi=paino/korkeusNelio;
    if(bmi<18.5){
        return "Underweight";
    }else if(bmi <25 && bmi >=18.5){
        return "Normal range";
    }else if(bmi >25 && bmi <=30){
        return "Overweight";
    }else if(bmi >30 && bmi <=40){
        return "Obese";
    }
}
calculateBmi(korkeus,paino)
export default calculateBmi;