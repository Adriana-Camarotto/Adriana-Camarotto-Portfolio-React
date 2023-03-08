import myPhoto from "../Assets/AdriProfileImg.png";

const Home = () => {
   return (
      <div className="home">
         <p>Hello!</p>
         <h1>ADRI CAMAROTTO</h1>
         <h2>Front End Web Developer</h2> 

         <p>Check out my relevants projects</p>

         {/* adicionar botao para My Github */}
         {/* adicionar foto minha  */}
         
         
         <img src={ myPhoto } alt="Adriana Camarotto"/>
      </div>
      
   );
}
 
export default Home;