const Testmonial = ()=> {
    return (
    <> 
    <section id="testmonial" className="section">
    <div className="container text-center">
      <h6 className="subtitle">Testmonial</h6>
      <h6 className="section-title mb-4">What People Say About Me</h6>
      <p className="mb-5 pb-4">Saya adalah pilihan yang tepat karena saya memiliki keahlian yang komprehensif dalam desain, dari Photoshop hingga pengembangan web dan aplikasi. Kemampuan kepemimpinan saya yang terbukti juga akan memastikan kolaborasi yang sukses dan hasil akhir yang memukau. Saya siap membawa inovasi dan dedikasi kepada tim, menciptakan desain yang tak hanya estetis, tetapi juga memenuhi tujuan bisnis.</p>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card testmonial-card border">
              <div className="card-body">
                <img src="src/assets/imgs/kyle1.jpg" alt />
                <p>Hi Guys</p>
                <h1 className="title">Kyle T</h1>
                <h1 className="subtitle">Mobile Designer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
    );

};

export default Testmonial;