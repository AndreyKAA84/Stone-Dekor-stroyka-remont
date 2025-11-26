// public/admin/identity.js
window.netlifyIdentity = {
  on: () => {},
  off: () => {},
  init: () => {},
  open: () => {
    // Перенаправляем на наш self-hosted Git Gateway OAuth
    window.location.href = '/.netlify/functions/git-gateway';
  },
  currentUser: () => null
};