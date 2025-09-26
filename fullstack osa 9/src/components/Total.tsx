interface total{
    totalExercises:number
}
const Total = (props:total)=>{
    return(
        <>
        <p>Number of exercises {props.totalExercises}</p>
        </>
    )
}
export default Total