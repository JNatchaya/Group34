import './staffmanage.css';
import assignmentData from "./data.js"; 

function StaffManagement_tab() {
    return (
            <div className="assingment-container">
          {assignmentData.map((item) => (
            <div className="assingment" key={item.id}>
              <div className="assingment-left">
                <p>{item.author} |</p>
              </div>
              <div className="assingment-right">
              <a href="#">{item.linkText}</a>
              </div>
            </div>
          ))}
        </div>
    )
}    

export default StaffManagement_tab