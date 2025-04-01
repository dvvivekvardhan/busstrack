import React from 'react'
import "./middle.css"
import { Link } from 'react-router-dom'

const Middle = () => {
    return (
        <div className='middle'>
            <div className='its'>
                <div className='l'>
                    <div className='ima'>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/057/018/non_2x/illustration-of-yellow-student-school-bus-cartoon-clipart-vector.jpg' height={180} width={200} alt='hello' />
                    </div>

                    <div className='mi'>
                        <h1>
                            BUSS: KPHB - MALLA REDDY UNIVERSITY
                        </h1>
                        <h2>
                            BUSS NO: AP 25 4765
                        </h2>
                        <h3>
                            DRIVER: BABBAR AZAM
                        </h3>
                    </div>

                    <div className='e'>
                        <h2>
                        <Link to="/bustrack">TRACK NOW</Link>
                        </h2>
                    </div>
                </div>

                <div className='l'>
                    <div className='ima'>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/057/018/non_2x/illustration-of-yellow-student-school-bus-cartoon-clipart-vector.jpg' height={180} width={200} alt='hello' />
                    </div>

                    <div className='mi'>
                        <h1>
                            BUSS: MEDCHAL - MALLA REDDY UNIVERSITY
                        </h1>
                        <h2>
                            BUSS NO: AP 25 3005
                        </h2>
                        <h3>
                            DRIVER: MD.RIZWAN
                        </h3>
                    </div>

                    <div className='e'>
                        <h2>
                        <Link to="/bustrack">TRACK NOW</Link>
                        </h2>
                    </div>
                </div>

                <div className='l'>
                    <div className='ima'>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/057/018/non_2x/illustration-of-yellow-student-school-bus-cartoon-clipart-vector.jpg' height={180} width={200} alt='hello' />
                    </div>

                    <div className='mi'>
                        <h1>
                            BUSS: BALA NAGAR - MALLA REDDY UNIVERSITY
                        </h1>
                        <h2>
                            BUSS NO: AP 25 3005
                        </h2>
                        <h3>
                            DRIVER: AZAM KHAN
                        </h3>
                    </div>

                    <div className='e'>
                        <h2>
                        <Link to="/bustrack">TRACK NOW</Link>
                        </h2>
                    </div>
                </div>

                <div className='l'>
                    <div className='ima'>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/057/018/non_2x/illustration-of-yellow-student-school-bus-cartoon-clipart-vector.jpg' height={180} width={200} alt='hello' />
                    </div>

                    <div className='mi'>
                        <h1>
                            BUSS: YERRA GADDA - MALLA REDDY UNIVERSITY
                        </h1>
                        <h2>
                            BUSS NO: AP 25 3005
                        </h2>
                        <h3>
                            DRIVER: S.AFRIDHI
                        </h3>
                    </div>

                    <div className='e'>
                        <h2>
                        <Link to="/bustrack">TRACK NOW</Link>
                        </h2>
                    </div>
                </div>

                <div className='l'>
                    <div className='ima'>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/057/018/non_2x/illustration-of-yellow-student-school-bus-cartoon-clipart-vector.jpg' height={180} width={200} alt='hello' />
                    </div>

                    <div className='mi'>
                        <h1>
                            BUSS: JBS - MALLA REDDY UNIVERSITY
                        </h1>
                        <h2>
                            BUSS NO: AP 25 3005
                        </h2>
                        <h3>
                            DRIVER: HARISH RUFF
                        </h3>
                    </div>

                    <div className='e'>
                        <h2>
                        <Link to="/bustrack">TRACK NOW</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle;