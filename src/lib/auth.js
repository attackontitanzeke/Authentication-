export const auth = {
  signUp: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === email)) {
      throw new Error('User already exists');
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  },

  signIn: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    localStorage.setItem('currentUser', JSON.stringify({ email }));
    return true;
  },

  signOut: () => {
    localStorage.removeItem('currentUser');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
};
