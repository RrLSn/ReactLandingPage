import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import TeamMembers from './components/TeamMembers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <section className='template'>
          <h1>Welcome to the best website template!</h1>
          <p>Are you looking for a solution to your problem? Look no further, because we have the answer. Our team of experts has the skills and experience to deliver top-quality results.</p>
          <div className="button">
          <input className='btn' type="button" value='Button 1' />
          <input className='btn' type="button" value='Button 2' />
          </div>
          <div className="image">
            <img src="./media/img1.svg" alt="" />
            <img src="./media/img2.svg" alt="" />
          </div>
          <div className="headers">
            <div className='header'>
              <div className='heading1' id='heading'>
                <div><img src="./media/Vector1.svg" alt="" /></div><h4>Header</h4>
              </div>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
              <a href="index.html">Button</a>
            </div>

            <div className='header'>
              <div className='heading2' id='heading'>
                <div><img src="./media/Vector2.svg" alt="" /></div><h4>Header</h4>
              </div>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
              <a href="index.html">Button</a>
            </div>

            <div className='header'>
              <div className='heading3' id='heading'>
                <div><img src="./media/Vector3.svg" alt="" /></div><h4>Header</h4>
              </div>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
              <a href="index.html">Button</a>
            </div>
          </div>
        </section>

        <section className='siteFirstInfos'>
          <div className='info'>
            <h1>Why you should choose us</h1>
            <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>

            <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
          </div>
          <div className='image'>
            <img src="/media/img3.svg" alt="" /><img src="/media/img4.svg" alt="" />
          </div>
        </section>
        <section className='siteSecInfos'>
          <div>
            <h1>Why you should us. </h1>
            <img src="/media/img5.svg" alt="" />
          </div>
          <div>
            <h3>Subheader</h3>
            <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>

            <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
          </div>
        </section>
        <Gallery/>
        <section className='theTeam'>
          <h1>Meet The Team</h1>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
          <div className="arrows">
            <div className="arrow"><img src="/media/arrowLeft.svg" alt="" /></div>
            <div className="arrow"><img src="/media/arrowRight.svg" alt="" /></div>
          </div>
          <div className='teamMembers'>
            <TeamMembers img="/media/Avatar10.svg"
            name="Bryant James"
            role="FullStack Developer"/>

            <TeamMembers img="/media/Avatar9.svg"
            name="Erica Bill"
            role="FullStack Developer"/>

            <TeamMembers img="/media/Avatar8.svg"
            name="Bernice Gregor"
            role="Backend Developer"/>

            <TeamMembers img="/media/Avatar7.svg"
            name="Bernice Gregor"
            role="Frontend Developer"/>

            <TeamMembers img="/media/Avatar6.svg"
            name="George Stinlesky"
            role="FullStack Developer"/>

            <TeamMembers img="/media/Avatar5.svg"
            name="Janet Gregor"
            role="Frontend Developer"/>

            <TeamMembers img="/media/Avatar4.svg"
            name="Jesus James"
            role="Backend Developer"/>

            <TeamMembers img="/media/Avatar3.svg"
            name="Mary Brant"
            role="Frontend Developer"/>

            <TeamMembers img="/media/Avatar2.svg"
            name="Joe David Brant"
            role="Frontend Developer"/>

            <TeamMembers img="/media/Avatar1.svg"
            name="Raju Shakuur"
            role="Frontend Developer"/>
          </div>
        </section>

        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
