const GoogleMap = () => {
    const mapSrc =
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29199.896475085563!2d90.35448319999999!3d23.8190592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1735037278901!5m2!1sen!2sbd"; 
  
    return (
      <div className="w-full h-full border-2 border-gray-400 rounded">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  