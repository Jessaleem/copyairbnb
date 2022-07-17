

function Signinform () {


    return (
        <section>
            <div className="signin__container">
                <div className="signin">
                <header className="signin_headerbox">
                    <h2>Registrarme</h2>
                </header>
                </div>
                <form action="" className="signin__form">
                    <input className="signin__namebox" type="text" name="names" placeholder="First name" />
                    <input className="signin__lastnamebox" type="text" name="lastname" placeholder="Last name" />
                    <p className="signin__helptext">Make sure it matches the name on your government ID..</p>
                    <input className="signin__textbox" type="date" name="birthdate" placeholder="Birthdate" />
                    <p className="signin__helptext">To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb.</p>
                    <input className="signin__textbox" type="email" name="email" placeholder="Email" />
                    <p className="signin__helptext">We'll email you trip confirmations and receipts.</p>
                    <input className="signin__textbox" type="password" name="password" placeholder="Password"/>
                    <button className="signin__btn"><b>Aceptar y continuar</b></button>
                    <p className="signin_final">Airbnb te enviará ofertas exclusivas para miembros, contenido inspirador, correos electrónicos comerciales y notificaciones push.
                        Puedes optar por dejar de recibirlos en cualquier momento a través del apartado de configuración de tu cuenta o directamente desde alguna de las notificaciones que te llegue.
                    </p>
                    <p>
                        <input className="signin__checkbox" type="checkbox" id="radio1" checked />
                        <label for="radio1">No quiero recibir mensajes promocionales de Airbnb</label>
                    </p>
                </form>
            </div>
        </section >

    )
}

export default Signinform

