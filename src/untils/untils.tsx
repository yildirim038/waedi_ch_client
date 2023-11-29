export const handleTokenCheck =  (pInfo :Function) => {
    try {
      const authRole = localStorage.getItem('role')
      if(authRole){
        pInfo({
          isAuthenticated: true,
          role: authRole,
        });
      }
    } catch (error) {
      pInfo({
        isAuthenticated: false,
        role: '',
      });
      
    }
}

