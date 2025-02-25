import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Alert from '../components/Alert';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const { login, register } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result;
      if (isLogin) {
        result = await login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          showAlert('Şifreler eşleşmiyor!', 'error');
          return;
        }
        result = await register({
          email: formData.email,
          password: formData.password,
          name: formData.name
        });
      }

      if (result.success) {
        showAlert(
          isLogin ? 'Başarıyla giriş yapıldı!' : 'Hesabınız oluşturuldu!',
          'success'
        );
        setTimeout(() => navigate('/'), 1500);
      } else {
        showAlert(result.error, 'error');
      }
    } catch (error) {
      showAlert(
        error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.',
        'error'
      );
    }
  };


  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : ''}`}>
      <Alert
        isVisible={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      />

      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="form-container"
          initial={false}
          animate={{ height: isLogin ? 'auto' : 'auto' }}
        >
          <div className="form-header">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
            >
              {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun'}
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required={!isLogin}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Şifre</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="confirmPassword">Şifre Tekrar</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required={!isLogin}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="submit-button"
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </motion.button>
          </form>

          <div className="form-footer">
            <p>
              {isLogin ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleForm}
                className="toggle-button"
              >
                {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
              </motion.button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;