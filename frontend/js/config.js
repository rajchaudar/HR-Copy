const API_BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? "http://localhost:3000/api"
    : "https://hr-dep-1.onrender.com/api";


// const stripe = Stripe("pk_test_51PktNASFRtv588FKNJTtUvfMUXEnkFK1aGeRIdBT9PxICcVxYb99NtuKxpMZxGSFy8YfOU2SmceVspuVXLhBjeia00W4KD5BVW"); 
// let clientSecret = "";
// let orderId = "";
// let card;