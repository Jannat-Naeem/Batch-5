
import ChildComponent from './child';

const Parent = ()=>{
    const dataFromParent ='Hello from Parent';

    return(
        <div>
            <h1>Parent Component</h1>
            {/*Render the ChildComponent and pass data as a prop */}
             <ChildComponent data ={dataFromParent}/>
        
        </div>
    );
};

export default Parent;