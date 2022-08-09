import React from 'react'

export default function Alert(props) {
    const capitalize= (word)=>{
        const lower = word.toLowerCase();
        return lower.toUpperCase();
        }  
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.msg)}</strong> 
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
