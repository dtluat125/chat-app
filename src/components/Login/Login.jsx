function LogIn(props){
    return(
        <div className="login row">
            <div className="col-md-6 img-bg-container">

            </div>

            <div className="col-md-6 form-container">
            
                <span className="form__title">
                    Login to continue
                </span>
                <form action="" method="post">
                    <div className="form__input">
                        
                            
                            <input name="form__email" type="text" className="input-area"/>
                            <span className="label-span">Email</span>
                    
                    </div>
                    <div className="form__input">
                       
                            <span className='label-span'>Password</span>
                            <input name="form__password" type="text" className="input-area"/>
                      
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default LogIn