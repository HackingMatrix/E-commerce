import React from 'react'

const Welcome = () => {
  return (
    <div>
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-12">
                    <img src="src\assets\welcoome.jpg" className="img-fluid" alt="..."/>
                </div>
            </div>
            <div className="row pt-5">
              <form action="">
                <input class="form-control" type="text" placeholder="Default input" aria-label="default input example"/>

              </form>
            
            </div>
        </div>
    </div>
  )
}

export default Welcome