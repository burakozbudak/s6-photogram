/* React kütüphanesinden useState'i import et */
/* İlgili dosyadan sampleData'yı import et */
/* İlgili dosyadan PostList'i import et */
import './App.css';
import React, { useState } from 'react';
import sampleData from './sampleData';
import PostList from './components/PostList';

function App() {
  /* Bir state oluştur, sampleData bu state'in başlangıç değeri olmalı  */
  const [posts, setPosts] = useState(sampleData);

  function handleClap(postId) {
    /* state oluşturduktan sonra:
      - alttaki kodda place ve setPlace'i kendi verdiğin isimlerle değiştir
      - kodu yorumdan çıkar
      */
    const [posts, setPosts] = useState(sampleData);
    const place = posts;
    setPlace(place);
    const copyState = [...place];
    const clappedItem = copyState.filter((item) => item.id === postId)[0];
    clappedItem.claps = clappedItem.claps + 1;
    setPlace(copyState);
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>photogram.</h1>
      </div>
      {/*
        State içinde saklanan veriyi, PostList ve map metodu kullanarak listele.
        - key vermeyi unutma, değer olarak id'yi kullanabilirsin.
        - map metodu ve key kullanımını PostList dosyasından öğrenebilirsin.
      */}
      <PostList posts={posts} onClap={handleClap} />

      {/*
        
        PostList componentı kullanıma hazır. Kodunu incele ve gerekli props'ları gönder.
        - posts: posts state'ini gönder.
        - onClap: handleClap fonksiyonunu gönder.
      */}
      <div className="page-content">
        <h2>Welcome to Photogram</h2>
        <p>Explore the world through photos.</p>
      </div>
      {/*
        Footer componentını kullan. 
        - className: page-footer
        - İçerik: "Made with ❤️ by Your Name"
      */}
      <div className="page-content">
        <h2>Welcome to Photogram</h2>
        <p>Explore the world through photos.</p>
      </div>
      {/*
        Footer componentını kullan. 
        - className: page-footer
        - İçerik: "Made with ❤️ by Your Name"
      */}
      <PostList posts={posts} onClap={handleClap} />
      <footer className="page-footer">
        <p>
          Made with ❤️ by <a href="https://github.com/">Your Name</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
