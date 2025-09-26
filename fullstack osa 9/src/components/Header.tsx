interface headerProps{
    header:string
}

const Header = (props:headerProps) =>(
    <>
    <h1>{props.header}</h1>
    </>
)

       
    

export default Header