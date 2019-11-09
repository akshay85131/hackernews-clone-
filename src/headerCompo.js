import  React, {Component}  from 'react';
import '.././src/App.css'

class headerComponent extends React.Component{
    render(){
        return(
            <div style={headerStyle}>
                <header>
                    hACKER nEws
                </header>
            <div className ='navigation'>
            <button className='headerbuttons'>new|</button>
            <button className='headerbuttons'>past|</button>
            <button className='headerbuttons'>commnets|</button>
            <button className='headerbuttons'>ask|</button>
            <button className='headerbuttons'>show|</button>
            <button className='headerbuttons'>jobs|</button>
            <button className='headerbuttons'>submit</button>
            </div>
            </div>
        )
    }
}


 const headerStyle ={
     display:'flex',
     color: 'black',
     background: 'orange',
     
    }

export default headerComponent