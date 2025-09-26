import type { CoursePart } from "../types"
const Part = ({parts}) =>(
    <div>
        <ul>
            {parts.map(part=>{
                <li>{part}</li>
            })}
        </ul>
    </div>
)

const Content = ({courseParts}:CoursePart) =>{
    const allParts = []
    courseParts.forEach(part => {
        switch(part.kind){
            case "basic":
                const partsBasic = [part.name, part.description, part.exerciseCount]
                
            case "group":
                console.log(part.name, part.groupProjectCount, part.exerciseCount)
                break
            case "background":
                console.log(part.name, part.description, part.exerciseCount)
                break
            default:
                break;
            }
        })
}


export default Content