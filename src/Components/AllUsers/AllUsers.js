import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ALL_USERS} from '../../Store/actions'
import Spinner from '../../Shared/Spinner'
import classes from './allusres.module.css'

const AllUsers = (props) => {

    const users = props.users;
    const {isLoading} = props.error
   

   
   
    useEffect(()=>{
props.ALL_USERS()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    const renderList = users.map((items)=>(

        <div  className={classes.users} key={items.id}>

<table style={{textAlign:'center',width:'600px',fontFamily:'sans-serif'}} className="ui very basic collapsing celled table">

  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
          <img style={{width:'50px',height:'50px',objectFit:'fill'}} src={`http://localhost:5000/${items.image}`} className="ui mini rounded image" alt='' />
          <div className="content">
           <h5 >{items.username}    </h5>
          </div>
        </h4></td>
      <td>
        {items.email}
      </td>
      <td>
       <h5>{items.places.length}</h5>
      </td>
    </tr>     
  </tbody>
</table>


        </div>
    ))
    if(renderList.length===0){
      return (
          <div className={classes.cats}>
            <div className={classes.cats1}><button style={{width:'400px',backgroundColor:'#555',color:'white'}} className='ui negative button'>No User Found</button></div>
         
          </div>
      )
  }
 

  return (
    <React.Fragment>
        {isLoading?<Spinner />:(<div className={classes.items}>
        <div className={classes.text}>
          <h5>UserName</h5>
          <h5>Email</h5>
          <h5>Total Posts</h5>        
        </div>
       
        {renderList}
        </div>)}
    </React.Fragment>
  )
}
const mapStateToProps = (state)=>{
    return {users:Object.values(state.users),error:state.error,userId:state.auth}
  
  }

export default connect(mapStateToProps,{ALL_USERS})(AllUsers)








