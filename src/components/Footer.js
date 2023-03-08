import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => { //Arrow function
    return ( 
        
        <footer className="footer">                    
                    <h6>Copyright © 2022 Adriana Camarotto | All Rights Reserved.</h6>
                    <div className="social-medias-icons">
                        <ul>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/adriana-camarotto/" target="_blank"><i className="fa-brands fa-linkedin"></i>Linkedin</a></li>
                            <li><a className="github" href="https://github.com/Adriana-Camarotto" target="_blank"><i className="fa-brands fa-github"></i>Github</a></li>
                            <li><a className="instagram" href="https://www.instagram.com/adri.camarotto/" target="_blank"><i className="fa-brands fa-instagram"></i>Instagram</a></li>
                            <li><a className="facebook" href="https://www.facebook.com/adri.camarotto" target="_blank"><i className="fa-brands fa-facebook"></i>Facebook</a></li>
                        </ul>                                        
                    </div>          
        </footer>
    );
}
 
export default Footer;

