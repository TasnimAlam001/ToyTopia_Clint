const currentRoute = window.location.pathname;


if (currentRoute === '/') {
  document.title = 'Home Page -ToyTopia';
} 
else if (currentRoute === '/allToys') {
  document.title = 'ToyTopia-All Toys';
}
 else if (currentRoute === '/addToy') {
  document.title = 'ToyTopia-Add Toy';
} 
else if (currentRoute === '/login') {
  document.title = 'ToyTopia-Log In';
}
else if (currentRoute === '/myToys') {
  document.title = 'ToyTopia-My Toys';
}
else if (currentRoute === '/register') {
  document.title = 'ToyTopia-Register';
} else {
  document.title = 'ToyTopia';
}