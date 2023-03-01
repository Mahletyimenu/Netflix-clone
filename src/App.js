import './App.css';
import requests from './request.js';
import Nav from'./components/nav/Nav.js'
import Banner from'./components/banner/Banner.js'
import Row from'./components/row/Row.js'

function App() {
  return ( 
    <div className="App">
     <Nav />
     <Banner/>
     <Row 
        title="NETFLIX ORGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow  
      />
     <Row 
      title="Trending Now"
      fetchurl={requests.fetchTrending} 
      />
      <Row 
      title="Top Rated Now"
      fetchurl={requests.fetchTopRatedMovies} 
      />
      <Row 
      title="Action Movies"
      fetchurl={requests.fetchActionMovies} 
      />
      <Row 
      title="Comedy Movies"
      fetchurl={requests.fetchComedyMovies} 
      />
      <Row 
      title="Horror Movies"
      fetchurl={requests.fetchTopRatedMovies} 
      />
      <Row 
      title="Romance Movies"
      fetchurl={requests.fetchRomanceMovies} 
      />
      <Row 
      title="Documentaries Movies"
      fetchurl={requests.fetchDocumentaries} 
      />
    
    </div>
  );
}

export default App;
