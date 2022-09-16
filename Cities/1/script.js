const CITY_NAME_DIV = document.getElementById("City_names");
  const DESCRIPTION_TEXT = document.getElementById("description_text");
  const AMOUNT_CITIES = 63;

  var Cities_names_list = [], Cities_des_list =[], Cities_list = [];

  Cities_names_list = ['An Giang','Bà Rịa - Vũng Tàu','Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Bình Phước','Bình Thuận','Cà Mau','Cao Bằng ','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Tĩnh','Hải Dương','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lâm Đồng','Lạng Sơn','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái','Phú Yên','Cần Thơ','Đà Nẵng','Hải Phòng','Hà Nội','TP HCM'];
  Cities_des_list = ['this is city: 1','this is city: 2','this is city: 3','this is city: 4','this is city: 5','this is city: 6','this is city: 7','this is city: 8','this is city: 9','this is city: 10','this is city: 11','this is city: 12','this is city: 13','this is city: 14','this is city: 15 ','this is city: 16','this is city: 17','this is city: 18','this is city: 19','this is city: 20','this is city: 21','this is city: 22','this is city: 23','this is city: 24','this is city: 25','this is city: 26','this is city: 27','this is city: 28','this is city: 29','this is city: 30','this is city: 31','this is city: 32','this is city: 33','this is city: 34','this is city: 35','this is city: 36','this is city: 37','this is city: 38','this is city: 39','this is city: 40','this is city: 41','this is city: 42','this is city: 43','this is city: 44','this is city: 45','this is city: 46','this is city: 47','this is city: 48','this is city: 49','this is city: 50','this is city: 51','this is city: 52','this is city: 53','this is city: 54','this is city: 55','this is city: 56','this is city: 57','this is city: 58','this is city: 59','this is city: 60','this is city: 61','this is city: 62','this is city: 63']
  for(let i = 1; i <= AMOUNT_CITIES; i++) {
    Cities_list[i] = {
      name:Cities_names_list[i-1],
      description:Cities_des_list[i-1]
    } 
  }

  var button = [];

  function showDataCity(i) {
    DESCRIPTION_TEXT.textContent = Cities_list[i].description;
    
  }

  function showCitiesName(){
    //create a top space 
    var tempP = document.createElement("p");
    tempP.textContent = '';
    tempP.style.fontSize = '5px';
    CITY_NAME_DIV.appendChild(tempP);

    //show city names 
    for(let i = 1; i <= AMOUNT_CITIES; i++) {
      button[i] = document.createElement("button");
      button[i].setAttribute('class', 'button-18');
      button[i].style.margin = '2px';
      button[i].textContent = Cities_list[i].name;
      button[i].onclick = function() {
        showDataCity(i);
      }
      CITY_NAME_DIV.appendChild(button[i]);
    } 
  } 

  //Show and hide menu

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right ="-200px";
}
