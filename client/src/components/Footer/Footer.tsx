import React from 'react'
import Rectangle from '../../assets/Rectangle 1.svg';

function Footer() {
  return (
    <footer className="footer customFooter">
        <div className="content">
            <h5 className='title is-5 has-text-white is-vcentered'>
                <img className='rectangle' src={Rectangle} alt='Rectangle' /> You'll be in good company
            </h5>
            <div className='columns'>
                <div className='column'>
                    <h3 className='title is-3'>
                        <div className='list'>
                            <div className='list-item has-text-white'>
                                <ul>
                                Have a project in mind?
                                </ul>
                            </div>
                            <div className='list-item has-text-white'>
                                <ul>
                                Let's make it happen      
                                </ul>
                            </div>
                        </div>
                    </h3>
                </div>
                <div className='column'>
                    <div className='list'>
                        <ul>
                            <div className='list-item'>
                                <ul>
                                22 Lawley Road, Woodstock, 7925,
                                </ul>
                            </div>
                            <div className='list-item'>
                                <ul>
                                Cape Town, South Africa       
                                </ul>
                            </div>
                            <div className='list-item'>
                                <ul>
                                +27 21 469 1500       
                                </ul>
                            </div>
                            <div className='list-item'>
                                <ul>
                                <a href='enquirie@kingjames.co.za'>enquirie@kingjames.co.za</a>       
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>    
            </div> 
            <div className='columns'>
                <div className='column'>
                    <div className='list'>
                        <div className='list-item'>
                            <ul>
                                Terms of service
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Privacy policy                                
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Impressum
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='list'>
                        <div className='list-item'>
                            <ul>
                                Facebook
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Instagram
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Twitter
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='list'>
                        <div className='list-item'>
                            <ul>
                                Github
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Linkedin
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Teams
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='list'>
                        <div className='list-item'>
                            <ul>
                                Youtube
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Behance
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                Dribble
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='column'>
                <div className='list'>
                        <div className='list-item'>
                            <ul>
                                Explore open jobs
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                
                            </ul>
                        </div>
                        <div className='list-item'>
                            <ul>
                                &copy; 2000-2022 King James Digital
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
    </footer>
  )
}

export default Footer