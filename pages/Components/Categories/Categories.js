import React from "react";



function Categories() {
    
   const categories = ["Eductational","Entertainment", "Gaming", "Programming", "Bipasses", "Music", "Stories"]
    
    
    return(
        <div className="Categories">
            {categories? categories.map((cat,key) => <button key={key} className={`catBut`}>{cat}</button>): ""
            
        } 
        </div>
    )
}


export default Categories
