/* eslint-disable react/prop-types */
export const Balance = ({value})  => {
    return (
    <div>
        <div className="font-bold text-lg">
            Your Balance here
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
        
    </div>  
    )
}